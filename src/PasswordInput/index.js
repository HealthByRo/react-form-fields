/* @flow */

import React from 'react';
import type { InputProps } from '../types';

const PasswordInput = (props: InputProps) => (
  <input type="password" {...props} />
);

PasswordInput.defaultProps = {
  className: 'textfield',
};

export default PasswordInput;
