/**
 * Created by Zoltan_Biro on 6/1/2015.
 */

Handlebars.registerHelper( "trim", function (data){
    return data.trim().replace(/\s/g, '').toLowerCase();
});