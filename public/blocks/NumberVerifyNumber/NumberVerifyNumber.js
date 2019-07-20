import { MASK_TYPES, MASK_RENDER_DATA, NUMBER_VERIFY_NUMBER_CLASSES } from './const.js';

export default class NumberVerify {
    constructor({targetRender = document.body, mask}) {
        this._targetRender = targetRender;
        this._mask = mask;
    };

    getMask() {
        return this._mask;
    };

    setMask(mask) {
        this._mask = mask;
    };

    getTargetRender() {
        return this._targetRender;
    };

    setTargetRender(targetRender) {
        this._targetRender = targetRender;
    };

    _renderInput(targetRender) {
        const input = document.createElement('input');
        input.classList.add(NUMBER_VERIFY_NUMBER_CLASSES.NUMBER_VERIFY_NUMBER_INPUT);
        input.placeholder = '_';
        targetRender.appendChild(input);
    };

    _renderBlock(targetRender, data) {
        const block = document.createElement('div');
        block.classList.add(NUMBER_VERIFY_NUMBER_CLASSES.NUMBER_VERIFY_NUMBER_BLOCK);
        block.innerText = data;
        targetRender.appendChild(block);
    };

    render() {
        const number = document.createElement('div');
        number.classList.add(NUMBER_VERIFY_NUMBER_CLASSES.NUMBER_VERIFY_NUMBER);

        this._mask.split('').forEach(symbol => {
            switch(symbol) {
                case MASK_TYPES.INPUT:
                    this._renderInput(number);
                    break;
                case MASK_TYPES.BLOCK_X:
                    this._renderBlock(number, MASK_RENDER_DATA.BLOCK_X);
                    break;
                case MASK_TYPES.BLOCK_STAR:
                    this._renderBlock(number, MASK_RENDER_DATA.BLOCK_STAR);
                    break;
                default:
                    if (!isNaN(parseInt(symbol, 10)) && isFinite(symbol)) {
                        this._renderBlock(number, symbol);
                        break;
                    };
                    number.append(symbol);
            };
        });

        this._targetRender.appendChild(number);
    };

    renderError(numberInput) {
        numberInput.classList.add(NUMBER_VERIFY_NUMBER_CLASSES.NUMBER_VERIFY_NUMBER_INPUT_ERROR);
    };

    clearError() {
        const inputsError = document.querySelectorAll('.' + NUMBER_VERIFY_NUMBER_CLASSES.NUMBER_VERIFY_NUMBER_INPUT_ERROR);

        inputsError.forEach((inputError) => {
            inputError.classList.remove(NUMBER_VERIFY_NUMBER_CLASSES.NUMBER_VERIFY_NUMBER_INPUT_ERROR);
        });
    };
};