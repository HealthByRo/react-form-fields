/* @flow */

import React from 'react';
import type { InputProps } from '../types';

const EmailField = (props: InputProps) => (
  <input type="email" {...props} />
);
EmailField.defaultProps = {
  className: 'textfield',
};

export default EmailField;
