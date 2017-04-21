/* @flow */

import React, { PureComponent } from 'react';
import type { WrapperProps } from './types';

export default class ErrorsListWrapper extends PureComponent {
  static defaultProps = {
    className: 'errors-list',
  };

  props: WrapperProps;

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
