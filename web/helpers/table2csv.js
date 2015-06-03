"use strict";
/**
 * @author Bíró Zoltán */

 /**@class toCSV
 * Helper module to export current game to CSV*/

 var toCsv = (function () {
     /**@lends toCsv*/

    var csvData = new Array();
    /**Generate a data uri from the given tables.
     * @private
     * @memberOf toCsv#
     * @param {string | array} ids - Ids of the exported tables
     * @returns {string} - data link*/
    var generateReport = function (ids) {
        var ids = ids || new Array();
        $.each(ids, function (i, id) {
            var tmpArr = new Array();
            var tmpStr = '';
            var header = $(id).find('th');
            header.each(function () {
                tmpStr = $(this).text().trim();
                tmpArr.push(tmpStr);
            });
            csvData.push(tmpArr.join(','));

            var rows = $(id).find('tr');
            rows.each(function () {
                var tmpArr = new Array();
                var tmpStr = '';
                $(this).find("td").each(function () {
                    if ($(this).text().match(/^-{0,1}\d*\.{0,1}\d+$/)) {
                        tmpArr.push(parseFloat($(this).text()));
                    } else {
                        tmpStr = $(this).text().trim();
                        tmpArr.push(tmpStr);
                    }
                });
                csvData.push(tmpArr.join(','));
            });
            csvData.push('');
        });

        var output = csvData.join('\n');
        return 'data:text/csv;charset=utf-8,' + encodeURIComponent(output);
    };

    return {
        /**Place data link on the page
         * @public
         * @memberOf toCsv#
         * @param {string | array} ids - Table ids to export*/
        export: function (ids) {
            var a = document.createElement('a');
            var linkText = document.createTextNode("Export to CSV");
            a.appendChild(linkText);
            a.title = "Export to CSV";
            a.download = new Date().toISOString() + '.csv';
            a.href = generateReport(ids);
            a.className = "button";
            $('#content').append(a);
        }
    };
});