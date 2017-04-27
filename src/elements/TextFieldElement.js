/* @flow */

import React from 'react';
import { composeInputProps } from './helpers';
import type { InputProps, TextFieldElementProps } from './types';

const TextFieldElement = (props: TextFieldElementProps) => {
  const inputProps: InputProps = composeInputProps('text', props);

  return (
    <input {...inputProps} />
  );
};
// TODO figure out a better way of using defaults in stateless component
TextFieldElement.defaultProps = {
  className: 'textfield',
};

export default TextFieldElement;
