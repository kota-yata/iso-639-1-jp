# iso-639-1-jp
[![NPM](https://nodei.co/npm/iso-639-1-jp.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/iso-639-1-jp/)
[![Build Status](https://travis-ci.org/kota-yata/iso-639-1-jp.svg?branch=master)](https://travis-ci.org/kota-yata/iso-639-1-jp)
[![npm version](https://badge.fury.io/js/iso-639-1-jp.svg)](https://badge.fury.io/js/iso-639-1-jp)

言語コード[ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)の日本語変換モジュール

Fork元: https://github.com/meikidd/iso-639-1

## Installation

```
npm i iso-639-1-jp
```

## Usage

### Node.js

```javascript
const ISO6391JP = require('iso-639-1-jp');
console.log(ISO6391JP.getName('en')); // '英語'
```

### ES Module

```javascript
import ISO6391JP from 'iso-639-1-jp';
console.log(ISO6391JP.getName('en')); // '英語'
```

### Browsers

HTML

```html
<script type="text/javascript" src="./node_modules/iso-639-1-jp/build/index.js"></script>
```

```javascript
console.log(ISO6391JP.getName('en')); // '英語'
```

## Methods

### getName(code)
  - @param code {string}
  - @return {string}

入力しisoコードの日本語名を返す

### getAllNames()
  - @return {array}

全ての言語の日本語名を配列で返す

### getNativeName(code)
  - @param code {string}
  - @return {string}

入力したisoコードの各言語ネイティブの表記を返す

### getAllNativeNames()
  - @return {array}

全ての言語のネイティブ表記を返す


### getCode(name)
  - @param name {string}
  - @return {string}

日本語で入力した言語名のisoコードを返す

### getAllCodes()
  - @return {array}

全てのisoコードを返す

### validate(code)
  - @param code {string}
  - @return {boolean}

入力したコードが[ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)に含まれているかの真偽値を返す

### getLanguages(codes)
  - @param codes {array}
  - @return {array}

入力したisoコードの日本語名、ネイティブ表記、isoコードを配列で返す

## Example

```
const ISO6391JP = require('iso-639-1')

console.log(ISO6391JP.getName('zh')) // '中国語'
console.log(ISO6391JP.getNativeName('zh')) // '中文'

console.log(ISO6391JP.getAllNames()) // ['アファル語','アブハズ語', ... ,'ズールー語']
console.log(ISO6391JP.getAllNativeNames()) //['Afaraf','аҧсуа бызшәа', ... ,'isiZulu' ]

console.log(ISO6391JP.getCode('中国語')) // 'zh'
console.log(ISO6391JP.getCode('中文')) // 'zh'

console.log(ISO6391JP.getAllCodes()) //['aa','ab',...,'zu']

console.log(ISO6391JP.validate('en')) // true
console.log(ISO6391JP.validate('xx')) // false

console.log(ISO6391JP.getLanguages(['en', 'zh']))
// [{code:'en',name:'英語',nativeName:'English'},{code:'zh',name:'中国語',nativeName:'中文'}]

```


## Development
### Install
```
$ yarn install
```
### Build
```
$ yarn build
```
### Test
```
$ mocha test
```