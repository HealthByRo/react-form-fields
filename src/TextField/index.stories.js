import React from 'react';
import { storiesOf } from '@kadira/storybook';
import TextField from './';

storiesOf('Fields: TextField', module)
  .add('input', () => {
    const props = {
      name: 'TEXT_FIELD_NAME',
    };

    return (
      <TextField {...props} />
    );
  })
  .add('input + placeholder', () => {
    const props = {
      name: 'TEXT_FIELD_NAME',
      placeholder: 'Sample text field with placeholder',
    };

    return (
      <TextField {...props} />
    );
  })
  .add('input + placeholder + error', () => {
    const props = {
      errors: ['Sample error for field'],
      name: 'TEXT_FIELD_NAME',
      placeholder: 'Sample text field with placeholder',
    };

    return (
      <TextField {...props} />
    );
  })
  .add('input + placeholder + multiple errors', () => {
    const props = {
      errors: [
        'First error for field',
        'Second error for field',
      ],
      name: 'TEXT_FIELD_NAME',
      placeholder: 'Sample text field with placeholder',
    };

    return (
      <TextField {...props} />
    );
  })
  .add('input + label', () => {
    const props = {
      name: 'TEXT_FIELD_NAME',
      label: 'Sample label',
    };

    return (
      <TextField {...props} />
    );
  })
  .add('input + label + error', () => {
    const props = {
      errors: ['Sample error for field'],
      name: 'TEXT_FIELD_NAME',
      label: 'Sample label',
    };

    return (
      <TextField {...props} />
    );
  })
  .add('input + label + multiple errors', () => {
    const props = {
      errors: [
        'First error for field',
        'Second error for field',
      ],
      name: 'TEXT_FIELD_NAME',
      label: 'Sample label',
    };

    return (
      <TextField {...props} />
    );
  })
  .add('input + label + placeholder', () => {
    const props = {
      name: 'TEXT_FIELD_NAME',
      label: 'Sample label',
      placeholder: 'Sample text field with placeholder',
    };

    return (
      <TextField {...props} />
    );
  })
  .add('input + label + placeholder + error', () => {
    const props = {
      errors: ['Sample error for field'],
      name: 'TEXT_FIELD_NAME',
      label: 'Sample label',
      placeholder: 'Sample text field with placeholder',
    };

    return (
      <TextField {...props} />
    );
  })
  .add('input + label + placeholder + mutliple errors', () => {
    const props = {
      errors: [
        'First error for field',
        'Second error for field',
      ],
      name: 'TEXT_FIELD_NAME',
      label: 'Sample label',
      placeholder: 'Sample text field with placeholder',
    };

    return (
      <TextField {...props} />
    );
  });
