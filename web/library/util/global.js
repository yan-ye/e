//全生命周期通用方法库

const util = require('util');
const _ = require('lodash');

let _$$ = {
    __: _,
    util: util,
};

module.exports = _$$;

