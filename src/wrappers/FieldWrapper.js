/* @flow */

import React, { PureComponent } from 'react';
import type { WrapperProps } from './types';

export default class FieldWrapper extends PureComponent {
  static defaultProps = {
    className: 'form-item',
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
