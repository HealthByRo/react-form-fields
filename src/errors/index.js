/* @flow */

import React from 'react';
import type {
  ErrorWrapperProps,
  SingleErrorProps,
  MultipleErrorsProps,
} from './types';

export function SingleError(props: SingleErrorProps) {
  if (props.value) {
    return <div className="msg msg--error">{props.value}</div>
  }

  return null;
}

export function MultipleErrors(props: MultipleErrors) {
  const value = props.value;
  let errors;

  if (Array.isArray(value)) {
    errors = value.map((error) =>
      <SingleError key={error} value={error} />
    );
  }

  if (errors && errors.length) {
    return (
      <div>
        {errors}
      </div>
    )
  }

  return null;
}

export default function ErrorsWrapper(props: ErrorWrapperProps) {
  const errors = props.errors;

  if (Array.isArray(errors)) {
    return <MultipleErrors value={errors} />
  } else if (errors) {
    return <SingleError value={errors} />
  }

  return null;
}
