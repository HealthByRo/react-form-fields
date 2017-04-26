import { configure } from '@kadira/storybook';

// stories loader
const req = require.context('../src/', true, /\.stories\.js?$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
