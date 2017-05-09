/* @flow */

import React from 'react';
import type { WrapperProps } from './types';

const FieldWrapper = (props: WrapperProps) => (
  <div className={props.className}>
    {props.children}
  </div>
);
FieldWrapper.defaultProps = {
  className: 'form-item',
};

export default FieldWrapper;
