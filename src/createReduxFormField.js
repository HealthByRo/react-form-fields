/**
*
* createReduxFormField
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _isArray from 'lodash/isArray';

export default function createReduxFormField(InputComponent) {
  return class WrappedReduxFormFieldComponent extends Component { // eslint-disable-line react/prefer-stateless-function
    static propTypes = {
      input: PropTypes.object.isRequired,
      meta: PropTypes.object.isRequired,
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    };

    static defaultProps = {
      disabled: false,
    };

    getErrors() {
      const { error, touched } = this.props.meta;

      if (error && touched) {
        return _isArray(error) ? error : [error];
      }

      return null;
    }

    render() {
      const {
        input,
        id,
        label,
        placeholder,
        disabled,
        meta: { asyncValidating },
      } = this.props;

      return (
        <div className={asyncValidating ? 'async-validating' : ''}>
          <InputComponent
            id={id}
            label={label}
            placeholder={placeholder}
            disabled={disabled}
            errors={this.getErrors()}
            {...input}
          />
        </div>);
    }
  };
}
