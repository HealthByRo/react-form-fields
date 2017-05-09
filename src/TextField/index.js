/* @flow */

import React from 'react';
import type { InputProps } from '../types';

const TextField = (props: InputProps) => (
  <input type="text" {...props} />
);
TextField.defaultProps = {
  className: 'textfield',
};

export default TextField;
