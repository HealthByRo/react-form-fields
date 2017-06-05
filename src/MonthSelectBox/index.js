/**
*
* MonthSelectBox
*
*/

import React, { PureComponent, PropTypes } from 'react';
import moment from 'moment';
import _range from 'lodash/range';
import _padStart from 'lodash/padStart';

class MonthSelectBox extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  getMonths() {
    switch (this.props.mode) {
      case 'numbers':
        return this.getMonthsAsNumbers();
      case 'short':
        return moment.monthsShort();
      default:
        return moment.months();
    }
  }

  getMonthsAsNumbers() {
    return _range(1, 13).map((month) => _padStart(month, 2, '0'));
  }

  render() {
    const months = this.getMonths();

    return (
      <select {...this.props} >
        {this.props.children}
        {
          // eslint-disable-next-line react/no-array-index-key
          months.map((month, index) => <option key={index} value={index}>{ month }</option>)
        }
      </select>
    );
  }
}

MonthSelectBox.propTypes = {
  children: PropTypes.element,
  mode: PropTypes.string,
};

MonthSelectBox.defaultProps = {
  children: null,
  mode: 'full',
};

export default MonthSelectBox;
