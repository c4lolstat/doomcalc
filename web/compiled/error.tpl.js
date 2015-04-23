this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["web/templates/error.handlebars"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<span>Some error occured, please try again!</span><br/>\r\n<img src=\"images/error.png\" /><br/>\r\n<button class=\"clickable button\" onclick=\"eventAgg.trigger('error:gohome')\" >OK</button>";
},"useData":true});