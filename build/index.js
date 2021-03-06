"use strict";
exports.__esModule = true;
exports.ISO6391JP = void 0;
var data_1 = require("./data");
/**
 * @module ISO6391JP
 * @example
 * const ISO6391JP = require('iso-639-1-jp');
 * or
 * import ISO6391JP from 'iso-639-1-jp';
 */
var ISO6391JP = /** @class */ (function () {
    function ISO6391JP() {
    }
    /**
     * 入力したisoコードの日本語名、ネイティブ表記、isoコードを配列で返す
     * @param {Array} codes isoコードを配列で渡す
     * @return {Array} 配列で渡された各isoコードの情報オブジェクトを配列に格納して返す
     * @example
     * console.log(ISO6391JP.getLanguages(['en', 'zh']))
     * // [{code:'en',name:'英語',nativeName:'English'},{code:'zh',name:'中国語',nativeName:'中文'}]
     */
    ISO6391JP.getLanguages = function (codes) {
        return codes.map(function (code) { return ({
            code: code,
            name: ISO6391JP.getName(code),
            nativeName: ISO6391JP.getNativeName(code)
        }); });
    };
    /**
     * 引数に入力したisoコードの日本語名を返す
     * @param {string} code isoコードを文字列で渡す
     * @return {string} 引数で渡されたisoコードの日本語名を文字列で返す
     * @example
     * console.log(ISO6391JP.getName('zh')) // '中国語'
     */
    ISO6391JP.getName = function (code) {
        return ISO6391JP.validate(code) ? data_1.LANGUAGES_LIST[code].name : '';
    };
    /**
     * 全てのisoコードの日本語名を返す
     * @return {Array} isoコードのアルファベット順に日本語名を配列で返す
     * @example
     * console.log(ISO6391JP.getAllNames()) // ['アファル語','アブハズ語', ... ,'ズールー語']
     */
    ISO6391JP.getAllNames = function () {
        return Object.values(data_1.LANGUAGES_LIST).map(function (lang) { return lang.name; });
    };
    /**
     * 引数に入力したisoコードの名称をネイティブの言語で返す
     * @param {string} code isoコードを文字列で渡す
     * @return {string} 引数で渡されたisoコードをネイティブ表記の文字列で返す
     * @example
     * console.log(ISO6391JP.getNativeName('zh')) // '中文'
     */
    ISO6391JP.getNativeName = function (code) {
        return ISO6391JP.validate(code) ? data_1.LANGUAGES_LIST[code].nativeName : '';
    };
    /**
     * 全てのisoコードのネイティブの名称を返す
     * @return {Array} isoコードのアルファベット順にネイティブ表記を配列で返す
     * @example
     * console.log(ISO6391JP.getAllNativeNames()) //['Afaraf','аҧсуа бызшәа', ... ,'isiZulu' ]
     */
    ISO6391JP.getAllNativeNames = function () {
        return Object.values(data_1.LANGUAGES_LIST).map(function (lang) { return lang.nativeName; });
    };
    /**
     * 日本語、またはネイティブの言語で入力した言語名のisoコードを返す
     * @param {string} name 日本語名またはネイティブの言語名を文字列で渡す
     * @return {string} 引数で渡された言語のisoコードを文字列で返す
     * @example
     * console.log(ISO6391JP.getCode('中国語')) // 'zh'
     */
    ISO6391JP.getCode = function (name) {
        var code = Object.keys(data_1.LANGUAGES_LIST).find(function (code) {
            var language = data_1.LANGUAGES_LIST[code];
            return (language.name.toLowerCase() === name.toLowerCase() ||
                language.nativeName.toLowerCase() === name.toLowerCase());
        });
        return code || '';
    };
    /**
     * 全てのisoコードを配列で返す
     * @return {Array} isoコードをアルファベット順に配列で返す
     * @example
     * console.log(ISO6391JP.getAllCodes()) //['aa','ab',...,'zu']
     */
    ISO6391JP.getAllCodes = function () {
        return Object.keys(data_1.LANGUAGES_LIST);
    };
    /**
     * 入力したコードが[ISO-639-1]{@link https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes}に含まれているかの真偽値を返す
     * @param {string} code isoコードを文字列で渡す
     * @return {boolean} 引数で渡されたisoコードが存在すればtrue, 存在しなければfalseを返す
     * @example
     * console.log(ISO6391JP.validate('en')) // true
     * console.log(ISO6391JP.validate('xx')) // false
     */
    ISO6391JP.validate = function (code) {
        return data_1.LANGUAGES_LIST.hasOwnProperty(code);
    };
    return ISO6391JP;
}());
exports.ISO6391JP = ISO6391JP;
module.exports = ISO6391JP;
