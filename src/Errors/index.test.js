/* @flow */

import React from 'react';
import { shallow } from 'enzyme';
import ErrorElement from '../elements/ErrorElement';
import Errors from './';
import type { ErrorsType } from '../types';

describe('<Errors />', () => {
  let wrapper;
  let errorElements;
  const shallowWithProps = (errors: ?ErrorsType) => {
    wrapper = shallow(
      <Errors errors={errors} />
    );
    errorElements = wrapper.find(ErrorElement);
  };

  describe('no errors passed', () => {
    it('should not render anything', () => {
      shallowWithProps();
      expect(wrapper.exists()).toBe(false);

      shallowWithProps(null);
      expect(wrapper.exists()).toBe(false);

      shallowWithProps([]);
      expect(wrapper.exists()).toBe(false);
    });
  });

  describe.only('array passed as errors', () => {
    it('should render single ErrorElement for one element array', () => {
      shallowWithProps(['SINGLE_ERROR_ARRAY']);

      expect(errorElements.length).toBe(1);
      expect(errorElements.at(0).props().children).toBe('SINGLE_ERROR_ARRAY');
    });

    it('should render two ErrorElement for two element array', () => {
      shallowWithProps(['ERROR_ONE', 'ERROR_TWO']);

      expect(errorElements.length).toBe(2);
      expect(errorElements.at(0).props().children).toBe('ERROR_ONE');
      expect(errorElements.at(1).props().children).toBe('ERROR_TWO');
    });
  });
});
