/**
 * 文件描述
 * @author ydr.me
 * @create 2017-02-25 13:51
 * @update 2017-02-25 13:51
 */


'use strict';

var random = require('blear.utils.random');


/**
 * 生成一个指定长度的随机数组
 * @param length
 * @returns {Array}
 */
exports.number = function (length) {
    var ret = [];

    while (length--) {
        ret.push(random.number(1, 100));
    }

    return ret;
};


