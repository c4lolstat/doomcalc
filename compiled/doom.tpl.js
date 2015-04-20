(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['doom'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <thead>\r\n                <td>Player</td>\r\n                <td>Win</td>\r\n                <td>Lost</td>\r\n                <td>Kill</td>\r\n                <td>Assist</td>\r\n                <td>Death</td>\r\n                <td>Gold</td>\r\n                <td>Creepscore</td>\r\n                <td>Turret</td>\r\n                </thead>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.members : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "                    <tr>\r\n                        <td>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + " as <b>"
    + alias2(alias1((depth0 != null ? depth0.champion : depth0), depth0))
    + "</b></td>\r\n                        <td>"
    + alias2(alias1((depth0 != null ? depth0.win : depth0), depth0))
    + "</td>\r\n                        <td>"
    + alias2(alias1((depth0 != null ? depth0.lost : depth0), depth0))
    + "</td>\r\n                        <td>"
    + alias2(alias1((depth0 != null ? depth0.kill : depth0), depth0))
    + "</td>\r\n                        <td>"
    + alias2(alias1((depth0 != null ? depth0.assist : depth0), depth0))
    + "</td>\r\n                        <td>"
    + alias2(alias1((depth0 != null ? depth0.death : depth0), depth0))
    + "</td>\r\n                        <td>"
    + alias2(alias1((depth0 != null ? depth0.gold : depth0), depth0))
    + "</td>\r\n                        <td>"
    + alias2(alias1((depth0 != null ? depth0.cs : depth0), depth0))
    + "</td>\r\n                        <td>"
    + alias2(alias1((depth0 != null ? depth0.turret : depth0), depth0))
    + "</td>\r\n                    </tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "    <h3>Your faith is sealed. Prepare for your DOOM... </h3>\r\n    <br/>\r\n    <div id=\"judge\" >\r\n        <h1>"
    + alias2(alias1((depth0 != null ? depth0.doomMessage : depth0), depth0))
    + " (<span id=\"score\">"
    + alias2(alias1((depth0 != null ? depth0.allyDoomPercentage : depth0), depth0))
    + "</span>)</h1>\r\n    </div>\r\n    <br/>\r\n    <h2>Team overview</h2>\r\n    <br/>\r\n    <div id=\"teams\">\r\n        <table>\r\n            <thead>\r\n            <td></td>\r\n            <td>Ally</td>\r\n            <td>Enemy</td>\r\n            </thead>\r\n            <tr>\r\n                <td>DF</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.DF : stack1), depth0))
    + "</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.DF : stack1), depth0))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td>KDA</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.KDA : stack1), depth0))
    + "</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.KDA : stack1), depth0))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Winrate</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.winrate : stack1), depth0))
    + "</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.winrate : stack1), depth0))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Gold</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.gold : stack1), depth0))
    + "</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.gold : stack1), depth0))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td>CS</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.cs : stack1), depth0))
    + "</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.cs : stack1), depth0))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Turret</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.turret : stack1), depth0))
    + "</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.turret : stack1), depth0))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Total</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.total : stack1), depth0))
    + "</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.total : stack1), depth0))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Doom</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.doom : stack1), depth0))
    + "</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.doom : stack1), depth0))
    + "</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <br/>\r\n    <h2>Players overview</h2>\r\n    <br/>\r\n    <div id=\"players\">\r\n        <table>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.teams : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </table>\r\n    </div>\r\n    <button class=\"clickable button\" onclick=\"eventAgg.trigger('build:readyforteam')\">Match me with retards! Again...</button>";
},"useData":true});
})();