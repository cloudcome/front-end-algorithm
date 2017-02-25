/**
 * 插入排序
 * @author ydr.me
 * @create 2017-02-25 13:48
 * @update 2017-02-25 13:48
 */


'use strict';

var selector = require('blear.core.selector');

var arrayBuilder = require('../../utils/array-builder');

var originEl = selector.query('#origin')[0];
var result1El = selector.query('#result1')[0];
var result2El = selector.query('#result2')[0];

var originArr = arrayBuilder.number(15);

originEl.innerHTML = originArr.join(', ');
result1El.innerHTML = insertionSort(originArr).join(', ');
result2El.innerHTML = insertionSort(originArr, true).join(', ');


/**
 * 插入排序
 * @param array {Array} 数组
 * @param [decrease] {Boolean} 是否倒序
 * @returns {Array}
 */
function insertionSort(array, decrease) {
    var sortedArray = array.concat();

    var outerStart = 1;
    var outerEnd = sortedArray.length;

    for (; outerStart < outerEnd; outerStart++) {
        var insertValue = sortedArray[outerStart];
        sortedArray.splice(outerStart, 1);

        var innerStart = outerStart - 1;
        for (; innerStart >= 0; innerStart--) {
            var currentValue = sortedArray[innerStart];

            if (decrease) {
                if (insertValue < currentValue) {
                    break;
                }
            } else {
                if (insertValue > currentValue) {
                    break;
                }
            }
        }
        sortedArray.splice(innerStart + 1, 0, insertValue);
    }

    return sortedArray;
}

