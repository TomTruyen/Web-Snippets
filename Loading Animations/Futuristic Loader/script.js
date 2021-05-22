'use strict';

window.onload = (e) => {
    // Detect end scale animations
    const innerCircle = document.querySelector('.inner_circle_dashed');
    const middleCircle = document.querySelector('.middle_circle');
    const outerCircle = document.querySelector('.outer_circle');

    innerCircle.addEventListener('animationend', function () {
        this.classList.add('inner_circle_rotate');
    });

    middleCircle.addEventListener('animationend', function () {
        this.classList.add('middle_circle_rotate');
    });

    outerCircle.addEventListener('animationend', function () {
        this.classList.add('outer_circle_rotate');
    });

}