/* @flow */

import type { Children } from 'react';

/* eslint-disable no-undef */
export type FunctionComponent<P> = (props: P) => ?React$Element<any>;
export type ClassComponent<D, P, S> = Class<React$Component<D, P, S>>;
/* eslint-enable no-undef */

export type Component<D, P, S> = ClassComponent<D, P, S> | FunctionComponent<P>

export type ErrorsType = Array<string>;

export type ErrorsProps = {
  errors: ?ErrorsType,
};

export type LabelProps = {
  className?: string,
  htmlFor: string,
  text: ?string,
};

export type InputProps = {
  className?: string,
  id: string,
  name: string,
  placeholder?: string,
  value?: string,
};

export type FieldProps = {
  children?: Children,
  errors?: ErrorsType,
  inputId?: string,
  label?: string,
  name: string,
  placeholder?: string,
  value?: string,

  labelProps?: Object,
  inputProps?: Object,
  errorsProps?: Object,
};
