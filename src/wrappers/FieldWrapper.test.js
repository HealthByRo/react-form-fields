/* @flow */

import React from 'react';
import { shallow } from 'enzyme';
import FieldWrapper from './FieldWrapper';
import type { WrapperProps } from './types';

describe('<FieldWrapper />', () => {
  let wrapper;
  const AnyChild = () => <div>AnyChild</div>;
  const shallowWithProps = (props: WrapperProps = {}) => {
    wrapper = shallow(
      <FieldWrapper {...props}>
        <AnyChild />
      </FieldWrapper>
    );
  };

  describe('html element', () => {
    it('should be div', () => {
      shallowWithProps();

      expect(wrapper.name()).toBe('div');
    });

    it('should have .form-item by default', () => {
      shallowWithProps();

      expect(wrapper.hasClass('form-item')).toBe(true);
    });

    it('should use className from props when provided', () => {
      shallowWithProps({
        className: 'CSS_CLASS',
      });

      expect(wrapper.hasClass('CSS_CLASS')).toBe(true);
      expect(wrapper.hasClass('form-item')).toBe(false);
    });
  });

  describe('content', () => {
    it('should render children', () => {
      shallowWithProps();

      expect(wrapper.find(AnyChild).length).toEqual(1);
    });
  });
});
