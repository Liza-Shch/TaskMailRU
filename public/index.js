import NumberVerifyView from './views/NumberVerifyView';

const mask = '+7(985)0II-**-*X';
const numberVerify = new NumberVerifyView({targetRender: document.body, mask: mask});

numberVerify.render();
numberVerify.onSuccess();
numberVerify.onError();