import { NUMBER_VERIFY_CLASSES } from './const';
import { NUMBER_VERIFY_NUMBER_CLASSES } from '../../blocks/NumberVerifyNumber/const';
import NumberVerifyNumber from '../../blocks/NumberVerifyNumber/NumberVerifyNumber';
import NumberVerifyMsg from '../../blocks/NumberVerifyMsg/NumberVerifyMsg';

export default class NumberVerify {
	constructor({targetRender = document.body, mask}) {
		this._targetRender = targetRender;
		this._number = new NumberVerifyNumber({mask: mask});
		this._msg = new NumberVerifyMsg({});
	}

	render() {
		const container = document.createElement('div');
		container.classList.add(NUMBER_VERIFY_CLASSES.NUMBER_VERIFY_CONTAINER);

		this._number.setTargetRender(container);
		this._msg.setTargetRender(container);
		this._number.render();

		this._targetRender.appendChild(container);
	}

	onSuccess() {
		this._number.clearError();
		this._msg.clearError();
	}

	onError() {
		this._number.clearError();
		this._msg.clearError();

		const numberInputs = document.querySelectorAll('.' + NUMBER_VERIFY_NUMBER_CLASSES.NUMBER_VERIFY_NUMBER_INPUT);
		numberInputs.forEach((numberInput) => {
			this._number.renderError(numberInput);
		});

		this._msg.renderError();
	}
}