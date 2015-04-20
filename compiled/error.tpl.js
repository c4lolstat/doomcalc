(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['error'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<span>Some error occured, please try again!</span><br/>\r\n<img src=\"images/error.jpg\" /><br/>\r\n<button class=\"clickable button\" onclick=\"eventAgg.trigger('error:gohome')\" >OK</button>";
},"useData":true});
})();