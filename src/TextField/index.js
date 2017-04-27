/* @flow */

import React from 'react';
import BaseField from '../BaseField';
import { TextFieldElement } from '../elements';
import type { FieldProps } from '../types';

export default class TextField extends BaseField {
  renderFieldElement(props: FieldProps) {
    return (
      <TextFieldElement {...props} />
    );
  }

  render() {
    return super.renderWithField(this.renderFieldElement);
  }
}
