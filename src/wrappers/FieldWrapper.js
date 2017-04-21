/* @flow */

import React, { PureComponent } from 'react';
import type { WrapperProps } from './types';

export default class FieldWrapper extends PureComponent {
  props: WrapperProps;

  static defaultProps = {
    className: "form-item",
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
