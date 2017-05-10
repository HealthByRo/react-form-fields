/* @flow */

import React from 'react';
import type { LabelElementProps } from './types';

const LabelElement = (props: LabelElementProps) => (
  <label htmlFor={props.htmlFor}>
    {props.children}
    {props.text}
  </label>
);

export default LabelElement;
