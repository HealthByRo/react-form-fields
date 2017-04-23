/* @flow */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import LabelElement from './LabelElement';
import type { LabelElementProps } from './types';

describe('<LabelElement />', () => {
  let wrapper;
  const defaultProps = {
    inputId: 'INPUT_ID',
    label: 'FIELD_LABEL',
  };
  const shallowWithProps = (props: LabelElementProps = defaultProps) => {
    wrapper = shallow(
      <LabelElement {...props} />
    );
  };
  const AnyChild = () => <div>AnyChild</div>;

  describe('html element', () => {
    it('should be label', () => {
      shallowWithProps();

      expect(wrapper.name()).toBe('label');
    });

    it('should have htmlFor attribute', () => {
      shallowWithProps();

      expect(wrapper.props().htmlFor).toBeDefined();
      expect(wrapper.props().htmlFor).toBe('INPUT_ID');
    });
  });

  describe('content', () => {
    it('should have FIELD_LABEL text', () => {
      shallowWithProps();

      expect(wrapper.text()).toEqual('FIELD_LABEL');
    });

    it('should have {children} if passed', () => {
      wrapper = shallow(
        <LabelElement {...defaultProps}>
          <AnyChild />
        </LabelElement>
      );

      expect(wrapper.find(AnyChild).length).toBe(1);
    });

    it('should render {children} before label text', () => {
      wrapper = renderer.create(
        <LabelElement {...defaultProps}>
          <AnyChild />
        </LabelElement>
      );

      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });
});
