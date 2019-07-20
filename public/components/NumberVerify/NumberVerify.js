import { NUMBER_VERIFY_CLASSES } from './const';
import NumberVerifyNumber from '../../blocks/NumberVerifyNumber/NumberVerifyNumber';
import NumberVerifyMsg from '../../blocks/NumberVerifyMsg/NumberVerifyMsg';

export default class NumberVerify {
	constructor({targetRender = document.body, mask}) {
		this._targetRender = targetRender;
		this._number = new NumberVerifyNumber({mask: mask});
		this._msg = new NumberVerifyMsg({});
	}

	getNumber() {
		return this._number;
	}

	getMsg() {
		return this._msg;
	}

	render() {
		const container = document.createElement('div');
		container.classList.add(NUMBER_VERIFY_CLASSES.NUMBER_VERIFY_CONTAINER);

		this._number.setTargetRender(container);
		this._msg.setTargetRender(container);
		this._number.render();

		this._targetRender.appendChild(container);
	}
}