'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _range2 = require('lodash/range');

var _range3 = _interopRequireDefault(_range2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * YearSelectBox
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var YearSelectBox = function (_PureComponent) {
  _inherits(YearSelectBox, _PureComponent);

  function YearSelectBox() {
    _classCallCheck(this, YearSelectBox);

    return _possibleConstructorReturn(this, (YearSelectBox.__proto__ || Object.getPrototypeOf(YearSelectBox)).apply(this, arguments));
  }

  _createClass(YearSelectBox, [{
    key: 'getYears',
    // eslint-disable-line react/prefer-stateless-function
    value: function getYears() {
      var _props = this.props,
          min = _props.min,
          step = _props.step;

      var max = this.getMax() + 1;
      return (0, _range3.default)(min, max, step);
    }
  }, {
    key: 'getMax',
    value: function getMax() {
      var _props2 = this.props,
          min = _props2.min,
          count = _props2.count;

      var max = this.props.max;

      if (max) {
        max = Number(max);
      } else {
        max = Number(min) + Number(count);
      }

      return max;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          min = _props3.min,
          max = _props3.max,
          step = _props3.step,
          count = _props3.count,
          selectProps = _objectWithoutProperties(_props3, ['min', 'max', 'step', 'count']); // eslint-disable-line no-unused-vars


      var years = this.getYears();

      return _react2.default.createElement(
        'select',
        selectProps,
        years.map(function (year) {
          return _react2.default.createElement(
            'option',
            { key: year, value: year },
            year
          );
        })
      );
    }
  }]);

  return YearSelectBox;
}(_react.PureComponent);

var stringOrNumber = _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]);

YearSelectBox.propTypes = {
  min: stringOrNumber.isRequired,
  max: stringOrNumber,
  step: stringOrNumber,
  count: stringOrNumber
};

exports.default = YearSelectBox;