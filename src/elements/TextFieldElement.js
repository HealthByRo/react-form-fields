/* @flow */

import React from 'react';
import type { InputProps, TextFieldElementProps } from './types';

const TextFieldElement = (props: TextFieldElementProps) => {
  const inputProps: InputProps = {
    id: props.inputId,
    type: 'text',
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
TextFieldElement.defaultProps = {
  className: 'textfield',
};

export default TextFieldElement;
