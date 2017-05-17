'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createFormField;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _snakeCase = require('lodash/snakeCase');

var _snakeCase2 = _interopRequireDefault(_snakeCase);

var _elements = require('./elements');

var _wrappers = require('./wrappers');

var _Errors = require('./Errors');

var _Errors2 = _interopRequireDefault(_Errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function createFormField(WrappedComponent) {
  return function (_PureComponent) {
    _inherits(FormField, _PureComponent);

    function FormField(props) {
      _classCallCheck(this, FormField);

      var _this = _possibleConstructorReturn(this, (FormField.__proto__ || Object.getPrototypeOf(FormField)).call(this, props));

      if (!props.name || props.name.length < 1) {
        // TODO create file with errors, add MissingParamError
        throw new Error('name param is required for ' + WrappedComponent.name);
      }
      return _this;
    }

    _createClass(FormField, [{
      key: 'render',
      value: function render() {
        var _composeProps = composeProps(this.props),
            labelProps = _composeProps.labelProps,
            inputProps = _composeProps.inputProps,
            errorsProps = _composeProps.errorsProps;

        var showLabel = this.props.label || this.props.labelProps;

        return _react2.default.createElement(
          _wrappers.FieldWrapper,
          null,
          showLabel && _react2.default.createElement(_elements.LabelElement, labelProps),
          _react2.default.createElement(WrappedComponent, inputProps),
          _react2.default.createElement(_Errors2.default, errorsProps)
        );
      }
    }]);

    return FormField;
  }(_react.PureComponent);
}

function composeProps(props) {
  var name = props.name,
      placeholder = props.placeholder,
      label = props.label,
      errors = props.errors,
      inputProps = _objectWithoutProperties(props, ['name', 'placeholder', 'label', 'errors']);

  inputProps.id = inputProps.id || generateInputId(inputProps);
  inputProps.name = name;

  var labelProps = {
    htmlFor: inputProps.id,
    text: label
  };

  var errorsProps = {
    errors: errors
  };

  // don't set placeholder when undefined
  // to avoid placeholder={undefined} in rendered html
  if (placeholder) {
    inputProps.placeholder = placeholder;
  }

  return {
    labelProps: labelProps,
    inputProps: inputProps,
    errorsProps: errorsProps
  };
}

function generateInputId(props) {
  return 'id_' + (0, _snakeCase2.default)(props.name);
}