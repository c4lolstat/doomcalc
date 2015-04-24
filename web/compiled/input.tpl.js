this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["web/templates/input.handlebars"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "        <span class=\"error\"><%_inputerror%></span>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div id=\"content\">\r\n<button class=\"clickable buttonsmall\" onclick=\"setLanguage('en')\" value=\"en\" >EN</button>\r\n<button class=\"clickable buttonsmall\" onclick=\"setLanguage('ru')\" value=\"ru\" >RU</button>\r\n<br/>\r\n    <div id=\"maininput\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.inputerror : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        <p><label><%_name%></label><input type=\"text\" id=\"summonerName\" value=\""
    + alias3(((helper = (helper = helpers.prename || (depth0 != null ? depth0.prename : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"prename","hash":{},"data":data}) : helper)))
    + "\" name=\"summonerName\" /></p>\r\n        <p><label><%_region%> </label><input type=\"text\" id=\"region\" value=\""
    + alias3(((helper = (helper = helpers.preregion || (depth0 != null ? depth0.preregion : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"preregion","hash":{},"data":data}) : helper)))
    + "\" name=\"region\" /></p>\r\n        <p><input type=\"checkbox\" id=\"rememberme\" ><%_remember%></p>\r\n        <button class=\"clickable button\" onclick=\"eventAgg.trigger('input:getTeam')\" value=\"Match me with retards!\" ><%_inputbutton%></button>\r\n    </div>\r\n    <div id=\"endorse\">\r\n        <span>This software  isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</span>\r\n    </div>\r\n</div>";
},"useData":true});