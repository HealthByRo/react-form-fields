/* @flow */

import React from 'react';
import renderer from 'react-test-renderer';
import TextField from './TextField';
import type { FieldProps } from './types';

describe('<TextField />', () => {
  let tree;
  const placeholder = 'INPUT_PLACEHOLDER';
  const label = 'INPUT_LABEL';
  const renderWithProps = (props: FieldProps) => {
    tree = renderer.create(
      <TextField {...props} />
    ).toJSON();
  };
  const getPropsWithName = (props?: Object, name?: string = 'INPUT_NAME'): FieldProps => {
    const propsWithName = { ...props };

    if (!propsWithName.name) {
      propsWithName.name = name;
    }

    return propsWithName;
  };

  describe('no params:', () => {
    it('should throw error if no name passed', () => {
      // $FlowExpectedError
      expect(() => renderWithProps()).toThrowError('name param is required for TextField');
    });
  });

  describe('param name:', () => {
    it('should NOT throw any errors if name is passed', () => {
      expect(() => <TextField name="TEST_NAME" />).not.toThrowError();
    });

    it('should render only wrapped input field with defaults', () => {
      renderWithProps(getPropsWithName());

      expect(tree).toMatchSnapshot();
    });
  });

  describe('multiple params', () => {
    it('name + placeholder', () => {
      renderWithProps(getPropsWithName({ placeholder }));

      expect(tree).toMatchSnapshot();
    });

    it('name + placeholder + errors[1]', () => {
      renderWithProps(getPropsWithName({ placeholder, errors: ['SINGLE_ERROR'] }));

      expect(tree).toMatchSnapshot();
    });

    it('name + placeholder + errors[2]', () => {
      renderWithProps(getPropsWithName({ placeholder, errors: ['FIRST_ERROR', 'SECOND_ERROR'] }));

      expect(tree).toMatchSnapshot();
    });

    it('name + label', () => {
      renderWithProps(getPropsWithName({ label }));

      expect(tree).toMatchSnapshot();
    });

    it('name + label + errors[1]', () => {
      renderWithProps(getPropsWithName({ label, errors: ['SINGLE_ERROR'] }));

      expect(tree).toMatchSnapshot();
    });

    it('name + label + errors[2]', () => {
      renderWithProps(getPropsWithName({ label, errors: ['FIRST_ERROR', 'SECOND_ERROR'] }));

      expect(tree).toMatchSnapshot();
    });

    it('name + label + placeholder', () => {
      renderWithProps(getPropsWithName({ label, placeholder }));

      expect(tree).toMatchSnapshot();
    });

    it('name + label + placeholder + errors[1]', () => {
      renderWithProps(getPropsWithName({ label, placeholder, errors: ['SINGLE_ERROR'] }));

      expect(tree).toMatchSnapshot();
    });

    it('name + label + placeholder + errors[2]', () => {
      renderWithProps(getPropsWithName({ label, placeholder, errors: ['FIRST_ERROR', 'SECOND_ERROR'] }));

      expect(tree).toMatchSnapshot();
    });
  });
});
