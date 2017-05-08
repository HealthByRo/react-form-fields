/* @flow */

import React from 'react';
import { composeInputProps } from '../helpers';
import type { InputProps, TextFieldElementProps } from '../types';

const EmailField = (props: TextFieldElementProps) => {
  const inputProps: InputProps = composeInputProps('email', props);

  return (
    <input type="email" {...inputProps} />
  );
};
EmailField.defaultProps = {
  className: 'textfield',
};

export default EmailField;
