/* @flow */

import React from 'react';
import BaseField from '../BaseField';
import { PasswordFieldElement } from '../elements';
import type { FieldProps } from '../types';

export default class PasswordField extends BaseField {
  renderFieldElement(props: FieldProps) {
    return (
      <PasswordFieldElement {...props} />
    );
  }

  render() {
    return super.renderWithField(this.renderFieldElement);
  }
}
