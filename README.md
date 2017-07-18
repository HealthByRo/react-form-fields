[![bitHound Overall Score](https://www.bithound.io/bitbucket/arabellatech/react-form-fields/badges/score.svg)](https://www.bithound.io/bitbucket/arabellatech/react-form-fields)
[![bitHound Dependencies](https://www.bithound.io/bitbucket/arabellatech/react-form-fields/badges/dependencies.svg)](https://www.bithound.io/bitbucket/arabellatech/react-form-fields/develop/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/bitbucket/arabellatech/react-form-fields/badges/devDependencies.svg)](https://www.bithound.io/bitbucket/arabellatech/react-form-fields/develop/dependencies/npm)
[![bitHound Code](https://www.bithound.io/bitbucket/arabellatech/react-form-fields/badges/code.svg)](https://www.bithound.io/bitbucket/arabellatech/react-form-fields)

# About
react-form-fields are helpers for creating a component (called form field) with:
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
TextField is one of predefined fields, all it requires is a `name` prop:
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
2. `id` - optional id that will be used for `input` + `label`. Default id is `id_` + name in snake_case

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
When no predefined fields matches your requirements, use createFormField to make your own.

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
