import React from 'react';
import { shallow } from 'enzyme';
import ErrorsListWrapper from './ErrorsListWrapper';

describe('<ErrorsListWrapper />', () => {
  let wrapper;
  const AnyChild = () => <div>AnyChild</div>;
  const shallowWithProps = (props = {}) => {
    wrapper = shallow(
      <ErrorsListWrapper {...props}>
        <AnyChild />
      </ErrorsListWrapper>
    );
  };

  describe('html element', () => {
    it('should be div', () => {
      shallowWithProps();

      expect(wrapper.name()).toBe('div');
    });

    it('should have .errors-list by default', () => {
      shallowWithProps();

      expect(wrapper.hasClass('errors-list')).toBe(true);
    });

    it('should use className from props when provided', () => {
      shallowWithProps({
        className: 'CSS_CLASS',
      });

      expect(wrapper.hasClass('CSS_CLASS')).toBe(true);
      expect(wrapper.hasClass('errors-list')).toBe(false);
    });
  });

  describe('content', () => {
    it('should render children', () => {
      shallowWithProps();

      expect(wrapper.find(AnyChild).length).toEqual(1);
    });
  });
});
