'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<MonthSelectBox />', function () {
  var renderedMonthSelectBox = void 0;

  beforeEach(function () {
    renderedMonthSelectBox = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
  });

  it('should render a select box', function () {
    expect(renderedMonthSelectBox.is('select')).toBeTruthy();
  });

  it('should render options with full name of months', function () {
    expectToHasOptions(renderedMonthSelectBox, _moment2.default.months());
  });
});

describe('<MonthSelectBox mode="short" />', function () {
  var renderedMonthSelectBox = void 0;

  beforeEach(function () {
    renderedMonthSelectBox = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { mode: 'short' }));
  });

  it('should render a select box', function () {
    expect(renderedMonthSelectBox.is('select')).toBeTruthy();
  });

  it('should render options with short name of months', function () {
    expectToHasOptions(renderedMonthSelectBox, _moment2.default.monthsShort());
  });
});

describe('<MonthSelectBox mode="numbers" />', function () {
  var renderedMonthSelectBox = void 0;

  beforeEach(function () {
    renderedMonthSelectBox = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { mode: 'numbers' }));
  });

  it('should render a select box', function () {
    expect(renderedMonthSelectBox.is('select')).toBeTruthy();
  });

  it('should render options with numeric name of months', function () {
    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    expectToHasOptions(renderedMonthSelectBox, months);
  });
});

function expectToHasOptions(renderedMonthSelectBox, options) {
  options.forEach(function (value, key) {
    expect(renderedMonthSelectBox.contains(_react2.default.createElement(
      'option',
      { value: key },
      value
    ))).toBeTruthy();
  });
}