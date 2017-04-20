import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ErrorWrapper, {
  SingleError,
  MultipleErrors
} from './';

describe('<SingleError />', () => {
  let wrapper;
  const shallowWithErrors = (error = '') => {
    wrapper = shallow(<SingleError value={error} />);
  };
  const renderWithErrors = (error = '') => {
    wrapper = renderer.create(
      <SingleError value={error} />
    );
  };

  describe('empty when:', () => {
    it('no value passed', () => {
      wrapper = shallow(<SingleError />);
      expect(wrapper.html()).toBe(null);
    });

    it('value=""', () => {
      shallowWithErrors('');
      expect(wrapper.html()).toBe(null);
    });

    xit('value=[]', () => {
      shallowWithErrors([]);
      expect(wrapper.html()).toBe(null);
    });

    it('value=false', () => {
      shallowWithErrors(false);
      expect(wrapper.html()).toBe(null);
    });
  });

  describe('renders:', () => {
    it('single div.msg--errorvalue=string', () => {
      const error = 'ERROR';

      shallowWithErrors(error);
      expect(wrapper.text()).toEqual(error);

      renderWithErrors(error);
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });
});

describe('<MultipleErrors />', () => {
  let wrapper;
  const shallowWithErrors = (errors = []) => {
    wrapper = shallow(<MultipleErrors value={errors} />);
  };
  const renderWithErrors = (errors = []) => {
    wrapper = renderer.create(
      <MultipleErrors value={errors} />
    );
  };
  const getErrors = () => wrapper.find(SingleError);

  describe('empty when:', () => {
    it('no value passed', () => {
      wrapper = shallow(<MultipleErrors />);
      expect(wrapper.html()).toBe(null);
    });

    it('value=""', () => {
      shallowWithErrors("");
      expect(wrapper.html()).toBe(null);
    });

    it('value=false', () => {
      shallowWithErrors(false);
      expect(wrapper.html()).toBe(null);
    });

    it('value=[]', () => {
      shallowWithErrors([]);
      expect(wrapper.html()).toBe(null);
    });
  });

  describe('renders:', () => {
    it('one SingleError element for value=[SINGLE ERROR]', () => {
      const errors = ['SINGLE ERROR'];

      shallowWithErrors(errors);
      expect(getErrors().length).toEqual(1);

      renderWithErrors(errors);
      expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('two SingleError elements for value=[FIRST, SECOND]', () => {
      const errors = ['FIRST', 'SECOND'];

      shallowWithErrors(errors);
      expect(getErrors().length).toEqual(2);

      renderWithErrors(errors);
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });
});

describe('<ErrorWrapper />', () => {
  let wrapper;
  const shallowWithErrors = (errors) => {
    wrapper = shallow(<ErrorWrapper errors={errors} />);
  };
  const renderWithErrors = (errors = []) => {
    wrapper = renderer.create(
      <ErrorWrapper errors={errors} />
    );
  };

  describe('empty when:', () => {
    it('no value passed', () => {
      wrapper = shallow(<ErrorWrapper />);
      expect(wrapper.html()).toBe(null);
    });

    it('value=""', () => {
      shallowWithErrors('')
      expect(wrapper.html()).toBe(null);
    });

    it('value=false', () => {
      shallowWithErrors(false)
      expect(wrapper.html()).toBe(null);
    });

    it('value=[]', () => {
      shallowWithErrors([])
      expect(wrapper.html()).toBe(null);
      console.log(wrapper.html());
    });
  });

  describe('renders:', () => {
    it('one SingleError for errors="ONE ERROR"', () => {
      shallowWithErrors('ONE ERROR');
      expect(wrapper.find(SingleError).length).toBe(1);

      renderWithErrors('ONE ERROR');
      expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('one SingleError for errors=[ONE]', () => {
      shallowWithErrors(['ONE']);
      expect(wrapper.find(SingleError).length).toBe(1);

      renderWithErrors(['ONE']);
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });
});
