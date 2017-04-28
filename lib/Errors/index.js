'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elements = require('../elements');

var _wrappers = require('../wrappers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Errors = function (_PureComponent) {
  _inherits(Errors, _PureComponent);

  function Errors() {
    _classCallCheck(this, Errors);

    return _possibleConstructorReturn(this, (Errors.__proto__ || Object.getPrototypeOf(Errors)).apply(this, arguments));
  }

  _createClass(Errors, [{
    key: 'renderErrors',
    value: function renderErrors(errors) {
      var renderedErrors = errors.map(function (error) {
        return _react2.default.createElement(
          _elements.ErrorElement,
          { key: error },
          error
        );
      });

      return renderedErrors;
    }
  }, {
    key: 'render',
    value: function render() {
      var errors = this.props.errors || [];
      var renderedErrors = this.renderErrors(errors);

      if (renderedErrors.length > 1) {
        return _react2.default.createElement(
          _wrappers.ErrorsListWrapper,
          null,
          renderedErrors
        );
      } else if (renderedErrors.length === 1) {
        return renderedErrors[0];
      }

      return null;
    }
  }]);

  return Errors;
}(_react.PureComponent);

exports.default = Errors;