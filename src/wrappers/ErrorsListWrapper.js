/* @flow */

import React, { PureComponent } from 'react';
import type { WrapperProps } from './types';

export default class ErrorsListWrapper extends PureComponent {
  props: WrapperProps;

  static defaultProps = {
    className: "errors-list",
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
