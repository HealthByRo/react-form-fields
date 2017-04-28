'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextFieldElement = function TextFieldElement(props) {
  var inputProps = (0, _helpers.composeInputProps)('text', props);

  return _react2.default.createElement('input', inputProps);
};
// TODO figure out a better way of using defaults in stateless component
TextFieldElement.defaultProps = {
  className: 'textfield'
};

exports.default = TextFieldElement;