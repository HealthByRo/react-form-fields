/* @flow */

import React, { PureComponent } from 'react';
import snakeCase from 'lodash/snakeCase';
import { LabelElement } from './elements';
import { FieldWrapper } from './wrappers';
import Errors from './Errors';
import type {
  FieldProps,
  LabelProps,
  ErrorsProps,
  Component,
  WrappedComponentProps,
} from './types';

export default function createFormField(WrappedComponent: Component<*, WrappedComponentProps, *>) {
  return class FormField extends PureComponent {
    constructor(props: FieldProps) {
      super(props);

      if (!props.name || props.name.length < 1) {
        // TODO create file with errors, add MissingParamError
        throw new Error(`name param is required for ${WrappedComponent.name}`);
      }
    }

    props: FieldProps;

    render() {
      const {
        labelProps,
        inputProps,
        errorsProps,
      } = composeProps(this.props);
      const showLabel = this.props.label || this.props.labelProps;

      return (
        <FieldWrapper>
          {showLabel &&
            <LabelElement {...labelProps} />
          }
          <WrappedComponent {...inputProps} />
          <Errors {...errorsProps} />
        </FieldWrapper>
      );
    }
  };
}

function composeProps(props: FieldProps): Object {
  const {
    name,
    placeholder,
    label,
    errors,
    ...inputProps
  } = props;

  inputProps.id = inputProps.id || generateInputId(props);
  inputProps.name = name;

  const labelProps: LabelProps = {
    htmlFor: inputProps.id,
    text: label,
  };

  const errorsProps: ErrorsProps = {
    errors,
  };

  // don't set placeholder when undefined
  // to avoid placeholder={undefined} in rendered html
  if (placeholder) {
    inputProps.placeholder = placeholder;
  }

  return {
    labelProps,
    inputProps,
    errorsProps,
  };
}

function generateInputId(props: FieldProps): string {
  return `id_${snakeCase(props.name)}`;
}
