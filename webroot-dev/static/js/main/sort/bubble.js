/**
 * 冒泡排序
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
result1El.innerHTML = bubbleSort(originArr).join(', ');
result2El.innerHTML = bubbleSort(originArr, true).join(', ');


/**
 * 冒泡排序
 * @param array {Array} 原始数组
 * @param [decrease] {Boolean} 是否倒序
 * @returns {Array}
 */
function bubbleSort(array, decrease) {
    var sortedArr = array.concat();
    var outerEnd = 0;
    var innerStart = 0;
    var innerEnd = 0;

    // 从尾部开始向前走
    for (var outerStart = sortedArr.length - 1; outerStart > outerEnd; outerStart--) {

        // 从头部向尾部走
        for (innerStart = 0, innerEnd = outerStart; innerStart < innerEnd; innerStart++) {
            var current = sortedArr[innerStart];
            var next = sortedArr[innerStart + 1];

            // 倒序
            // 将小值放在后面
            if (decrease) {
                if (current < next) {
                    sortedArr[innerStart] = next;
                    sortedArr[innerStart + 1] = current;
                }
            }
            // 升序
            // 将小值放在前面
            else {
                if (current > next) {
                    sortedArr[innerStart] = next;
                    sortedArr[innerStart + 1] = current;
                }
            }

        }

    }

    return sortedArr;
}