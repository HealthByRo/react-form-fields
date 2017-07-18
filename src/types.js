/* @flow */

import type { Children } from 'react';

/* eslint-disable no-undef */
export type FunctionComponent<P> = (props: P) => ?React$Element<any>;
export type ClassComponent<D, P, S> = Class<React$Component<D, P, S>>;
export type ClassPureComponent<D, P, S> = Class<React$PureComponent<D, P, S>>;
/* eslint-enable no-undef */

export type Component<D, P, S> = ClassComponent<D, P, S> | FunctionComponent<P>

export type ErrorsType = Array<string>;

export type ErrorsProps = {
  errors?: ?ErrorsType,
};

export type MonthSelectMode = 'full' | 'numbers' | 'short'

export type StringOrNumber = string | number

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
  max?: StringOrNumber,
  min?: StringOrNumber,
  mode?: MonthSelectMode,
  name: string,
  placeholder?: string,
  onClick?: () => void,
  step?: StringOrNumber,

  errorsProps?: ErrorsProps,
  inputProps?: InputProps,
  labelProps?: LabelProps,
};

export type WrappedComponentProps = InputProps | MonthSelectBoxProps | YearSelectBoxProps

export type InputProps = {
  className?: string,
  defaultValue?: string,
  id?: string,
  name: string,
  onClick?: () => void,
  placeholder?: string,
};

export type MonthSelectBoxProps = {
  children?: Children,
  className?: string,
  defaultValue?: string,
  mode?: MonthSelectMode,
  name: string,
}

export type YearSelectBoxProps = {
  children?: Children,
  className?: string,
  count?: StringOrNumber,
  defaultValue?: string,
  max?: StringOrNumber,
  min: StringOrNumber,
  name: string,
  step?: StringOrNumber,
}
