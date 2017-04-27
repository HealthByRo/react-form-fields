/* @flow */

import type { Children } from 'react';

export type ErrorsType = Array<string>;

export type ErrorsProps = {
  errors: ?ErrorsType,
};

export type FieldProps = {
  children?: Children,
  errors?: ErrorsType,
  inputId?: string,
  label?: string,
  name: string,
  placeholder?: string,
  value?: string,
};
