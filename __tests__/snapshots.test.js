import initStoryshots from '@storybook/addon-storyshots';
import {imageSnapshot} from '@storybook/addon-storyshots-puppeteer';
const path = require('path');
const storybookUrl = path.resolve(__dirname, '..', 'storybook-static');

initStoryshots({
    framework: 'html',
    test: imageSnapshot({
      storybookUrl,
    })
  });