/* @flow */

import React from 'react';
import type { InputProps } from '../types';

const EmailInput = (props: InputProps) => (
  <input type="email" {...props} />
);

EmailInput.defaultProps = {
  className: 'textfield',
};

export default EmailInput;
