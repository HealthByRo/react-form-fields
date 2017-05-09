/* @flow */

import React from 'react';
import { composeInputProps } from '../helpers';
import type { InputProps, TextFieldElementProps } from '../types';

const PasswordField = (props: TextFieldElementProps) => {
  const inputProps: InputProps = composeInputProps('password', props);

  return (
    <input type="password" {...inputProps} />
  );
};
PasswordField.defaultProps = {
  className: 'textfield',
};

export default PasswordField;
