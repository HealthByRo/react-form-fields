import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import TextFieldElement from './TextFieldElement';

describe('<TextFieldElement />', () => {
  let wrapper;
  const shallowWithProps = (props = {}) => {
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
        className: 'CSS_CLASS',
      });

      expect(wrapper.hasClass('CSS_CLASS')).toBe(true);
      expect(wrapper.hasClass('textfield')).toBe(false);
    });

    it('should use placeholder from props', () => {
      shallowWithProps({
        placeholder: 'PLACEHOLDER',
      });

      expect(wrapper.is('[placeholder="PLACEHOLDER"]')).toBe(true);
    });
  });
});
