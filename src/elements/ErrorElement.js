/* @flow */

import React from 'react';
import type { ErrorElementProps } from './types';

const ErrorElement = (props: ErrorElementProps) => (
  <div className={props.className}>
    {props.children}
  </div>
);
// TODO figure out a better way of using defaults in stateless component
ErrorElement.defaultProps = {
  className: 'msg msg--error',
};

export default ErrorElement;
