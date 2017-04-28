'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<YearSelectBox min={2015} max={2020} />', function () {
  var renderedYearSelectBox = void 0;

  beforeEach(function () {
    renderedYearSelectBox = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { min: 2015, max: 2020 }));
  });

  it('should render a select box', function () {
    expect(renderedYearSelectBox.is('select')).toBeTruthy();
  });

  it('should render options with values from 2015 to 2020', function () {
    expectToHasOptionsInRange(renderedYearSelectBox, 2015, 2020);
  });
});

describe('<YearSelectBox min={2000} max={2100} step={10} />', function () {
  var renderedYearSelectBox = void 0;

  beforeEach(function () {
    renderedYearSelectBox = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { min: 2000, max: 2100, step: 10 }));
  });

  it('should render a select box', function () {
    expect(renderedYearSelectBox.is('select')).toBeTruthy();
  });

  it('should render options with values from 2000 to 2100 with step 10', function () {
    expectToHasOptionsInRange(renderedYearSelectBox, 2000, 2100, 10);
  });
});

describe('<YearSelectBox min="2000" max="2200" step="20" />', function () {
  var renderedYearSelectBox = void 0;

  beforeEach(function () {
    renderedYearSelectBox = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { min: '2000', max: '2200', step: '20' }));
  });

  it('should render a select box', function () {
    expect(renderedYearSelectBox.is('select')).toBeTruthy();
  });

  it('should render options with values from 2000 to 2100 with step 20', function () {
    expectToHasOptionsInRange(renderedYearSelectBox, 2000, 2100, 20);
  });
});

describe('<YearSelectBox min={2017} count={5} />', function () {
  var renderedYearSelectBox = void 0;

  beforeEach(function () {
    renderedYearSelectBox = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { min: 2017, count: 5 }));
  });

  it('should render a select box', function () {
    expect(renderedYearSelectBox.is('select')).toBeTruthy();
  });

  it('should render options with values from 2017 to 2022', function () {
    expectToHasOptionsInRange(renderedYearSelectBox, 2017, 2022);
  });
});

describe('<YearSelectBox min="2020" count="10" />', function () {
  var renderedYearSelectBox = void 0;

  beforeEach(function () {
    renderedYearSelectBox = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { min: '2020', count: '10', step: '2' }));
  });

  it('should render a select box', function () {
    expect(renderedYearSelectBox.is('select')).toBeTruthy();
  });

  it('should render options with values from 2020 to 2030 with step 2', function () {
    expectToHasOptionsInRange(renderedYearSelectBox, 2020, 2030, 2);
  });
});

describe('<YearSelectBox min={2017} count={5} defaultValue="2018" />', function () {
  var renderedYearSelectBox = void 0;

  beforeEach(function () {
    renderedYearSelectBox = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { min: 2017, count: 5, defaultValue: '2018' }));
  });

  it('should render a select box', function () {
    expect(renderedYearSelectBox.is('select')).toBeTruthy();
  });

  it('should render options with values from 2017 to 2022', function () {
    expectToHasOptionsInRange(renderedYearSelectBox, 2017, 2022);
  });

  it('should option with year 2018 be selected', function () {
    expect(renderedYearSelectBox.render().find('[selected]').val()).toEqual('2018');
  });
});

function expectToHasOptionsInRange(renderedYearSelectBox, min, max) {
  var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  for (var year = min; year <= max; year += step) {
    expect(renderedYearSelectBox.contains(_react2.default.createElement(
      'option',
      { value: year },
      year
    ))).toBeTruthy();
  }
}