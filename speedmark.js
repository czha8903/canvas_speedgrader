// ==UserScript==
// @name         Integrated Script for Canvas Sydney
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Focus on the specified input and click button when Enter is pressed on Canvas Sydney
// @author       You
// @match        https://canvas.sydney.edu.au/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 定位到输入框并聚焦
    let inputElement = document.querySelector('input.question_input');
    if (inputElement) {
        inputElement.focus();
        console.log("The input element has been focused.");
    } else {
        console.log("The specified input element could not be found.");
        return;
    }

    // 定位到按钮
    let button = document.querySelector('.btn.btn-primary.update-scores');
    if (!button) {
        console.log("The specified button could not be found.");
        return;
    }

    // 当按下Enter键时触发按钮点击事件
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.keyCode === 13) {
            button.click();
        }
    });
})();
