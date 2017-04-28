'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldWrapper = function FieldWrapper(props) {
  return _react2.default.createElement(
    'div',
    { className: props.className },
    props.children
  );
};
// TODO figure out a better way of using defaults in stateless component


FieldWrapper.defaultProps = {
  className: 'form-item'
};

exports.default = FieldWrapper;