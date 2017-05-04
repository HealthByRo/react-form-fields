/* @flow */

import React from 'react';
import createFormField from '../createFormField';
import { EmailFieldElement } from '../elements';
import type { FieldProps } from '../types';

const EmailField = (props: FieldProps) => (
  <EmailFieldElement {...props} />
);

export default createFormField(EmailField);
