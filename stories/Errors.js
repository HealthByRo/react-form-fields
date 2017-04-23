import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Errors from '../src/Errors';

storiesOf('Helpers.Errors', module)
  .add('No errors', () => (
    <Errors />
  ))
  .add('Single error', () => {
    const props = {
      errors: ['Single error message'],
    };

    return (
      <Errors {...props} />
    );
  })
  .add('Multiple errors', () => {
    const props = {
      errors: [
        'First error message',
        'Second error message',
      ],
    };

    return (
      <Errors {...props} />
    );
  });
