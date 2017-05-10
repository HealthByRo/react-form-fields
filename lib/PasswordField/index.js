'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PasswordField = function PasswordField(props) {
  var inputProps = (0, _helpers.composeInputProps)('password', props);

  return _react2.default.createElement('input', _extends({ type: 'password' }, inputProps));
};
PasswordField.defaultProps = {
  className: 'textfield'
};

exports.default = PasswordField;