/* @flow */

import React from 'react';
import BaseField from '../BaseField';
import { EmailFieldElement } from '../elements';
import type { FieldProps } from '../types';

export default class EmailField extends BaseField {
  renderFieldElement(props: FieldProps) {
    return (
      <EmailFieldElement {...props} />
    );
  }

  render() {
    return super.renderWithField(this.renderFieldElement);
  }
}
