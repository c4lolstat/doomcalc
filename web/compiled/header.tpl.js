this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["web/templates/header.handlebars"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"topbar\"><%_headerstart%><span class=\"red\"><%_headermid%></span> <i><%_headerend%></i>\r\n</div>\r\n<div id=\"loading\" style=\"display: none\"><span><%_waiting%></span><br/> <img\r\n        src=\"images/spinner.gif\" style=\"width:100px; height:100px;padding-left: 80px\"/></div>";
},"useData":true});