/* @flow */

import React, { PureComponent } from 'react';
import type { TextFieldElementProps } from './types';

export default class TextFieldElement extends PureComponent {
  static defaultProps = {
    className: 'textfield',
  };

  props: TextFieldElementProps;

  render() {
    const {
      placeholder,
      className,
    } = this.props;

    return (
      <input
        type="text"
        placeholder={placeholder}
        className={className}
      />
    );
  }
}
