import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ErrorsWrapper from '../src/errors';

storiesOf('Errors.ErrorWrapper', module)
  .add('Single message', () => {
    const props = {
      errors: 'Single message'
    };

    return (
      <ErrorsWrapper {...props} />
    )
  })
  .add('Array of messages', () => {
    const props = {
      errors: [
        'First message',
        'Second message',
      ],
    };

    return (
      <ErrorsWrapper {...props} />
    )
  })
