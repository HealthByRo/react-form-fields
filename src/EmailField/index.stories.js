import React from 'react';
import { storiesOf } from '@kadira/storybook';
import EmailField from './';
import createFormField from '../createFormField';

const EmailFormField = createFormField(EmailField);

storiesOf('Fields: EmailField', module)
  .add('input', () => {
    const props = {
      name: 'EMAIL_FIELD_NAME',
    };

    return (
      <EmailFormField {...props} />
    );
  })
  .add('input + placeholder', () => {
    const props = {
      name: 'EMAIL_FIELD_NAME',
      placeholder: 'Sample email field with placeholder',
    };

    return (
      <EmailFormField {...props} />
    );
  })
  .add('input + placeholder + error', () => {
    const props = {
      errors: ['Sample error for field'],
      name: 'EMAIL_FIELD_NAME',
      placeholder: 'Sample email field with placeholder',
    };

    return (
      <EmailFormField {...props} />
    );
  })
  .add('input + placeholder + multiple errors', () => {
    const props = {
      errors: [
        'First error for field',
        'Second error for field',
      ],
      name: 'EMAIL_FIELD_NAME',
      placeholder: 'Sample email field with placeholder',
    };

    return (
      <EmailFormField {...props} />
    );
  })
  .add('input + label', () => {
    const props = {
      name: 'EMAIL_FIELD_NAME',
      label: 'Sample label',
    };

    return (
      <EmailFormField {...props} />
    );
  })
  .add('input + label + error', () => {
    const props = {
      errors: ['Sample error for field'],
      name: 'EMAIL_FIELD_NAME',
      label: 'Sample label',
    };

    return (
      <EmailFormField {...props} />
    );
  })
  .add('input + label + multiple errors', () => {
    const props = {
      errors: [
        'First error for field',
        'Second error for field',
      ],
      name: 'EMAIL_FIELD_NAME',
      label: 'Sample label',
    };

    return (
      <EmailFormField {...props} />
    );
  })
  .add('input + label + placeholder', () => {
    const props = {
      name: 'EMAIL_FIELD_NAME',
      label: 'Sample label',
      placeholder: 'Sample email field with placeholder',
    };

    return (
      <EmailFormField {...props} />
    );
  })
  .add('input + label + placeholder + error', () => {
    const props = {
      errors: ['Sample error for field'],
      name: 'EMAIL_FIELD_NAME',
      label: 'Sample label',
      placeholder: 'Sample email field with placeholder',
    };

    return (
      <EmailFormField {...props} />
    );
  })
  .add('input + label + placeholder + mutliple errors', () => {
    const props = {
      errors: [
        'First error for field',
        'Second error for field',
      ],
      name: 'EMAIL_FIELD_NAME',
      label: 'Sample label',
      placeholder: 'Sample email field with placeholder',
    };

    return (
      <EmailFormField {...props} />
    );
  });
