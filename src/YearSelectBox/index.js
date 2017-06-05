/**
*
* YearSelectBox
*
*/

import React, { PureComponent, PropTypes } from 'react';
import _range from 'lodash/range';

class YearSelectBox extends PureComponent { // eslint-disable-line react/prefer-stateless-function
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

  render() {
    const { min, max, step, count, ...selectProps } = this.props; // eslint-disable-line no-unused-vars
    const years = this.getYears();

    return (
      <select {...selectProps} >
        {this.props.children}
        {years.map((year) => <option key={year} value={year}>{ year }</option>)}
      </select>
    );
  }
}

const stringOrNumber = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]);

YearSelectBox.propTypes = {
  children: PropTypes.element,
  min: stringOrNumber.isRequired,
  max: stringOrNumber,
  step: stringOrNumber,
  count: stringOrNumber,
};

YearSelectBox.defaultProps = {
  children: null,
  max: undefined,
  step: undefined,
  count: undefined,
};

export default YearSelectBox;
