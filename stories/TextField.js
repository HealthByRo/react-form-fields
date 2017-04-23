import React from 'react';
import { storiesOf } from '@kadira/storybook';
import TextField from '../src/TextField';

storiesOf('Fields.TextField', module)
  .add('input', () => {
    const props = {
      inputId: 'ID-I',
    };

    return (
      <TextField {...props} />
    );
  })
  .add('input + placeholder', () => {
    const props = {
      inputId: 'ID-IP',
      placeholder: 'Sample input field with placeholder',
    };

    return (
      <TextField {...props} />
    );
  })
  .add('input + placeholder + error', () => {
    const props = {
      errors: ['Sample error for field'],
      inputId: 'ID-IPE',
      placeholder: 'Sample input field with placeholder',
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
      inputId: 'ID-IPES',
      placeholder: 'Sample input field with placeholder',
    };

    return (
      <TextField {...props} />
    );
  })
  .add('input + label', () => {
    const props = {
      inputId: 'ID-IL',
      label: 'Sample label',
    };

    return (
      <TextField {...props} />
    );
  })
  .add('input + label + error', () => {
    const props = {
      errors: ['Sample error for field'],
      inputId: 'ID-ILE',
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
      inputId: 'ID-ILES',
      label: 'Sample label',
    };

    return (
      <TextField {...props} />
    );
  })
  .add('input + label + placeholder', () => {
    const props = {
      inputId: 'ID-ILP',
      label: 'Sample label',
      placeholder: 'Sample input field with placeholder',
    };

    return (
      <TextField {...props} />
    );
  })
  .add('input + label + placeholder + error', () => {
    const props = {
      errors: ['Sample error for field'],
      inputId: 'ID-ILPE',
      label: 'Sample label',
      placeholder: 'Sample input field with placeholder',
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
      inputId: 'ID-ILPES',
      label: 'Sample label',
      placeholder: 'Sample input field with placeholder',
    };

    return (
      <TextField {...props} />
    );
  });
