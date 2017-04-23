/* @flow */

import React from 'react';
import { composeInputProps } from './helpers';
import type { InputProps, TextFieldElementProps } from './types';

const EmailFieldElement = (props: TextFieldElementProps) => {
  const inputProps: InputProps = composeInputProps('password', props);

  return (
    <input {...inputProps} />
  );
};
// TODO figure out a better way of using defaults in stateless component
EmailFieldElement.defaultProps = {
  className: 'textfield',
};

export default EmailFieldElement;
