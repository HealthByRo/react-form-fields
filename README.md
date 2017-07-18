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

## TextField example

Code:
```javascript
import { TextField } from 'react-form-fields/lib/TextField';
…
  // inside render method
  <TextField
    name="message"
    label="Your message"
    placeholder="Enter your message here"
    errors={['Something went wrong']}
  />
```

Output html:
```html
<div class="form-item">
  <label for="id_message">
    Your message
  </label>
  <input
    type="text"
    id="id_message"
    name="message"
    placeholder="Enter your message here"
    class="textfield"
  />
  <div class="msg msg--error">
    Something went wrong
  </div>
</div>
```
