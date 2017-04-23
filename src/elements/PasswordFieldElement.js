/* @flow */

import React from 'react';
import type { InputProps, TextFieldElementProps } from './types';

const EmailFieldElement = (props: TextFieldElementProps) => {
  const inputProps: InputProps = {
    id: props.inputId,
    type: 'password',
    name: props.name,
    className: props.className,
  };

  if (props.placeholder) {
    inputProps.placeholder = props.placeholder;
  }

  return (
    <input {...inputProps} />
  );
};
// TODO figure out a better way of using defaults in stateless component
EmailFieldElement.defaultProps = {
  className: 'textfield',
};

export default EmailFieldElement;
