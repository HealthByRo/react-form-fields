/* @flow */

import React, { PureComponent } from 'react';
import { LabelElement } from './elements';
import { FieldWrapper } from './wrappers';
import Errors from './Errors';
import type { FieldProps } from './types';

export default function createFormField(WrappedComponent) {
  return class FormField extends PureComponent {
    constructor(props: FieldProps) {
      super(props);

      if (!props.name || props.name.length < 1) {
        // TODO create file with errors, add MissingParamError
        throw new Error(`name param is required for ${WrappedComponent.name}`);
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
          <WrappedComponent {...props} />
          <Errors {...props} />
        </FieldWrapper>
      );
    }
  };
}

/*
export default class BaseField extends PureComponent {
  constructor(props: FieldProps) {
    super(props);

    if (!props.name || props.name.length < 1) {
      this.throwMissingNameError();
    }
  }

  throwMissingNameError() {
    // TODO create file with errors, add MissingParamError
    throw new Error(`name param is required for ${this.constructor.name}`);
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

  renderWithField(fieldRender: Function) {
    const props = this.composeProps();

    return (
      <FieldWrapper>
        {props.label &&
          <LabelElement {...props} />
        }
        {fieldRender(props)}
        <Errors {...props} />
      </FieldWrapper>
    );
  }
}
*/
