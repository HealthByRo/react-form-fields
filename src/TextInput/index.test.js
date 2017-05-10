/* @flow */

import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './';
import type { InputProps } from '../types';

describe('<TextInput />', () => {
  let wrapper;
  const defaultProps = {
    name: 'INPUT_NAME',
    id: 'INPUT_ID',
  };
  const shallowWithProps = (props: InputProps) => {
    wrapper = shallow(
      <TextInput {...props} />
    );
  };

  describe('html element', () => {
    describe('just name and id', () => {
      beforeEach(() => {
        shallowWithProps(defaultProps);
      });

      it('should be input', () => {
        expect(wrapper.name()).toBe('input');
      });

      it('should have [type=text]', () => {
        expect(wrapper.props().type).toEqual('text');
      });

      it('should have [name=INPUT_NAME]', () => {
        expect(wrapper.props().name).toEqual('INPUT_NAME');
      });

      it('should have default .textfield class', () => {
        expect(wrapper.hasClass('textfield')).toBe(true);
      });

      it('should not have [placeholder]', () => {
        expect(wrapper.props.placeholder).not.toBeDefined();
      });

      it('should not have [placeholder]', () => {
        expect(wrapper.props.placeholder).not.toBeDefined();
      });
    });
  });

  describe('more params', () => {
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

      expect(wrapper.props().placeholder).toEqual('PLACEHOLDER');
    });
  });
});
