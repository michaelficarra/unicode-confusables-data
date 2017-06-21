## Unicode Confusables Data

* [UTS39](http://www.unicode.org/reports/tr39/)
* [confusables.txt](ftp://ftp.unicode.org/Public/security/10.0.0/confusables.txt)

### Installation

```sh
$ npm install unicode-confusables-data
```

### Usage

```js
let confusablesData = require('unicode-confusables-data');
confusablesData.æ; // 'ae'
confusablesData.ℬ; // 'B'
confusablesData.ﰞ; // 'سخ'
confusablesData['⿑']; // '齊'
```
