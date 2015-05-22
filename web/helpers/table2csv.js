var toCsv = (function (){
    var csvData=new Array();
    return {
        export:function(ids){
            var ids = ids || new Array();
            $.each(ids,function(i,id){
                var tmpArr = new Array();
                var tmpStr = '';
                var header = $(id).find('th');
                header.each(function() {
                    tmpStr = $(this).text().trim();
                    tmpArr.push(tmpStr);
                });
                csvData.push(tmpArr.join(','));

                var rows = $(id).find('tr');
                rows.each(function(){
                    var tmpArr = new Array();
                    var tmpStr = '';
                    $(this).find("td").each(function() {
                        if($(this).text().match(/^-{0,1}\d*\.{0,1}\d+$/)) {
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
            var uri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(output);
            var a = document.createElement('a');
            var linkText = document.createTextNode("Export to CSV");
            a.appendChild(linkText);
            a.title = "Export to CSV";
            a.download= new Date().toISOString()+'.csv';
            a.href = uri;
            a.className="button";
            $('#content').append(a);
        }
    }

});