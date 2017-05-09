/* @flow */

import type { Children } from 'react';

export type ErrorElementProps = {
  className?: string,
  children?: Children,
};

export type LabelElementProps = {
  children?: Children,
  className?: string,
  htmlFor: string,
  text: string,
};
