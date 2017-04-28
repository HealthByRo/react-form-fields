'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmailFieldElement = function EmailFieldElement(props) {
  var inputProps = (0, _helpers.composeInputProps)('password', props);

  return _react2.default.createElement('input', inputProps);
};
// TODO figure out a better way of using defaults in stateless component
EmailFieldElement.defaultProps = {
  className: 'textfield'
};

exports.default = EmailFieldElement;