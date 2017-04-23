/* @flow */

import React from 'react';
import BaseField from './BaseField';
import { PasswordFieldElement } from './elements';
import type { FieldProps } from './types';

export default class PasswordField extends BaseField {
  throwMissingNameError() {
    // TODO create file with errors, add MissingParamError
    throw new Error('name param is required for PasswordField');
  }

  renderFieldElement(props: FieldProps) {
    return (
      <PasswordFieldElement {...props} />
    );
  }

  render() {
    return super.renderWithField(this.renderFieldElement);
  }
}
