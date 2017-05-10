import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import MonthSelectBox from './index';

describe('<MonthSelectBox />', () => {
  let renderedMonthSelectBox;

  beforeEach(() => {
    renderedMonthSelectBox = shallow(<MonthSelectBox />);
  });

  it('should render a select box', () => {
    expect(renderedMonthSelectBox.is('select')).toBeTruthy();
  });

  it('should render options with full name of months', () => {
    expectToHasOptions(renderedMonthSelectBox, moment.months());
  });
});

describe('<MonthSelectBox mode="short" />', () => {
  let renderedMonthSelectBox;

  beforeEach(() => {
    renderedMonthSelectBox = shallow(<MonthSelectBox mode="short" />);
  });

  it('should render a select box', () => {
    expect(renderedMonthSelectBox.is('select')).toBeTruthy();
  });

  it('should render options with short name of months', () => {
    expectToHasOptions(renderedMonthSelectBox, moment.monthsShort());
  });
});

describe('<MonthSelectBox mode="numbers" />', () => {
  let renderedMonthSelectBox;

  beforeEach(() => {
    renderedMonthSelectBox = shallow(<MonthSelectBox mode="numbers" />);
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