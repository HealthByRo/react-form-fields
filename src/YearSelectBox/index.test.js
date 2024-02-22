/* @flow */
/*

import React from 'react';
import { shallow } from 'enzyme';

import YearSelectBox from './index';

describe('<YearSelectBox />', () => {
  it('should render children if any provided', () => {
    const CustomOption = () => <option>CUSTOM_OPTION</option>;

    const renderedYearSelectBox = shallow(
      <YearSelectBox name="YEAR_SELECT_BOX_FIELD" min="2000">
        <CustomOption />
      </YearSelectBox>
    );

    expect(renderedYearSelectBox.find(CustomOption).length).toBe(1);
  });
});

describe('<YearSelectBox min={2015} max={2020} />', () => {
  let renderedYearSelectBox;

  beforeEach(() => {
    renderedYearSelectBox = shallow(<YearSelectBox name="YEAR_SELECT_BOX_FIELD" min={2015} max={2020} />);
  });

  it('should render a select box', () => {
    expect(renderedYearSelectBox.is('select')).toBeTruthy();
  });

  it('should render options with values from 2015 to 2020', () => {
    expectToHasOptionsInRange(renderedYearSelectBox, 2015, 2020);
  });
});

describe('<YearSelectBox min={2000} max={2100} step={10} />', () => {
  let renderedYearSelectBox;

  beforeEach(() => {
    renderedYearSelectBox = shallow(<YearSelectBox name="YEAR_SELECT_BOX_FIELD" min={2000} max={2100} step={10} />);
  });

  it('should render a select box', () => {
    expect(renderedYearSelectBox.is('select')).toBeTruthy();
  });

  it('should render options with values from 2000 to 2100 with step 10', () => {
    expectToHasOptionsInRange(renderedYearSelectBox, 2000, 2100, 10);
  });
});

describe('<YearSelectBox min="2000" max="2200" step="20" />', () => {
  let renderedYearSelectBox;

  beforeEach(() => {
    // $FlowFixMe
    renderedYearSelectBox = shallow(<YearSelectBox name="YEAR_SELECT_BOX_FIELD" min="2000" max="2200" step="20" />);
  });

  it('should render a select box', () => {
    expect(renderedYearSelectBox.is('select')).toBeTruthy();
  });

  it('should render options with values from 2000 to 2100 with step 20', () => {
    expectToHasOptionsInRange(renderedYearSelectBox, 2000, 2100, 20);
  });
});

describe('<YearSelectBox min={2017} count={5} />', () => {
  let renderedYearSelectBox;

  beforeEach(() => {
    renderedYearSelectBox = shallow(<YearSelectBox name="YEAR_SELECT_BOX_FIELD" min={2017} count={5} />);
  });

  it('should render a select box', () => {
    expect(renderedYearSelectBox.is('select')).toBeTruthy();
  });

  it('should render options with values from 2017 to 2022', () => {
    expectToHasOptionsInRange(renderedYearSelectBox, 2017, 2022);
  });
});

describe('<YearSelectBox min="2020" count="10" />', () => {
  let renderedYearSelectBox;

  beforeEach(() => {
    // $FlowFixMe
    renderedYearSelectBox = shallow(<YearSelectBox name="YEAR_SELECT_BOX_FIELD" min="2020" count="10" step="2" />);
  });

  it('should render a select box', () => {
    expect(renderedYearSelectBox.is('select')).toBeTruthy();
  });

  it('should render options with values from 2020 to 2030 with step 2', () => {
    expectToHasOptionsInRange(renderedYearSelectBox, 2020, 2030, 2);
  });
});

describe('<YearSelectBox min={2017} count={5} defaultValue="2018" />', () => {
  let renderedYearSelectBox;

  beforeEach(() => {
    renderedYearSelectBox = shallow(<YearSelectBox name="YEAR_SELECT_BOX_FIELD" min={2017} count={5} defaultValue="2018" />);
  });

  it('should render a select box', () => {
    expect(renderedYearSelectBox.is('select')).toBeTruthy();
  });

  it('should render options with values from 2017 to 2022', () => {
    expectToHasOptionsInRange(renderedYearSelectBox, 2017, 2022);
  });

  it('should option with year 2018 be selected', () => {
    expect(renderedYearSelectBox.render().find('[selected]').val()).toEqual('2018');
  });
});

function expectToHasOptionsInRange(renderedYearSelectBox, min, max, step = 1) {
  for (let year = min; year <= max; year += step) {
    expect(renderedYearSelectBox.contains(<option value={year}>{year}</option>)).toBeTruthy();
  }
}
*/
