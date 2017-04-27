/* @flow */

import React, { PureComponent } from 'react';
import type { Children } from 'react';

import { ErrorElement } from '../elements';
import { ErrorsListWrapper } from '../wrappers';
import type { ErrorsType, ErrorsProps } from '../types';

export default class Errors extends PureComponent {
  props: ErrorsProps;

  renderErrors(errors: ErrorsType): Array<Children> {
    const renderedErrors = errors.map((error) => (
      <ErrorElement key={error}>
        {error}
      </ErrorElement>
    ));

    return renderedErrors;
  }

  render() {
    const errors = this.props.errors || [];
    const renderedErrors = this.renderErrors(errors);

    if (renderedErrors.length > 1) {
      return (
        <ErrorsListWrapper>
          {renderedErrors}
        </ErrorsListWrapper>
      );
    } else if (renderedErrors.length === 1) {
      return renderedErrors[0];
    }

    return null;
  }
}
