import NumberVerify from "../components/NumberVerify/NumberVerify";
import { MASK_TYPES, NUMBER_VERIFY_NUMBER_CLASSES } from "../blocks/NumberVerifyNumber/const";

export default class NumberVerifyView {
    constructor({targetRender, mask}) {
        this.content = new NumberVerify({targetRender: targetRender, mask: mask});
    };

    render() {
        this.content.render();
    };

    onSuccess() {
        this.content.getNumber().clearError();
        this.content.getMsg().clearError();
    };

    onError() {
        const number = this.content.getNumber();
        const msg = this.content.getMsg();

        number.clearError();
        msg.clearError();

        const numberInputs = document.querySelectorAll('.' + NUMBER_VERIFY_NUMBER_CLASSES.NUMBER_VERIFY_NUMBER_INPUT);
        numberInputs.forEach((numberInput) => {
            number.renderError(numberInput);
        });

        msg.renderError();
    };

    // для проверки

    // isEqual(correctNumber) {
    //     const number = this.content.getNumber();
    //     const msg = this.content.getMsg();
    //     number.clearError();
    //     msg.clearError();

    //     const mask = number.getMask();
    //     const numberInputs = document.querySelectorAll('.' + NUMBER_VERIFY_NUMBER_CLASSES.NUMBER_VERIFY_NUMBER_INPUT);

    //     let posInputMask = -1;
    //     let posNumberInputs = 0;
    //     let correctInputNumber = true;
    //     while ((posInputMask = mask.indexOf(MASK_TYPES.INPUT, posInputMask + 1)) != -1) {
    //         if (correctNumber[posInputMask] !== numberInputs[posNumberInputs].value) {
    //             number.renderError(numberInputs[posNumberInputs]);
    //             correctInputNumber = false;
    //         };

    //         posNumberInputs++;
    //     };

    //     if (!correctInputNumber) {
    //         msg.renderError();
    //         return false;
    //     }

    //     return true;
    // };

    // для проверки
    
    // afterRender({correctNumber}) {
    //     const numberInputs = document.querySelectorAll('.' + NUMBER_VERIFY_NUMBER_CLASSES.NUMBER_VERIFY_NUMBER_INPUT);
    //     numberInputs.forEach((numberInput) => {
    //         numberInput.addEventListener('input', this.isEqual.bind(this, correctNumber));
    //     });
    // };
}