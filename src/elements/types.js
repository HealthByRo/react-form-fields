/* @flow */

import type { Children } from 'react';

export type ErrorElementProps = {
  className?: string,
  children?: Children,
};

export type LabelElementProps = {
  children?: Children,
  label: string,
  inputId: string,
};

export type TextFieldElementProps = {
  className?: string,
  inputId: string,
  name: string,
  placeholder?: string,
  value?: string,
};

export type InputProps = {
  className?: string,
  id: string,
  name: string,
  placeholder?: string,
  value?: string,
};
