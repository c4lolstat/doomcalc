"use strict";

function percentToRGB(percent) {
    if (percent === 100) {
        percent = 99;
    }

    var r, g, b;
    if (percent < 50) {
        // green to yellow
        r = Math.floor(255 * (percent / 50));
        g = 255;

    } else {
        // yellow to red
        r = 255;
        g = Math.floor(255 * ((50 - percent % 50) / 50));
    }
    b = 0;
    return "rgb(" + r + "," + g + "," + b + ")";
};

var colorize = function (score) {
    var judgecolor = 'rgb(255,255,255)';
    if (score !== undefined) {
        if (score > 25) {
            judgecolor = 'rgb(0,0,0)';
        }
        if (score <= 25 && score > 20) {
            judgecolor = percentToRGB(90);
        }
        if (score <= 20 && score > 15) {
            judgecolor = percentToRGB(80);
        }
        if (score <= 15 && score > 10) {
            judgecolor = percentToRGB(70);
        }
        if (score <= 10 && score > 5) {
            judgecolor = percentToRGB(60);
        }
        if (score <= 5 && score > -5) {
            judgecolor = percentToRGB(50);
        }
        if (score <= -5 && score > -10) {
            judgecolor = percentToRGB(40);
        }
        if (score <= -10 && score > -15) {
            judgecolor = percentToRGB(30);
        }
        if (score <= -15 && score > -20) {
            judgecolor = percentToRGB(20);
        }
        if (score <= -20 && score > -25) {
            judgecolor = percentToRGB(10);
        }
        if (score <= -25) {
            judgecolor = 'rgb(214,87,112)';
        }
    }
    return judgecolor;
};
