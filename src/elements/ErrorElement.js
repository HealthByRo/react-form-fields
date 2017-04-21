/* @flow */

import React, { PureComponent } from 'react';
import type { ErrorElementProps } from './types';

export default class ErrorElement extends PureComponent {
  static defaultProps = {
    className: 'msg msg--error',
  };

  props: ErrorElementProps;

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
