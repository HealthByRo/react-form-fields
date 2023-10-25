/**
*
* createReduxFormField
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import _isArray from 'lodash/isArray';
import _get from 'lodash/get';

export default function createReduxFormField(InputComponent) {
  function ReduxFormField(props) { // eslint-disable-line react/prefer-stateless-function
    const {
      input,
      meta,
      meta: { asyncValidating },
      ...fieldProps
    } = props;
    const errors = getErrorsFromMeta(meta);
    const processedInput = mapInputValue(input);

    return (
      <div className={asyncValidating ? 'async-validating' : ''}>
        <InputComponent
          errors={errors}
          {...processedInput}
          {...fieldProps}
        />
      </div>);
  }

  ReduxFormField.propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
  };

  return ReduxFormField;
}

function getErrorsFromMeta(meta) {
  const {
    error,
    touched,
  } = meta;

  if (error && touched) {
    return _isArray(error) ? error : [error];
  }

  return null;
}

function mapInputValue(input) {
  const processedInput = { ...input };

  if (typeof _get(processedInput, 'value.toJS') === 'function') {
    processedInput.value = processedInput.value.toJS();
  }

  return processedInput;
}
