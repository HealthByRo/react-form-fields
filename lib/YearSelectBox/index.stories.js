'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('YearSelectBox', module).add('with years range 2015-2020', function () {
  return _react2.default.createElement(_2.default, {
    min: '2015',
    max: '2020',
    onClick: (0, _storybook.action)('clicked')
  });
}).add('with selected 2018', function () {
  return _react2.default.createElement(_2.default, {
    min: '2015',
    max: '2020',
    defaultValue: '2018',
    onClick: (0, _storybook.action)('clicked')
  });
}).add('with 10 years from 2020', function () {
  return _react2.default.createElement(_2.default, {
    min: '2020',
    count: '10',
    onClick: (0, _storybook.action)('clicked')
  });
}).add('with years range 2000-2100 and step 10 years', function () {
  return _react2.default.createElement(_2.default, {
    min: '2000',
    max: '2100',
    step: '10',
    onClick: (0, _storybook.action)('clicked')
  });
}); /*
     * YearSelectBox Stories
     *
     * This contains all the stories for the YearSelectBox component.
     */