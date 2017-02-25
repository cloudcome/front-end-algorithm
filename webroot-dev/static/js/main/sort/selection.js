/**
 * 选择排序
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
result1El.innerHTML = selectionSort(originArr).join(', ');
result2El.innerHTML = selectionSort(originArr, true).join(', ');


/**
 * 选择排序
 * @param array {Array} 数组
 * @param [decrease] {Boolean} 是否倒序
 * @returns {Array}
 */
function selectionSort(array, decrease) {
    var sortedArray = array.concat();

    var outerStart = 0;
    var outerEnd = sortedArray.length;

    console.time('选择排序');
    for (; outerStart < outerEnd; outerStart++) {

        var selectedIndex = outerStart;
        var selectedValue = sortedArray[selectedIndex];
        var innerStart = outerStart + 1;
        var matchedValue = selectedValue;
        for (; innerStart <= outerEnd; innerStart++) {
            var currentValue = sortedArray[innerStart];

            // 倒序
            // 取大值放在左边
            if (decrease) {
                if (currentValue > matchedValue) {
                    selectedIndex = innerStart;
                    matchedValue = currentValue;
                }
            }
            // 升序
            // 取小值放在左边
            else {
                if (currentValue < matchedValue) {
                    selectedIndex = innerStart;
                    matchedValue = currentValue;
                }
            }

        }
        selectedValue = sortedArray[selectedIndex];
        sortedArray[selectedIndex] = sortedArray[outerStart];
        sortedArray[outerStart] = selectedValue;

    }

    console.timeEnd('选择排序');
    return sortedArray;
}

