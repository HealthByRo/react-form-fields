/* @flow */

export type ErrorType = string;
export type ErrorsListType = Array<ErrorType>;

export type SingleErrorProps = {
  value: ErrorType,
}
export type MultipleErrorsProps = {
  value: ErrorsListType,
}

export type ErrorWrapperProps = {
  errors: ErrorType | ErrorsListType,
};
