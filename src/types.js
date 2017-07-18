/* @flow */

import type { Children } from 'react';

/* eslint-disable no-undef */
export type FunctionComponent<P> = (props: P) => ?React$Element<any>;
export type ClassComponent<D, P, S> = Class<React$Component<D, P, S>>;
export type ClassPureComponent<D, P, S> = Class<React$PureComponent<D, P, S>>;
/* eslint-enable no-undef */

export type Component<D, P, S> = ClassComponent<D, P, S> | FunctionComponent<P>

export type StringOrNumber = string | number

export type ErrorsType = Array<string>;

export type ErrorsProps = {
  errors?: ?ErrorsType,
};

export type LabelProps = {
  className?: string,
  htmlFor: string,
  text: ?string,
};

export type FieldProps = {
  className?: string,
  count?: StringOrNumber,
  defaultValue?: string,
  errors?: ErrorsType,
  id?: string,
  label?: string,
  min?: StringOrNumber,
  max?: StringOrNumber,
  name: string,
  placeholder?: string,
  onClick?: () => void,
  step?: StringOrNumber,

  labelProps?: LabelProps,
  inputProps?: InputProps,
  errorsProps?: ErrorsProps,
};

export type WrappedComponentProps = InputProps | MonthSelectBoxProps | YearSelectBoxProps

export type InputProps = {
  className?: string,
  id?: string,
  name: string,
  placeholder?: string,
  defaultValue?: string,
  onClick?: () => void,
};

export type MonthSelectBoxProps = {
  children?: Children,
  className?: string,
  defaultValue?: string,
  name: string,
  mode?: 'full' | 'numbers' | 'short',
}

export type YearSelectBoxProps = {
  children?: Children,
  className?: string,
  defaultValue?: string,
  count?: StringOrNumber,
  max?: StringOrNumber,
  min: StringOrNumber,
  name: string,
  step?: StringOrNumber,
}
