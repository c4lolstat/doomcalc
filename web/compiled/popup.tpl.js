this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["web/templates/popup.handlebars"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "                <tr>\r\n                    <td>"
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + "</td>\r\n                    <td>"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</td>\r\n                </tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"runesandmasteries\">\r\n    <h2><%_masteries%>: </h2><h3>"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.masteries : depth0), depth0))
    + "</h3>\r\n    <h2><%_runes%>: </h2>\r\n         <table id=\"runes\">\r\n            <thead>\r\n                <th><%_count%></th>\r\n                <th><%_description%></th>\r\n            <thead/>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.runes : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </table>\r\n</div>";
},"useData":true});