'use strict';

const btn = document.querySelector('#btn');
const inputText = document.querySelector('#text');
const square = document.querySelector('#square');
const circle = document.querySelector('#circle');
const eBtn = document.querySelector('#e_btn');
const inputRange = document.querySelector('#range');

const changeColor = function () {
    square.style.backgroundColor = inputText.value;
}

const changeCircleSize = function (event) {
    circle.style.width = `${event.target.value}%`;
    circle.style.height = `${event.target.value}%`;
}

eBtn.style.display = 'none';

btn.addEventListener('click', changeColor);
inputRange.addEventListener('input', changeCircleSize)

