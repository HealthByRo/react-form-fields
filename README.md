[![bitHound Overall Score](https://www.bithound.io/bitbucket/arabellatech/react-form-fields/badges/score.svg)](https://www.bithound.io/bitbucket/arabellatech/react-form-fields)
[![bitHound Dependencies](https://www.bithound.io/bitbucket/arabellatech/react-form-fields/badges/dependencies.svg)](https://www.bithound.io/bitbucket/arabellatech/react-form-fields/develop/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/bitbucket/arabellatech/react-form-fields/badges/devDependencies.svg)](https://www.bithound.io/bitbucket/arabellatech/react-form-fields/develop/dependencies/npm)
[![bitHound Code](https://www.bithound.io/bitbucket/arabellatech/react-form-fields/badges/code.svg)](https://www.bithound.io/bitbucket/arabellatech/react-form-fields)

# About
`react-form-fields` are helpers for creating a component (called form field) with:

1. label
2. input/select
3. errors

# Installation
1. Run `yarn add https://bitbucket.org/arabellatech/react-form-fields`
2. Done!

# Usage

## Storybook
Run `yarn start storybook` to see [storybook](https://storybook.js.org/) with complete list of examples.

## Simplest example
`TextField` is one of predefined fields, all it requires is a `name` prop:
```javascript
import { TextField } from 'react-form-fields/lib/TextField';
…
  // inside render function
  <TextField name="message" />
```

Output html:
```html
<div class="form-item">
  <input
    type="text"
    id="id_message"
    name="message"
    class="textfield"
  />
</div>
```

## Usage with redux-form
For use with [Redux Form](http://redux-form.com) just add `reduxForm` at the end of import and pass your props directly to `Field` component:
```javascript
import { TextField } from 'react-form-fields/lib/TextField/reduxForm';
import { Field } from 'redux-form';
…
  // inside render function
  <Field
    name="message"
    component={TextField}
  />
```

Output html:
```html
<div class="form-item">
  <input
    type="text"
    id="id_message"
    name="message"
    class="textfield"
  />
</div>
```

## Displaying errors
Every field accepts `errors` prop with an array of strings containing error messages related to the field.

Code:
```javascript
import { TextField } from 'react-form-fields/lib/TextField';
…
  // inside render function
  <TextField
    name="message"
    errors={['Error message']}
  />
```

Output html:
```html
<div class="form-item">
  <input
    type="text"
    id="id_message"
    name="message"
    class="textfield"
  />
  <div class="msg msg--error">
    Error message
  </div>
</div>
```

When more than one error message is present, all errors are wrapped with additional `<div class="errors-list" />` element:
```javascript
import { TextField } from 'react-form-fields/lib/TextField';
…
  // inside render function
  <TextField
    name="message"
    errors={[
      'First error message',
      'Second error message'
    ]}
  />
```

Output html:
```html
<div class="form-item">
  <input
    type="text"
    id="id_message"
    name="message"
    class="textfield"
  />
  <div class="errors-list">
    <div class="msg msg--error">
      First error message
    </div>
    <div class="msg msg--error">
      Second error message
    </div>
  </div>
</div>
```

## Displaying label
Every field accepts `label` prop with a strings containing text to be displayed inside `label` element:
Code:
```javascript
import { TextField } from 'react-form-fields/lib/TextField';
…
  // inside render function
  <TextField
    name="message"
    label="Your message"
  />
```

Output html:
```html
<div class="form-item">
  <label for="customID">
    Your message
  </label>
  <input
    type="text"
    id="id_message"
    name="message"
    class="textfield"
  />
</div>
```

## Optional props for all fields
Every field accepts the following optional props:

1. `placeholder` - text to render inside `input` element (**not yet available for selects**)
2. `id` - optional id that will be used for `input` + `label`. Default id is `id_` + `name` in snake_case

Code:
```javascript
import { TextField } from 'react-form-fields/lib/TextField';
…
  // inside render function
  <TextField
    name="message"
    placeholder="Enter your message here"
    id="customID"
    errors={['Error message']}
  />
```

Output html:
```html
<div class="form-item">
  <input
    type="text"
    id="customID"
    name="message"
    placeholder="Enter your message here"
    class="textfield"
  />
  <div class="msg msg--error">
    Error message
  </div>
</div>
```

## Creating custom field with createFormField
When no predefined fields matches your requirements, use `createFormField` to make your own.

Code:
```javascript
import createFormField from 'react-form-fields/lib/createFormField';

const CustomInput = (props) => (
  <input
    {...props}
    type="tel"
    className="customInputClassName"
  />
);

const CustomField = createFormField(CustomInput);
…
  // inside render function
  <CustomField
    name="phoneNumber"
    label="Phone number"
    placeholder="Enter your phone number"
  />
```

Output html:
```html
<div class="form-item">
  <label for="id_phone_number">
    Phone number
  </label>
  <input
    type="tel"
    id="id_phone_number"
    name="phoneNumber"
    placeholder="Enter your phone number"
    class="customInputClassName"
  />
</div>
```

## Creating custom field for redux-form with createReduxFormField
In order to be able to use `CustomField` created with `createFormField` in Redux Form, simpy pass output of `createReduxFormField(CustomField)` as a `component` param of `Field`:
```javascript
import createFormField from 'react-form-fields/lib/createFormField';
import createReduxFormField from 'react-form-fields/lib/createReduxFormField';

const CustomInput = (props) => (
  <input
    {...props}
    type="tel"
    className="customInputClassName"
  />
);

const CustomReduxField = createReduxFormField(
  createFormField(CustomInput)
);
…
  // inside render function
  <Field
    name="message"
    component={CustomReduxField}
  />
```

Output html:
```html
<div class="form-item">
  <input
    type="text"
    id="id_message"
    name="message"
    class="textfield"
  />
</div>
```

# Available fields
## Regular fields
```javascript
import TextField from 'react-form-fields/lib/TextField';
import EmailField from 'react-form-fields/lib/EmailField';
import PasswordField from 'react-form-fields/lib/PasswordField';
import MonthSelectField from 'react-form-fields/lib/MonthSelectField';
import YearSelectField from 'react-form-fields/lib/YearSelectField';
```

## Redux Form fields
```javascript
import TextField from 'react-form-fields/lib/TextField/reduxForm';
import EmailField from 'react-form-fields/lib/EmailField/reduxForm';
import PasswordField from 'react-form-fields/lib/PasswordField/reduxForm';
import MonthSelectField from 'react-form-fields/lib/MonthSelectField/reduxForm';
import YearSelectField from 'react-form-fields/lib/YearSelectField/reduxForm';
```

# Available Props
prop name     | optional | value                | applies to         | description
------------- | -------- | -------------------- | ------------------ | -------------------------------------
`className`   | optional | string               | all except selects | `class` attribute of `input` element
`count`       | optional | string or number     | `YearSelectField`  | how many years to display
`defaultValue`| optional | string               | all                | initial value of `input` or `select` element
`errors`      | optional | array<string>        | all                | error messages displayed below field
`id`          | optional | string               | all                | `id` attribute of `input` element, `htmlFor` attribute of `label` element
`label`       | optional | string               | all                | text of `label` element
`max`         | optional | string or number     | `YearSelectField`  | latest year that can be displayed
`min`         | required | string or number     | `YearSelectField`  | first year that should be displayed
`mode`        | optional | `full|numbers|short` | `MonthSelectField` | how to display months: `full` - full month name, `short` - short month name, `number` - month number (1-12)
`name`        | required | string               | all                | `name` attribute of `input` element
`placeholder` | optional | string               | all except selects | `placeholder` attribute of `input` element
`step`        | optional | string or number     | `YearSelectField`  | how many years between displayed options, default is 1
any prop      | optional | any value            | all                | any custom prop will be copiet do `input` or `select` element
