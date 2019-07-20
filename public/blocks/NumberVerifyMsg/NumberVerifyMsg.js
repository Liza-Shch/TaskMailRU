import { NUMBER_VERIFY_MSG_CLASSES, NUMBER_VERIFY_MSG_TEXT } from './const';
import { NUMBER_VERIFY_CLASSES } from '../../components/NumberVerify/const';

export default class NumberVerifyMsg {
	constructor({targetRender = document.body}) {
		this._targetRender = targetRender;
	}

	getTargetRender() {
		return this._targetRender;
	}

	setTargetRender(targetRender) {
		this._targetRender = targetRender;
	}

	renderError() {
		const error = document.createElement('div');
		error.classList.add(NUMBER_VERIFY_MSG_CLASSES.NUMBER_VERIFY_MSG, NUMBER_VERIFY_CLASSES.NUMBER_VERIFY_CONTAINER_MSG, NUMBER_VERIFY_MSG_CLASSES.NUMBER_VERIFY_MSG_ERROR);
		error.textContent = NUMBER_VERIFY_MSG_TEXT.NUMBER_VERIFY_MSG_TEXT_ERROR;
		this._targetRender.appendChild(error);
	}

	clearError() {
		const error = document.querySelector('.' + NUMBER_VERIFY_MSG_CLASSES.NUMBER_VERIFY_MSG_ERROR);
		if (error === null) {
			return;
		}

		error.remove();
	}
}