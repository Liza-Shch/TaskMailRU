import { configure } from '@storybook/html';

function loadStories() {
  require('../public/stories/NumberVerify.story.js');
}

configure(loadStories, module);