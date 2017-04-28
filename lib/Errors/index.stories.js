'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('Helpers: Errors', module).add('No errors', function () {
  return _react2.default.createElement(_2.default, null);
}).add('Single error', function () {
  var props = {
    errors: ['Single error message']
  };

  return _react2.default.createElement(_2.default, props);
}).add('Multiple errors', function () {
  var props = {
    errors: ['First error message', 'Second error message']
  };

  return _react2.default.createElement(_2.default, props);
});