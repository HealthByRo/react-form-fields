/* @flow */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import YearSelectBox from './';

storiesOf('YearSelectBox', module)
  .add('with years range 2015-2020', () => (
    <YearSelectBox
      name="YEAR_SELECT_BOX_NAME"
      min="2015"
      max="2020"
      onClick={action('clicked')}
    />
  ))
  .add('with selected 2018', () => (
    <YearSelectBox
      name="YEAR_SELECT_BOX_NAME"
      min="2015"
      max="2020"
      defaultValue="2018"
      onClick={action('clicked')}
    />
  ))
  .add('with 10 years from 2020', () => (
    <YearSelectBox
      name="YEAR_SELECT_BOX_NAME"
      min="2020"
      count="10"
      onClick={action('clicked')}
    />
  ))
  .add('with years range 2000-2100 and step 10 years', () => (
    <YearSelectBox
      name="YEAR_SELECT_BOX_NAME"
      min="2000"
      max="2100"
      // $FlowFixMe
      step="10"
      onClick={action('clicked')}
    />
  ))
  .add('with custom children', () => (
    <YearSelectBox
      name="YEAR_SELECT_BOX_NAME"
      min="2015"
      max="2020"
      onClick={action('clicked')}
    >
      <option value="">select year</option>
    </YearSelectBox>
  ));
