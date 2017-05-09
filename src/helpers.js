/* @flow */

import type { InputProps, TextFieldElementProps } from './types';

export const composeInputProps = (inputType: string, props: TextFieldElementProps): InputProps => {
  const composedProps: InputProps = {
    id: props.inputId,
    name: props.name,
    className: props.className,
    type: inputType,
  };

  if (props.placeholder) {
    composedProps.placeholder = props.placeholder;
  }

  return composedProps;
};
