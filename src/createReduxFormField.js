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
        meta: { asyncValidating },
        ...fieldProps
      } = this.props;

      return (
        <div className={asyncValidating ? 'async-validating' : ''}>
          <InputComponent
            errors={this.getErrors()}
            {...input}
            {...fieldProps}
          />
        </div>);
    }
  };
}
