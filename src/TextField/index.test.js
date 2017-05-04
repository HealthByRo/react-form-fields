/* @flow */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import TextField from './';
import createFormField from '../createFormField';
import type { FieldProps } from '../types';

describe('<TextField />', () => {
  let wrapper;
  const defaultProps = {
    name: 'INPUT_NAME',
    inputId: 'INPUT_ID',
  };
  const shallowWithProps = (props: FieldProps) => {
    wrapper = shallow(
      <TextField {...props} />
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

    it('should use id from props.inputId', () => {
      shallowWithProps({
        ...defaultProps,
        inputId: 'INPUT_ID',
      });

      expect(wrapper.props().id).toEqual('INPUT_ID');
    });
  });
});

describe('createFormField(TextField)', () => {
  let tree;
  const FormTextField = createFormField(TextField);
  const placeholder = 'INPUT_PLACEHOLDER';
  const label = 'INPUT_LABEL';
  const renderWithProps = (props: FieldProps) => {
    tree = renderer.create(
      <FormTextField {...props} />
    ).toJSON();
  };
  const getPropsWithName = (props?: Object, name?: string = 'INPUT_NAME'): FieldProps => {
    const propsWithName = { ...props };

    if (!propsWithName.name) {
      propsWithName.name = name;
    }

    return propsWithName;
  };

  describe('<TextField />', () => {
    it('should throw error if no name passed', () => {
      // $FlowExpectedError
      expect(() => renderWithProps()).toThrowError('name param is required for TextField');
    });
  });

  describe('<TextField { name } />', () => {
    it('should NOT throw any errors if name is passed', () => {
      expect(() => <TextField name="TEST_NAME" />).not.toThrowError();
    });

    it('should render only wrapped input field with defaults', () => {
      renderWithProps(getPropsWithName());

      expect(tree).toMatchSnapshot();
    });
  });

  describe('<TextField { name, placeholder } />', () => {
    it('should render input with placeholder', () => {
      renderWithProps(getPropsWithName({ placeholder }));

      expect(tree).toMatchSnapshot();
    });
  });

  describe('<TextField { name, placeholder, errors: [SINGLE_ERROR] } />', () => {
    it('should render input with placeholder and single error', () => {
      renderWithProps(getPropsWithName({ placeholder, errors: ['SINGLE_ERROR'] }));

      expect(tree).toMatchSnapshot();
    });
  });

  describe('<TextField { name, placeholder, errors: [FIRST_ERROR, SECOND_ERROR] } />', () => {
    it('should render input with placeholder and two errors', () => {
      renderWithProps(getPropsWithName({ placeholder, errors: ['FIRST_ERROR', 'SECOND_ERROR'] }));

      expect(tree).toMatchSnapshot();
    });
  });

  describe('<TextField { name, label } />', () => {
    it('should render input and label', () => {
      renderWithProps(getPropsWithName({ label }));

      expect(tree).toMatchSnapshot();
    });
  });

  describe('<TextField { name, label, errors: [SINGLE_ERROR] } />', () => {
    it('should render input and label and single error', () => {
      renderWithProps(getPropsWithName({ label, errors: ['SINGLE_ERROR'] }));

      expect(tree).toMatchSnapshot();
    });
  });

  describe('<TextField { name, label, errors: [FIRST_ERROR, SECOND_ERROR] } />', () => {
    it('should render input and label and two errors', () => {
      renderWithProps(getPropsWithName({ label, errors: ['FIRST_ERROR', 'SECOND_ERROR'] }));

      expect(tree).toMatchSnapshot();
    });
  });

  describe('<TextField { name, placeholder, label } />', () => {
    it('should render input with placeholder and label', () => {
      renderWithProps(getPropsWithName({ label, placeholder }));

      expect(tree).toMatchSnapshot();
    });
  });

  describe('<TextField { name, placeholder, label, errors: [SINGLE_ERROR] } />', () => {
    it('should render input with placeholder and label and single error', () => {
      renderWithProps(getPropsWithName({ label, placeholder, errors: ['SINGLE_ERROR'] }));

      expect(tree).toMatchSnapshot();
    });
  });

  describe('<TextField { name, placeholder, label, errors: [FIRST_ERROR, SECOND_ERROR] } />', () => {
    it('should render input with placeholder and label and two errors', () => {
      renderWithProps(getPropsWithName({ label, placeholder, errors: ['FIRST_ERROR', 'SECOND_ERROR'] }));

      expect(tree).toMatchSnapshot();
    });
  });
});
