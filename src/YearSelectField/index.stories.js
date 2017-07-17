/* @flow */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import YearSelectField from './';

const defaultProps = {
  name: 'YEAR_SELECT_FIELD_NAME',
  min: 2000,
  max: 2050,
  count: 5,
  onClick: action('clicked'),
};
const singleError = [
  'Sample single error for field',
];
const multipleErrors = [
  'First error for field',
  'Second error for field',
];
const label = 'Sample label';

storiesOf('Fields: YearSelectField', module)
  .add('select', () => {
    const props = { ...defaultProps };

    return (
      <YearSelectField {...props} />
    );
  })
  .add('select + label', () => {
    const props = {
      ...defaultProps,
      label,
    };

    return (
      <YearSelectField {...props} />
    );
  })
  .add('select + label + error', () => {
    const props = {
      ...defaultProps,
      errors: singleError,
      label,
    };

    return (
      <YearSelectField {...props} />
    );
  })
  .add('select + label + multiple errors', () => {
    const props = {
      ...defaultProps,
      errors: multipleErrors,
      label,
    };

    return (
      <YearSelectField {...props} />
    );
  });
