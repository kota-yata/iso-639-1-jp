const assert = require('assert');
const ISO6391JP = require('../build/index');

describe('getName()', function () {
  it('en', function () {
    assert.equal(ISO6391JP.getName('en'), '英語');
  });
  it('zh', function () {
    assert.equal(ISO6391JP.getName('zh'), '中国語');
  });
  it('xx', function () {
    assert.equal(ISO6391JP.getName('xx'), '');
  });
  it('toString', function () {
    assert.equal(ISO6391JP.getName('toString'), '');
  });
});

describe('getNativeName()', function () {
  it('en', function () {
    assert.equal(ISO6391JP.getNativeName('en'), 'English');
  });
  it('zh', function () {
    assert.equal(ISO6391JP.getNativeName('zh'), '中文');
  });
  it('xx', function () {
    assert.equal(ISO6391JP.getNativeName('xx'), '');
  });
  it('toString', function () {
    assert.equal(ISO6391JP.getNativeName('toString'), '');
  });
});

describe('getCode()', function () {
  it('英語', function () {
    assert.equal(ISO6391JP.getCode('英語'), 'en');
  });
  it('中国語', function () {
    assert.equal(ISO6391JP.getCode('中国語'), 'zh');
  });
  it('中文', function () {
    assert.equal(ISO6391JP.getCode('中文'), 'zh');
  });
  it('xx', function () {
    assert.equal(ISO6391JP.getCode('xx'), '');
  });
  it('toString', function () {
    assert.equal(ISO6391JP.getCode('toString'), '');
  });
});

describe('validate()', function () {
  it('en', function () {
    assert.equal(ISO6391JP.validate('en'), true);
  });
  it('zh', function () {
    assert.equal(ISO6391JP.validate('zh'), true);
  });
  it('xx', function () {
    assert.equal(ISO6391JP.validate('xx'), false);
  });
  it('toString', function () {
    assert.equal(ISO6391JP.validate('toString'), false);
  });
});

describe('getLanguages()', function () {
  it('[en, zh, xx, toString]', function () {
    assert.deepEqual(ISO6391JP.getLanguages(['en', 'zh', 'xx', 'toString']), [
      {
        code: 'en',
        name: '英語',
        nativeName: 'English',
      },
      {
        code: 'zh',
        name: '中国語',
        nativeName: '中文',
      },
      {
        code: 'xx',
        name: '',
        nativeName: '',
      },
      {
        code: 'toString',
        name: '',
        nativeName: '',
      },
    ]);
  });
});
