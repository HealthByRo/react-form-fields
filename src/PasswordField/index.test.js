/* @flow */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import PasswordField from './';
import createFormField from '../createFormField';
import type { FieldProps } from '../types';

describe('<PasswordField />', () => {
  let wrapper;
  const defaultProps = {
    name: 'INPUT_NAME',
    inputId: 'INPUT_ID',
  };
  const shallowWithProps = (props: FieldProps) => {
    wrapper = shallow(
      <PasswordField {...props} />
    );
  };

  describe('html element', () => {
    describe('just name and inputId', () => {
      beforeEach(() => {
        shallowWithProps(defaultProps);
      });

      it('should be input', () => {
        expect(wrapper.name()).toBe('input');
      });

      it('should have [type=password]', () => {
        expect(wrapper.props().type).toEqual('password');
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

    it('should use id from props.inputId', () => {
      shallowWithProps({
        ...defaultProps,
        inputId: 'INPUT_ID',
      });

      expect(wrapper.props().id).toEqual('INPUT_ID');
    });
  });
});
