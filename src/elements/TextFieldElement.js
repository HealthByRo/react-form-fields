/* @flow */

import React from 'react';
import type { TextFieldElementProps } from './types';

const TextFieldElement = (props: TextFieldElementProps) => (
  <input
    type="text"
    placeholder={props.placeholder}
    className={props.className}
  />
);
// TODO figure out a better way of using defaults in stateless component
TextFieldElement.defaultProps = {
  className: 'textfield',
};

export default TextFieldElement;
