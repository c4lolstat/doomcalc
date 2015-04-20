/**
 * Created by Zoltan_Biro on 3/26/2015.
 */
"use strict";

var isJson = function (text) {
    try {
        JSON.parse(text);
        return true;
    } catch (e) {
        return false;
    }
};
