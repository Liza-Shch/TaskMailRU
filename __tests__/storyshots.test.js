import initStoryshots from '@storybook/addon-storyshots';
const path = require('path');

initStoryshots({
    framework: 'html',
    config: ({ configure }) =>
      configure(() => {
        require(path.resolve(__dirname, '..', 'public/stories/NumberVerify.story.js'));
      }, module),
  });