"use strict";

function percentToRGB(percent, range) {

    /*
    green = rgb(0, 128, 0)
    yellow = rgb(255, 255, 0)
    red = rgb(255, 0, 0)
    */

    var r, g, b;
    if (range == 'negative') {
        // green to yellow
        r = 255 - (25 * percent);
        g = 255 - (12 * percent);

    } else {
        // yellow to red
        r = 255;
        //g = Math.floor(255 * ((50 - percent % 50) / 50));
        g = 255 - (percent * 25);
    }
    b = 0;
    return "rgba(" + r + "," + g + "," + b + ", 0.5)";
};

var colorize = function (score) {
    var judgecolor = 'rgb(255,255,255)';
    if (score !== undefined) {
        if (score > 25) {
            judgecolor = 'rgba(255, 0, 0, 0.5)';
        }
        if (score <= 25 && score > 20) {
            judgecolor = percentToRGB(10, 'plus');
        }
        if (score <= 20 && score > 15) {
            judgecolor = percentToRGB(7, 'plus');
        }
        if (score <= 15 && score > 10) {
            judgecolor = percentToRGB(4, 'plus');
        }
        if (score <= 10 && score > 5) {
            judgecolor = percentToRGB(2, 'plus');
        }
        if (score <= 5 && score > -5) {
            judgecolor = percentToRGB(0, 'negative');
        }
        if (score <= -5 && score > -10) {
            judgecolor = percentToRGB(2, 'negative');
        }
        if (score <= -10 && score > -15) {
            judgecolor = percentToRGB(4, 'negative');
        }
        if (score <= -15 && score > -20) {
            judgecolor = percentToRGB(7, 'negative');
        }
        if (score <= -20 && score > -25) {
            judgecolor = percentToRGB(10, 'negative');
        }
        if (score <= -25) {
            judgecolor = 'rgba(0, 128, 0, 0.5)';
        }
    }
    return judgecolor;
};
