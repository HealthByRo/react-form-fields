import React from 'react';
import { storiesOf } from '@kadira/storybook';
import PasswordField from './';

storiesOf('Fields: PasswordField', module)
  .add('input', () => {
    const props = {
      name: 'PASSWORD_FIELD_NAME',
    };

    return (
      <PasswordField {...props} />
    );
  })
  .add('input + placeholder', () => {
    const props = {
      name: 'PASSWORD_FIELD_NAME',
      placeholder: 'Sample password field with placeholder',
    };

    return (
      <PasswordField {...props} />
    );
  })
  .add('input + placeholder + error', () => {
    const props = {
      errors: ['Sample error for field'],
      name: 'PASSWORD_FIELD_NAME',
      placeholder: 'Sample password field with placeholder',
    };

    return (
      <PasswordField {...props} />
    );
  })
  .add('input + placeholder + multiple errors', () => {
    const props = {
      errors: [
        'First error for field',
        'Second error for field',
      ],
      name: 'PASSWORD_FIELD_NAME',
      placeholder: 'Sample password field with placeholder',
    };

    return (
      <PasswordField {...props} />
    );
  })
  .add('input + label', () => {
    const props = {
      name: 'PASSWORD_FIELD_NAME',
      label: 'Sample label',
    };

    return (
      <PasswordField {...props} />
    );
  })
  .add('input + label + error', () => {
    const props = {
      errors: ['Sample error for field'],
      name: 'PASSWORD_FIELD_NAME',
      label: 'Sample label',
    };

    return (
      <PasswordField {...props} />
    );
  })
  .add('input + label + multiple errors', () => {
    const props = {
      errors: [
        'First error for field',
        'Second error for field',
      ],
      name: 'PASSWORD_FIELD_NAME',
      label: 'Sample label',
    };

    return (
      <PasswordField {...props} />
    );
  })
  .add('input + label + placeholder', () => {
    const props = {
      name: 'PASSWORD_FIELD_NAME',
      label: 'Sample label',
      placeholder: 'Sample password field with placeholder',
    };

    return (
      <PasswordField {...props} />
    );
  })
  .add('input + label + placeholder + error', () => {
    const props = {
      errors: ['Sample error for field'],
      name: 'PASSWORD_FIELD_NAME',
      label: 'Sample label',
      placeholder: 'Sample password field with placeholder',
    };

    return (
      <PasswordField {...props} />
    );
  })
  .add('input + label + placeholder + mutliple errors', () => {
    const props = {
      errors: [
        'First error for field',
        'Second error for field',
      ],
      name: 'PASSWORD_FIELD_NAME',
      label: 'Sample label',
      placeholder: 'Sample password field with placeholder',
    };

    return (
      <PasswordField {...props} />
    );
  });
