"use strict";
/**
 *  @author Zoltan_Biro
 * Created on 6/1/2015.
 */

/**@public
 * @function
 * Handlebars helper function to normalize summoner names
 * @param {string} data - summoner's name.
 * @returns {string} - normalized summoner name*/
Handlebars.registerHelper( "trim", function (data){
    return data.trim().replace(/\s/g, '').toLowerCase();
});