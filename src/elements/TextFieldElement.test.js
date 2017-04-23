/* @flow */

import React from 'react';
import { shallow } from 'enzyme';
import TextFieldElement from './TextFieldElement';
import type { TextFieldElementProps } from './types';

describe('<TextFieldElement />', () => {
  let wrapper;
  const defaultProps = {
    inputId: 'INPUT_ID',
  };
  const shallowWithProps = (props: TextFieldElementProps = defaultProps) => {
    wrapper = shallow(
      <TextFieldElement {...props} />
    );
  };

  describe('html element', () => {
    it('should be input[type=text]', () => {
      shallowWithProps();

      expect(wrapper.name()).toBe('input');
      expect(wrapper.is('[type="text"]')).toBe(true);
    });

    it('should have .textfield by default', () => {
      shallowWithProps();

      expect(wrapper.hasClass('textfield')).toBe(true);
    });

    it('should use className from props', () => {
      shallowWithProps({
        ...defaultProps,
        className: 'CSS_CLASS',
      });

      expect(wrapper.hasClass('CSS_CLASS')).toBe(true);
      expect(wrapper.hasClass('textfield')).toBe(false);
    });

    it('should use placeholder from props', () => {
      shallowWithProps({
        ...defaultProps,
        placeholder: 'PLACEHOLDER',
      });

      expect(wrapper.is('[placeholder="PLACEHOLDER"]')).toBe(true);
    });
  });
});
