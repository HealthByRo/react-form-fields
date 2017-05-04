/* @flow */

import React from 'react';
import { composeInputProps } from '../helpers';
import type { InputProps, TextFieldElementProps } from '../types';

const TextField = (props: TextFieldElementProps) => {
  const inputProps: InputProps = composeInputProps('text', props);

  return (
    <input type="text" {...inputProps} />
  );
};
// TODO figure out a better way of using defaults in stateless component
TextField.defaultProps = {
  className: 'textfield',
};

export default TextField;
