/* @flow */

import React, { PureComponent } from 'react';
import type { ErrorElementProps } from './types';

export default class ErrorElement extends PureComponent {
  props: ErrorElementProps;

  static defautlProps = {
    className: 'msg msg--error',
  };

  render() {
    const {
      className,
      children,
    } = this.props;

    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}
