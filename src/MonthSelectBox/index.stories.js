/*
 * MonthSelectBox Stories
 *
 * This contains all the stories for the MonthSelectBox component.
 */
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import MonthSelectBox from './';

storiesOf('MonthSelectBox', module)
  .add('full month names', () => (
    <MonthSelectBox onClick={action('clicked')} />
  ))
  .add('short month names', () => (
    <MonthSelectBox
      mode="short"
      onClick={action('clicked')}
    />
  ))
  .add('months as numbers', () => (
    <MonthSelectBox
      mode="numbers"
      onClick={action('clicked')}
    />
  ))
  .add('with selected May', () => (
    <MonthSelectBox
      defaultValue="4"
      onClick={action('clicked')}
    />
  ));
