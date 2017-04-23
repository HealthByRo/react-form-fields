/* @flow */

import React from 'react';
import type { LabelElementProps } from './types';

const LabelElement = (props: LabelElementProps) => (
  <label htmlFor={props.inputId}>
    {props.children}
    {props.label}
  </label>
);

export default LabelElement;
