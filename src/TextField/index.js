/* @flow */

import React from 'react';
import createFormField from '../createFormField';
import { TextFieldElement } from '../elements';
import type { FieldProps } from '../types';

const TextField = (props: FieldProps) => (
  <TextFieldElement {...props} />
);

export default createFormField(TextField);
