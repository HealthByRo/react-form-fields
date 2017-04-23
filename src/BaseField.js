/* @flow */

import React, { PureComponent } from 'react';
import { LabelElement } from './elements';
import { FieldWrapper } from './wrappers';
import Errors from './Errors';
import type { FieldProps } from './types';

export default class BaseField extends PureComponent {
  constructor(props: FieldProps) {
    super(props);

    if (!props.name || props.name.length < 1) {
      this.throwMissingNameError();
    }
  }

  throwMissingNameError() {}

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

  renderWithField(fieldRender: Function) {
    const props = this.composeProps();

    return (
      <FieldWrapper>
        {props.label &&
          <LabelElement {...props} />
        }
        {fieldRender(props)}
        <Errors {...this.props} />
      </FieldWrapper>
    );
  }
}
