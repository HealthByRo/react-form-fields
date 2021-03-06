'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabelElement = function LabelElement(props) {
  return _react2.default.createElement(
    'label',
    { htmlFor: props.htmlFor },
    props.children,
    props.text
  );
};

exports.default = LabelElement;