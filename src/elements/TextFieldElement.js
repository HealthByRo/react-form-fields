/* @flow */

import React from 'react';
import type { TextFieldElementProps } from './types';

export default function TextFieldElement(props: TextFieldElementProps) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      className="textfield"
    />
  );
}
