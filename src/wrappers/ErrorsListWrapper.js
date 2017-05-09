/* @flow */

import React from 'react';
import type { WrapperProps } from './types';

const ErrorsListWrapper = (props: WrapperProps) => (
  <div className={props.className}>
    {props.children}
  </div>
);
ErrorsListWrapper.defaultProps = {
  className: 'errors-list',
};

export default ErrorsListWrapper;
