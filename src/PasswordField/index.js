/* @flow */

import React from 'react';
import createFormField from '../createFormField';
import { PasswordFieldElement } from '../elements';
import type { FieldProps } from '../types';

const PasswordField = (props: FieldProps) => (
  <PasswordFieldElement{...props} />
);

export default createFormField(PasswordField);
