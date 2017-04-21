/* @flow */

import type { Children } from 'react';

type InputId = string;

export type ErrorElementProps = {
  className?: string,
  children?: Children,
};

export type LabelElementProps = {
  children?: Children,
  label: string,
  inputId: InputId,
};

export type TextFieldElementProps = {
  className?: string,
  inputId: InputId,
  placeholder?: string,
  value?: string,
};
