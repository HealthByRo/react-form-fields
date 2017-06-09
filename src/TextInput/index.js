/* @flow */

import React from 'react';
import type { InputProps } from '../types';

const TextInput = (props: InputProps) => (
  <input type="text" {...props} />
);

TextInput.defaultProps = {
  className: 'textfield',
};

export default TextInput;
