'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createReduxFormField;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * createReduxFormField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

function createReduxFormField(InputComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(WrappedReduxFormFieldComponent, _Component);

    function WrappedReduxFormFieldComponent() {
      _classCallCheck(this, WrappedReduxFormFieldComponent);

      return _possibleConstructorReturn(this, (WrappedReduxFormFieldComponent.__proto__ || Object.getPrototypeOf(WrappedReduxFormFieldComponent)).apply(this, arguments));
    }

    _createClass(WrappedReduxFormFieldComponent, [{
      key: 'getErrors',
      // eslint-disable-line react/prefer-stateless-function
      value: function getErrors() {
        var _props$meta = this.props.meta,
            error = _props$meta.error,
            touched = _props$meta.touched;


        if (error && touched) {
          return (0, _isArray3.default)(error) ? error : [error];
        }

        return null;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            input = _props.input,
            asyncValidating = _props.meta.asyncValidating,
            fieldProps = _objectWithoutProperties(_props, ['input', 'meta']);

        return _react2.default.createElement(
          'div',
          { className: asyncValidating ? 'async-validating' : '' },
          _react2.default.createElement(InputComponent, _extends({
            errors: this.getErrors()
          }, input, fieldProps))
        );
      }
    }]);

    return WrappedReduxFormFieldComponent;
  }(_react.Component), _class.propTypes = {
    input: _propTypes2.default.object.isRequired,
    meta: _propTypes2.default.object.isRequired,
    label: _propTypes2.default.string.isRequired,
    placeholder: _propTypes2.default.string.isRequired,
    id: _propTypes2.default.string.isRequired,
    disabled: _propTypes2.default.bool
  }, _class.defaultProps = {
    disabled: false
  }, _temp;
}