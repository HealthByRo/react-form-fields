/* @flow */

import React from 'react';
import type { InputProps } from '../types';

const PasswordField = (props: InputProps) => (
  <input type="password" {...props} />
);
PasswordField.defaultProps = {
  className: 'textfield',
};

export default PasswordField;
