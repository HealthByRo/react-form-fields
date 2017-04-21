/* @flow */

import React from 'react';
import type { LabelElementProps } from './types';

export default function LabelElement(props: LabelElementProps) {
  return (
    <label for="{props.inputId}">
      {props.children}
      {props.label}
    </label>
  );
}
