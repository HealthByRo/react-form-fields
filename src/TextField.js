/* @flow */

import React from 'react';
import BaseField from './BaseField';
import { TextFieldElement } from './elements';
import type { FieldProps } from './types';

export default class TextField extends BaseField {
  throwMissingNameError() {
    // TODO create file with errors, add MissingParamError
    throw new Error('name param is required for TextField');
  }

  renderFieldElement(props: FieldProps) {
    return (
      <TextFieldElement {...props} />
    );
  }

  render() {
    return super.renderWithField(this.renderFieldElement);
  }
}
