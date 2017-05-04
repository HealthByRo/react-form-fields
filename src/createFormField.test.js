/* @flow */

import React from 'react';
import renderer from 'react-test-renderer';
import createFormField from './createFormField';
import type { FieldProps } from './types';

const TestField = (props) => (
  <input type="text" {...props} />
);

describe('createFormField(TestField)', () => {
  let tree;
  const FormField = createFormField(TestField);
  const placeholder = 'INPUT_PLACEHOLDER';
  const label = 'INPUT_LABEL';
  const renderWithProps = (props: FieldProps) => {
    tree = renderer.create(
      <FormField {...props} />
    ).toJSON();
  };
  const getPropsWithName = (props?: Object, name?: string = 'INPUT_NAME'): FieldProps => {
    const propsWithName = { ...props };

    if (!propsWithName.name) {
      propsWithName.name = name;
    }

    return propsWithName;
  };

  describe('<TestField />', () => {
    it('should throw error if no name passed', () => {
      // $FlowExpectedError
      expect(() => renderWithProps()).toThrowError('name param is required for TestField');
    });
  });

  describe('<TestField { name } />', () => {
    it('should NOT throw any errors if name is passed', () => {
      expect(() => <TestField name="TEST_NAME" />).not.toThrowError();
    });

    it('should render only wrapped input field with defaults', () => {
      renderWithProps(getPropsWithName());

      expect(tree).toMatchSnapshot();
    });
  });

  describe('<TestField { name, placeholder } />', () => {
    it('should render input with placeholder', () => {
      renderWithProps(getPropsWithName({ placeholder }));

      expect(tree).toMatchSnapshot();
    });
  });

  describe('<TestField { name, placeholder, errors: [SINGLE_ERROR] } />', () => {
    it('should render input with placeholder and single error', () => {
      renderWithProps(getPropsWithName({ placeholder, errors: ['SINGLE_ERROR'] }));

      expect(tree).toMatchSnapshot();
    });
  });

  describe('<TestField { name, placeholder, errors: [FIRST_ERROR, SECOND_ERROR] } />', () => {
    it('should render input with placeholder and two error', () => {
      renderWithProps(getPropsWithName({ placeholder, errors: ['FIRST_ERROR', 'SECOND_ERROR'] }));

      expect(tree).toMatchSnapshot();
    });
  });

  describe('<TestField { name, label } />', () => {
    it('should render input and label', () => {
      renderWithProps(getPropsWithName({ label }));

      expect(tree).toMatchSnapshot();
    });
  });

  describe('<TestField { name, label, errors: [SINGLE_ERROR] } />', () => {
    it('should render input and label and single error', () => {
      renderWithProps(getPropsWithName({ label, errors: ['SINGLE_ERROR'] }));

      expect(tree).toMatchSnapshot();
    });
  });

  describe('<TestField { name, label, errors: [FIRST_ERROR, SECOND_ERROR] } />', () => {
    it('should render input and label and two error', () => {
      renderWithProps(getPropsWithName({ label, errors: ['FIRST_ERROR', 'SECOND_ERROR'] }));

      expect(tree).toMatchSnapshot();
    });
  });

  describe('<TestField { name, label, placeholder } />', () => {
    it('should render input with placeholder and label', () => {
      renderWithProps(getPropsWithName({ label, placeholder }));

      expect(tree).toMatchSnapshot();
    });
  });

  describe('<TestField { name, label, placeholder, errors: [SINGLE_ERROR] } />', () => {
    it('should render input with placeholder, label and single error', () => {
      renderWithProps(getPropsWithName({ label, placeholder, errors: ['SINGLE_ERROR'] }));

      expect(tree).toMatchSnapshot();
    });
  });

  describe('<TestField { name, label, placeholder, errors: [FIRST_ERROR, SECOND_ERROR]  } />', () => {
    it('should render input with placeholder, label and two errors', () => {
      renderWithProps(getPropsWithName({ label, placeholder, errors: ['FIRST_ERROR', 'SECOND_ERROR'] }));

      expect(tree).toMatchSnapshot();
    });
  });
});
