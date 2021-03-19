# iso-639-1-jp

[![NPM](https://nodei.co/npm/iso-639-1-jp.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/iso-639-1-jp/)
[![Build Status](https://travis-ci.org/kota-yata/iso-639-1-jp.svg?branch=master)](https://travis-ci.org/kota-yata/iso-639-1-jp)
[![npm version](https://badge.fury.io/js/iso-639-1-jp.svg)](https://badge.fury.io/js/iso-639-1-jp)

言語コード[ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)の日本語変換モジュール

Fork元: [meikidd/iso-639-1](https://github.com/meikidd/iso-639-1)

[ドキュメント](https://iso-639-1-jp.netlify.app)

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

### Node.js with ES Module

```javascript
import ISO6391JP from 'iso-639-1-jp';
console.log(ISO6391JP.getName('en')); // '英語'
```

### Browsers

```html
<script type="text/javascript" src="./node_modules/iso-639-1-jp/build/index.js"></script>
```

```javascript
console.log(ISO6391JP.getName('en')); // '英語'
```

## Development

### Install

```
npm install
```

### Build

```
// Webpack build
npm run build
```

### Test

```
mocha test
```
