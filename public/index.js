import NumberVerify from './components/NumberVerify/NumberVerify';

const mask = '+7(985)0II-**-*X';
const numberVerify = new NumberVerify({targetRender: document.body, mask: mask});

numberVerify.render();
numberVerify.onSuccess();
// numberVerify.onError();