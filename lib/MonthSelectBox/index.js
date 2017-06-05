'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _range2 = require('lodash/range');

var _range3 = _interopRequireDefault(_range2);

var _padStart2 = require('lodash/padStart');

var _padStart3 = _interopRequireDefault(_padStart2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * MonthSelectBox
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var MonthSelectBox = function (_PureComponent) {
  _inherits(MonthSelectBox, _PureComponent);

  function MonthSelectBox() {
    _classCallCheck(this, MonthSelectBox);

    return _possibleConstructorReturn(this, (MonthSelectBox.__proto__ || Object.getPrototypeOf(MonthSelectBox)).apply(this, arguments));
  }

  _createClass(MonthSelectBox, [{
    key: 'getMonths',
    // eslint-disable-line react/prefer-stateless-function
    value: function getMonths() {
      switch (this.props.mode) {
        case 'numbers':
          return this.getMonthsAsNumbers();
        case 'short':
          return _moment2.default.monthsShort();
        default:
          return _moment2.default.months();
      }
    }
  }, {
    key: 'getMonthsAsNumbers',
    value: function getMonthsAsNumbers() {
      return (0, _range3.default)(1, 13).map(function (month) {
        return (0, _padStart3.default)(month, 2, '0');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var months = this.getMonths();

      return _react2.default.createElement(
        'select',
        this.props,
        this.props.children,

        // eslint-disable-next-line react/no-array-index-key
        months.map(function (month, index) {
          return _react2.default.createElement(
            'option',
            { key: index, value: index },
            month
          );
        })
      );
    }
  }]);

  return MonthSelectBox;
}(_react.PureComponent);

MonthSelectBox.propTypes = {
  children: _react.PropTypes.element,
  mode: _react.PropTypes.string
};

MonthSelectBox.defaultProps = {
  children: null,
  mode: 'full'
};

exports.default = MonthSelectBox;