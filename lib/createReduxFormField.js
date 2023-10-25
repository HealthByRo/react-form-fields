'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createReduxFormField;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                             *
                                                                                                                                                                                                                             * createReduxFormField
                                                                                                                                                                                                                             *
                                                                                                                                                                                                                             */

function createReduxFormField(InputComponent) {
  function ReduxFormField(props) {
    // eslint-disable-line react/prefer-stateless-function
    var input = props.input,
        meta = props.meta,
        asyncValidating = props.meta.asyncValidating,
        fieldProps = _objectWithoutProperties(props, ['input', 'meta', 'meta']);

    var errors = getErrorsFromMeta(meta);
    var processedInput = mapInputValue(input);

    return _react2.default.createElement(
      'div',
      { className: asyncValidating ? 'async-validating' : '' },
      _react2.default.createElement(InputComponent, _extends({
        errors: errors
      }, processedInput, fieldProps))
    );
  }

  ReduxFormField.propTypes = {
    input: _propTypes2.default.object.isRequired,
    meta: _propTypes2.default.object.isRequired
  };

  return ReduxFormField;
}

function getErrorsFromMeta(meta) {
  var error = meta.error,
      touched = meta.touched;


  if (error && touched) {
    return (0, _isArray3.default)(error) ? error : [error];
  }

  return null;
}

function mapInputValue(input) {
  var processedInput = _extends({}, input);

  if (typeof (0, _get3.default)(processedInput, 'value.toJS') === 'function') {
    processedInput.value = processedInput.value.toJS();
  }

  return processedInput;
}