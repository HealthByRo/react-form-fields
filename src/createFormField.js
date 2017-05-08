/* @flow */

import React, { PureComponent } from 'react';
import snakeCase from 'lodash/snakeCase';
import { LabelElement } from './elements';
import { FieldWrapper } from './wrappers';
import Errors from './Errors';
import type { FieldProps, Component } from './types';

export default function createFormField(WrappedComponent: Component<*, FieldProps, *>) {
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
      return `id_${snakeCase(props.name)}`;
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
