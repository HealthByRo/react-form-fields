'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elements = require('./elements');

var _wrappers = require('./wrappers');

var _Errors = require('./Errors');

var _Errors2 = _interopRequireDefault(_Errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseField = function (_PureComponent) {
  _inherits(BaseField, _PureComponent);

  function BaseField(props) {
    _classCallCheck(this, BaseField);

    var _this = _possibleConstructorReturn(this, (BaseField.__proto__ || Object.getPrototypeOf(BaseField)).call(this, props));

    if (!props.name || props.name.length < 1) {
      _this.throwMissingNameError();
    }
    return _this;
  }

  _createClass(BaseField, [{
    key: 'throwMissingNameError',
    value: function throwMissingNameError() {
      // TODO create file with errors, add MissingParamError
      throw new Error('name param is required for ' + this.constructor.name);
    }
  }, {
    key: 'composeProps',
    value: function composeProps() {
      var props = _extends({}, this.props);

      if (!props.inputId) {
        props.inputId = this.generateInputId(props);
      }

      return props;
    }

    // TODO add some unique id at the end

  }, {
    key: 'generateInputId',
    value: function generateInputId(props) {
      return 'TF-' + props.name;
    }
  }, {
    key: 'renderWithField',
    value: function renderWithField(fieldRender) {
      var props = this.composeProps();

      return _react2.default.createElement(
        _wrappers.FieldWrapper,
        null,
        props.label && _react2.default.createElement(_elements.LabelElement, props),
        fieldRender(props),
        _react2.default.createElement(_Errors2.default, props)
      );
    }
  }]);

  return BaseField;
}(_react.PureComponent);

exports.default = BaseField;