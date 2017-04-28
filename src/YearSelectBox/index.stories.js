/*
 * YearSelectBox Stories
 *
 * This contains all the stories for the YearSelectBox component.
 */
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import YearSelectBox from './';

storiesOf('YearSelectBox', module)
  .add('with years range 2015-2020', () => (
    <YearSelectBox
      min="2015"
      max="2020"
      onClick={action('clicked')}
    />
  ))
  .add('with selected 2018', () => (
    <YearSelectBox
      min="2015"
      max="2020"
      defaultValue="2018"
      onClick={action('clicked')}
    />
  ))
  .add('with 10 years from 2020', () => (
    <YearSelectBox
      min="2020"
      count="10"
      onClick={action('clicked')}
    />
  ))
  .add('with years range 2000-2100 and step 10 years', () => (
    <YearSelectBox
      min="2000"
      max="2100"
      step="10"
      onClick={action('clicked')}
    />
  ));
