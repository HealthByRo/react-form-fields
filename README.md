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
