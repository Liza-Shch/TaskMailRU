import NumberVerify from '../public/components/NumberVerify/NumberVerify';
import { NUMBER_VERIFY_NUMBER_CLASSES, MASK_TYPES, MASK_RENDER_DATA } from '../public/blocks/NumberVerifyNumber/const';
import { NUMBER_VERIFY_MSG_CLASSES, NUMBER_VERIFY_MSG_TEXT } from '../public/blocks/NumberVerifyMsg/const';

describe('NumberVerify', () => {
    test('Render Mask', () => {
        const mask = '+7(985)0II-**-*X';
        const numberVerify = new NumberVerify({mask: mask});
        const numberVerifyDOM = numberVerify.render().querySelector('.' + NUMBER_VERIFY_NUMBER_CLASSES.NUMBER_VERIFY_NUMBER);

        let i = 0;
        numberVerifyDOM.childNodes.forEach((childNode) => {
            switch(childNode.nodeName) {
                case '#text':
                    expect(childNode.textContent).toBe(mask[i]);
                    break;
                case 'DIV':
                    switch(childNode.innerText) {
                        case MASK_RENDER_DATA.BLOCK_X:
                            expect(MASK_TYPES.BLOCK_X).toBe(mask[i]);
                            break;
                        case MASK_RENDER_DATA.BLOCK_STAR:
                            expect(MASK_TYPES.BLOCK_STAR).toBe(mask[i]);
                            break;
                        default:
                            expect(childNode.innerText).toBe(mask[i]);
                    }
                    break;
                case 'INPUT':
                    expect(MASK_TYPES.INPUT).toBe(mask[i]);
                    break;
                default:
                    expect('').toBe(mask[i]);
            };
            i++;
        });
    });

    test("Render Error Msg", () => {
        const numberVerify = new NumberVerify({mask: '+7(985)0II-**-*X'});
        numberVerify.render();
        numberVerify.onError();

        const errorMsg = document.querySelector('.' + NUMBER_VERIFY_MSG_CLASSES.NUMBER_VERIFY_MSG_ERROR);
        expect(errorMsg.textContent).toBe(NUMBER_VERIFY_MSG_TEXT.NUMBER_VERIFY_MSG_TEXT_ERROR);
    });

    test("Render Success", () => {
        const numberVerify = new NumberVerify({mask: '+7(985)0II-**-*X'});
        numberVerify.render();
        numberVerify.onError();
        numberVerify.onSuccess();

        const errorMsg = document.querySelector('.' + NUMBER_VERIFY_MSG_CLASSES.NUMBER_VERIFY_MSG_ERROR);
        expect(errorMsg).toBeNull();
    })
});