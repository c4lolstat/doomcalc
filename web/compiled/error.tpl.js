this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["web/templates/error.handlebars"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"content\">\r\n    <span><%_errormessage%></span><br/>\r\n    <img src=\"images/error.png\" /><br/>\r\n    <button class=\"clickable button\" onclick=\"doom.eventAgg.trigger('error:gohome')\" ><%_errorbutton%></button>\r\n</div>";
},"useData":true});