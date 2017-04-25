/* @flow */

import React from 'react';
import renderer from 'react-test-renderer';
import PasswordField from './PasswordField';
import type { FieldProps } from './types';

let tree;
const placeholder = 'INPUT_PLACEHOLDER';
const label = 'INPUT_LABEL';
const renderWithProps = (props: FieldProps) => {
  tree = renderer.create(
    <PasswordField {...props} />
  ).toJSON();
};
const getPropsWithName = (props?: Object, name?: string = 'INPUT_NAME'): FieldProps => {
  const propsWithName = { ...props };

  if (!propsWithName.name) {
    propsWithName.name = name;
  }

  return propsWithName;
};

describe('<PasswordField />', () => {
  it('should throw error if no name passed', () => {
    // $FlowExpectedError
    expect(() => renderWithProps()).toThrowError('name param is required for PasswordField');
  });
});

describe('<PasswordField { name } />', () => {
  it('should NOT throw any errors if name is passed', () => {
    expect(() => <PasswordField name="TEST_NAME" />).not.toThrowError();
  });

  it('should render only wrapped input field with defaults', () => {
    renderWithProps(getPropsWithName());

    expect(tree).toMatchSnapshot();
  });
});

describe('<PasswordField { name, placeholder } />', () => {
  it('should render input with placeholder', () => {
    renderWithProps(getPropsWithName({ placeholder }));

    expect(tree).toMatchSnapshot();
  });
});

describe('<PasswordField { name, placeholder, errors: [SINGLE_ERROR] } />', () => {
  it('should render input with placeholder and single error', () => {
    renderWithProps(getPropsWithName({ placeholder, errors: ['SINGLE_ERROR'] }));

    expect(tree).toMatchSnapshot();
  });
});

describe('<PasswordField { name, placeholder, errors: [FIRST_ERROR, SECOND_ERROR] } />', () => {
  it('should render input with placeholder and two error', () => {
    renderWithProps(getPropsWithName({ placeholder, errors: ['FIRST_ERROR', 'SECOND_ERROR'] }));

    expect(tree).toMatchSnapshot();
  });
});

describe('<PasswordField { name, label } />', () => {
  it('should render input and label', () => {
    renderWithProps(getPropsWithName({ label }));

    expect(tree).toMatchSnapshot();
  });
});

describe('<PasswordField { name, label, errors: [SINGLE_ERROR] } />', () => {
  it('should render input and label and single error', () => {
    renderWithProps(getPropsWithName({ label, errors: ['SINGLE_ERROR'] }));

    expect(tree).toMatchSnapshot();
  });
});

describe('<PasswordField { name, label, errors: [FIRST_ERROR, SECOND_ERROR] } />', () => {
  it('should render input and label and two error', () => {
    renderWithProps(getPropsWithName({ label, errors: ['FIRST_ERROR', 'SECOND_ERROR'] }));

    expect(tree).toMatchSnapshot();
  });
});

describe('<PasswordField { name, label, placeholder } />', () => {
  it('should render input with placeholder and label', () => {
    renderWithProps(getPropsWithName({ label, placeholder }));

    expect(tree).toMatchSnapshot();
  });
});

describe('<PasswordField { name, label, placeholder, errors: [SINGLE_ERROR] } />', () => {
  it('should render input with placeholder, label and single error', () => {
    renderWithProps(getPropsWithName({ label, placeholder, errors: ['SINGLE_ERROR'] }));

    expect(tree).toMatchSnapshot();
  });
});

describe('<PasswordField { name, label, placeholder, errors: [FIRST_ERROR, SECOND_ERROR]  } />', () => {
  it('should render input with placeholder, label and two errors', () => {
    renderWithProps(getPropsWithName({ label, placeholder, errors: ['FIRST_ERROR', 'SECOND_ERROR'] }));

    expect(tree).toMatchSnapshot();
  });
});
