/* @flow */

import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import MonthSelectBox from './';

storiesOf('MonthSelectBox', module)
  .add('full month names', () => (
    <MonthSelectBox
      name="MONTH_SELECT_BOX_FIELD"
      onClick={action('clicked')}
    />
  ))
  .add('short month names', () => (
    <MonthSelectBox
      name="MONTH_SELECT_BOX_FIELD"
      mode="short"
      onClick={action('clicked')}
    />
  ))
  .add('months as numbers', () => (
    <MonthSelectBox
      name="MONTH_SELECT_BOX_FIELD"
      mode="numbers"
      onClick={action('clicked')}
    />
  ))
  .add('with selected May', () => (
    <MonthSelectBox
      name="MONTH_SELECT_BOX_FIELD"
      defaultValue="4"
      onClick={action('clicked')}
    />
  ))
  .add('with custom children', () => (
    <MonthSelectBox
      name="MONTH_SELECT_BOX_FIELD"
      onClick={action('clicked')}
    >
      <option value="">pick a month!</option>
    </MonthSelectBox>
  ));
