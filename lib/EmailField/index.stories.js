'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('Fields: EmailField', module).add('input', function () {
  var props = {
    name: 'EMAIL_FIELD_NAME'
  };

  return _react2.default.createElement(_2.default, props);
}).add('input + placeholder', function () {
  var props = {
    name: 'EMAIL_FIELD_NAME',
    placeholder: 'Sample email field with placeholder'
  };

  return _react2.default.createElement(_2.default, props);
}).add('input + placeholder + error', function () {
  var props = {
    errors: ['Sample error for field'],
    name: 'EMAIL_FIELD_NAME',
    placeholder: 'Sample email field with placeholder'
  };

  return _react2.default.createElement(_2.default, props);
}).add('input + placeholder + multiple errors', function () {
  var props = {
    errors: ['First error for field', 'Second error for field'],
    name: 'EMAIL_FIELD_NAME',
    placeholder: 'Sample email field with placeholder'
  };

  return _react2.default.createElement(_2.default, props);
}).add('input + label', function () {
  var props = {
    name: 'EMAIL_FIELD_NAME',
    label: 'Sample label'
  };

  return _react2.default.createElement(_2.default, props);
}).add('input + label + error', function () {
  var props = {
    errors: ['Sample error for field'],
    name: 'EMAIL_FIELD_NAME',
    label: 'Sample label'
  };

  return _react2.default.createElement(_2.default, props);
}).add('input + label + multiple errors', function () {
  var props = {
    errors: ['First error for field', 'Second error for field'],
    name: 'EMAIL_FIELD_NAME',
    label: 'Sample label'
  };

  return _react2.default.createElement(_2.default, props);
}).add('input + label + placeholder', function () {
  var props = {
    name: 'EMAIL_FIELD_NAME',
    label: 'Sample label',
    placeholder: 'Sample email field with placeholder'
  };

  return _react2.default.createElement(_2.default, props);
}).add('input + label + placeholder + error', function () {
  var props = {
    errors: ['Sample error for field'],
    name: 'EMAIL_FIELD_NAME',
    label: 'Sample label',
    placeholder: 'Sample email field with placeholder'
  };

  return _react2.default.createElement(_2.default, props);
}).add('input + label + placeholder + mutliple errors', function () {
  var props = {
    errors: ['First error for field', 'Second error for field'],
    name: 'EMAIL_FIELD_NAME',
    label: 'Sample label',
    placeholder: 'Sample email field with placeholder'
  };

  return _react2.default.createElement(_2.default, props);
});