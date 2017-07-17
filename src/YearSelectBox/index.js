/* @flow */

import React, { PureComponent } from 'react';
import _range from 'lodash/range';
import type { YearSelectBoxProps } from '../types';

export default class YearSelectBox extends PureComponent {
  static defaultProps = {
    step: 1,
  }

  getYears() {
    const { min, step } = this.props;
    const max = this.getMax() + 1;
    return _range(min, max, step);
  }

  getMax() {
    const { min, count } = this.props;
    let max = this.props.max;

    if (max) {
      max = Number(max);
    } else {
      max = Number(min) + Number(count);
    }

    return max;
  }

  props: YearSelectBoxProps

  render() {
    const {
      min,
      max,
      step,
      count,
      children,
      ...selectProps
    } = this.props; // eslint-disable-line no-unused-vars
    const years = this.getYears();

    return (
      <select {...selectProps} >
        {children}
        {years.map((year) => <option key={year} value={year}>{ year }</option>)}
      </select>
    );
  }
}
