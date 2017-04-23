/* @flow */

import React, { PureComponent } from 'react';
import { LabelElement, EmailFieldElement } from './elements';
import { FieldWrapper } from './wrappers';
import Errors from './Errors';
import type { FieldProps } from './types';

export default class EmailField extends PureComponent {
  constructor(props: FieldProps) {
    super(props);

    if (!props.name || props.name.length < 1) {
      // TODO create file with errors, add MissingParamError
      throw new Error('name param is required for EmailField');
    }
  }

  composeProps(): FieldProps {
    const props = { ...this.props };

    if (!props.inputId) {
      props.inputId = this.generateInputId(props);
    }

    return props;
  }

  // TODO add some unique id at the end
  generateInputId(props: FieldProps): string {
    return `TF-${props.name}`;
  }

  props: FieldProps;

  render() {
    const props = this.composeProps();

    return (
      <FieldWrapper>
        {props.label &&
          <LabelElement {...props} />
        }
        <EmailFieldElement {...props} />
        <Errors {...this.props} />
      </FieldWrapper>
    );
  }
}
