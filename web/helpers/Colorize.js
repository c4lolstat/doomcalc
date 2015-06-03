"use strict";

/**
 * @author Bíró Zoltán, Kovács R.*/

/** @class Colorize
 * Helper module to get color for the UI. */

 var Colorize = (function(){
    /**@lends Colorize*/

    /**Map a percentage to a color on a given color range
     * @memberOf Colorize#
     * @private
     * @param {number} percent - The value to map.
     * @sign {string} sign - Sign of the percentage value
     * @returns {string} - CSS color string */
    function percentToRGB(percent, sign) {
        /*
         green = rgb(0, 128, 0)
         yellow = rgb(255, 255, 0)
         red = rgb(255, 0, 0)
         */

        var r, g, b;
        if (sign == 'negative') {
            // green to yellow
            r = 255 - (25 * percent);
            g = 255 - (12 * percent);

        } else {
            // yellow to red
            r = 255;
            g = 255 - (percent * 25);
        }
        b = 0;
        return "rgba(" + r + ", " + g + ", " + b + ", 0.5)";
    };
    /**Give a predefined percentages for given value
     * @memberOf Colorize#
     * @private
     * @param {number} score - value that will turn into color
     * @returns {string} - CSS color string */
    var getJudgeColor = function (score) {
        var judgecolor = 'rgba(255, 255, 255, 1)';
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

    return {
        /**Get color based on the score
         * @memberOf Colorize#
         * @public
         * @param {number} score
         * @returns {string} - CSS color string */
        getColor:function(score){
            return getJudgeColor(score);
        }
    };
});




