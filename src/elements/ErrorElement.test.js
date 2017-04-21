import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ErrorElement from './ErrorElement';

describe('<ErrorElement />', () => {
  let wrapper;
  const AnyChild = () => <div>AnyChild</div>;
  const shallowWithProps = (props = {}) => {
    wrapper = shallow(
      <ErrorElement {...props}>
        <AnyChild />
      </ErrorElement>
    );
  };

  describe('html element', () => {
    it('should be div', () => {
      shallowWithProps();

      expect(wrapper.name()).toBe('div');
    });

    it('should have .msg and .msg--error by default', () => {
      shallowWithProps();

      expect(wrapper.hasClass('msg')).toBe(true);
      expect(wrapper.hasClass('msg--error')).toBe(true);
    });

    it('should use className from props when provided', () => {
      shallowWithProps({
        className: 'CSS_CLASS',
      });

      expect(wrapper.hasClass('CSS_CLASS')).toBe(true);
      expect(wrapper.hasClass('msg')).toBe(false);
      expect(wrapper.hasClass('msg--error')).toBe(false);
    });
  });
});
