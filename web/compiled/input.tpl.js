this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["web/templates/input.handlebars"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "        <span class=\"error\">Your inputs are wrong!</span>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div id=\"maininput\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.inputerror : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        <p><label>Your Summoner Name: </label><input type=\"text\" id=\"summonerName\" value=\""
    + alias3(((helper = (helper = helpers.prename || (depth0 != null ? depth0.prename : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"prename","hash":{},"data":data}) : helper)))
    + "\" name=\"summonerName\" /></p>\r\n        <p><label>Your Region: </label><input type=\"text\" id=\"region\" value=\""
    + alias3(((helper = (helper = helpers.preregion || (depth0 != null ? depth0.preregion : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"preregion","hash":{},"data":data}) : helper)))
    + "\" name=\"region\" /></p>\r\n        <p><input type=\"checkbox\" id=\"rememberme\" >Remember me</p>\r\n        <button class=\"clickable button\" onclick=\"eventAgg.trigger('input:getTeam')\" value=\"Match me with retards!\" >Match me with retards!</button>\r\n    </div>";
},"useData":true});