[![Build Status](https://travis-ci.com/Liza-Shch/TaskMailRU.svg?branch=master)](https://travis-ci.com/Liza-Shch/TaskMailRU)
number-verify
=================
Instal
----------
```sh
$ npm install number-verify
```
Usage
-----------
```js
const NumberVerify = require('number-verify');

/**
 * создает компонент NumberVerify
 * @param {HTMLElement} targetRender - куда рендерится компонент, необязательный параметр
 * @param {string} mask - маска телефонного номера, например '+7(985)0II-**-*X'
 */
NUmberVerify({targetRender: targetRender, mask, mask});

/**
 * рендерит компонент
 */
render();

/**
 * номер подтвержден
 */
onSuccess();

/**
 * номер не подтвержден
 * рендерится ошибка
 */
onError();
```

 

