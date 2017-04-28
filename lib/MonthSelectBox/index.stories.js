'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('MonthSelectBox', module).add('full month names', function () {
  return _react2.default.createElement(_2.default, { onClick: (0, _storybook.action)('clicked') });
}).add('short month names', function () {
  return _react2.default.createElement(_2.default, {
    mode: 'short',
    onClick: (0, _storybook.action)('clicked')
  });
}).add('months as numbers', function () {
  return _react2.default.createElement(_2.default, {
    mode: 'numbers',
    onClick: (0, _storybook.action)('clicked')
  });
}).add('with selected May', function () {
  return _react2.default.createElement(_2.default, {
    defaultValue: '4',
    onClick: (0, _storybook.action)('clicked')
  });
}); /*
     * MonthSelectBox Stories
     *
     * This contains all the stories for the MonthSelectBox component.
     */