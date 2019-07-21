import { storiesOf } from '@storybook/html';
import NumberVerify from '../components/NumberVerify/NumberVerify';
import { NUMBER_VERIFY_CLASSES } from '../components/NumberVerify/const';

const numberVerify = new NumberVerify({mask: '+7(985)0II-**-*X'});

storiesOf('NumberVerify', module)
	.add('normal', () => {
		return numberVerify.render();
	})
	.add('error', () => {
		numberVerify.onError();
		const numberVerifyDOM = document.querySelector('.' + NUMBER_VERIFY_CLASSES.NUMBER_VERIFY_CONTAINER);
		if (!numberVerifyDOM) {
			numberVerify.render();
		}

		numberVerify.onError();
		return document.querySelector('.' + NUMBER_VERIFY_CLASSES.NUMBER_VERIFY_CONTAINER);
	});