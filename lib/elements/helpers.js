'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var composeInputProps = exports.composeInputProps = function composeInputProps(inputType, props) {
  var composedProps = {
    id: props.inputId,
    name: props.name,
    className: props.className,
    type: inputType
  };

  if (props.placeholder) {
    composedProps.placeholder = props.placeholder;
  }

  return composedProps;
};