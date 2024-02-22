/* @flow */
/*

import React from 'react';
import { shallow } from 'enzyme';
import MonthSelectBox from './index';
import {
  MONTHS,
  MONTHS_SHORT,
} from './constants';

describe('<MonthSelectBox />', () => {
  let renderedMonthSelectBox;

  beforeEach(() => {
    renderedMonthSelectBox = shallow(<MonthSelectBox name="MONT_SELECT_BOX_NAME" />);
  });

  it('should render a select box', () => {
    expect(renderedMonthSelectBox.is('select')).toBeTruthy();
  });

  it('should render options with full name of months', () => {
    expectToHasOptions(renderedMonthSelectBox, MONTHS);
  });

  it('should render children if any provided', () => {
    const CustomOption = () => <option>CUSTOM_OPTION</option>;

    renderedMonthSelectBox = shallow(
      <MonthSelectBox name="MONT_SELECT_BOX_NAME">
        <CustomOption />
      </MonthSelectBox>
    );

    expect(renderedMonthSelectBox.find(CustomOption).length).toBe(1);
  });
});

describe('<MonthSelectBox mode="short" />', () => {
  let renderedMonthSelectBox;

  beforeEach(() => {
    renderedMonthSelectBox = shallow(<MonthSelectBox name="MONT_SELECT_BOX_NAME" mode="short" />);
  });

  it('should render a select box', () => {
    expect(renderedMonthSelectBox.is('select')).toBeTruthy();
  });

  it('should render options with short name of months', () => {
    expectToHasOptions(renderedMonthSelectBox, MONTHS_SHORT);
  });
});

describe('<MonthSelectBox mode="numbers" />', () => {
  let renderedMonthSelectBox;

  beforeEach(() => {
    renderedMonthSelectBox = shallow(<MonthSelectBox name="MONT_SELECT_BOX_NAME" mode="numbers" />);
  });

  it('should render a select box', () => {
    expect(renderedMonthSelectBox.is('select')).toBeTruthy();
  });

  it('should render options with numeric name of months', () => {
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    expectToHasOptions(renderedMonthSelectBox, months);
  });
});

function expectToHasOptions(renderedMonthSelectBox, options) {
  options.forEach((value, key) => {
    expect(renderedMonthSelectBox.contains(<option value={key}>{value}</option>)).toBeTruthy();
  });
}
*/
