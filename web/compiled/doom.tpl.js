this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["web/templates/doom.handlebars"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.members : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression, alias2=this.lambda;

  return "                    <tr class=\"data\">\r\n                        <td id=\""
    + alias1((helpers.trim || (depth0 && depth0.trim) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"trim","hash":{},"data":data}))
    + "\" onclick=\"doom.eventAgg.trigger('navigate','/doom/"
    + alias1(alias2((depth0 != null ? depth0.name : depth0), depth0))
    + "')\">"
    + alias1(alias2((depth0 != null ? depth0.name : depth0), depth0))
    + " - <b>"
    + alias1(alias2((depth0 != null ? depth0.champion : depth0), depth0))
    + "</b></td>\r\n                        <td>"
    + alias1(alias2((depth0 != null ? depth0.tier : depth0), depth0))
    + "/"
    + alias1(alias2((depth0 != null ? depth0.division : depth0), depth0))
    + " ("
    + alias1(alias2((depth0 != null ? depth0.lp : depth0), depth0))
    + ")</td>\r\n                        <td>"
    + alias1(alias2((depth0 != null ? depth0.win : depth0), depth0))
    + "</td>\r\n                        <td>"
    + alias1(alias2((depth0 != null ? depth0.lost : depth0), depth0))
    + "</td>\r\n                        <td>"
    + alias1(alias2((depth0 != null ? depth0.smwrate : depth0), depth0))
    + "%</td>\r\n                        <td>"
    + alias1(alias2((depth0 != null ? depth0.kill : depth0), depth0))
    + "</td>\r\n                        <td>"
    + alias1(alias2((depth0 != null ? depth0.death : depth0), depth0))
    + "</td>\r\n                        <td>"
    + alias1(alias2((depth0 != null ? depth0.assist : depth0), depth0))
    + "</td>\r\n                        <td>"
    + alias1(alias2((depth0 != null ? depth0.KDA : depth0), depth0))
    + "</td>\r\n                        <td>"
    + alias1(alias2((depth0 != null ? depth0.gold : depth0), depth0))
    + "</td>\r\n                        <td>"
    + alias1(alias2((depth0 != null ? depth0.cs : depth0), depth0))
    + "</td>\r\n                        <td>"
    + alias1(alias2((depth0 != null ? depth0.turret : depth0), depth0))
    + "</td>\r\n                    </tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div id=\"content\">\r\n    <h3><%_doomtitle%> </h3>\r\n    <br/>\r\n    <div id=\"judge\" >\r\n        <h1>"
    + ((stack1 = alias1((depth0 != null ? depth0.doomMessage : depth0), depth0)) != null ? stack1 : "")
    + " (<span id=\"score\">"
    + alias2(alias1((depth0 != null ? depth0.allyDoomPercentage : depth0), depth0))
    + "</span>)</h1>\r\n    </div>\r\n    <br/>\r\n    <h2><%_teamoverview%></h2>\r\n    <br/>\r\n    <div id=\"teams\">\r\n        <table>\r\n            <thead>\r\n            <th></th>\r\n            <th><%_ally%></th>\r\n            <th><%_enemy%></th>\r\n            </thead>\r\n            <tr>\r\n                <td><%_df%></td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.DF : stack1), depth0))
    + "</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.DF : stack1), depth0))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td><%_kda%></td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.KDA : stack1), depth0))
    + "</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.KDA : stack1), depth0))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td><%_winrate%></td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.winrate : stack1), depth0))
    + "%</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.winrate : stack1), depth0))
    + "%</td>\r\n            </tr>\r\n            <tr>\r\n                <td><%_gold%></td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.gold : stack1), depth0))
    + "</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.gold : stack1), depth0))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td><%_cs%></td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.cs : stack1), depth0))
    + "</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.cs : stack1), depth0))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td><%_turret%></td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.turret : stack1), depth0))
    + "</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.turret : stack1), depth0))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td><%_total%></td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.total : stack1), depth0))
    + "</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.total : stack1), depth0))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td><%_doom%></td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.doom : stack1), depth0))
    + "</td>\r\n                <td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.teams : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.doom : stack1), depth0))
    + "</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <br/>\r\n    <h2><%_playeroverview%></h2>\r\n    <br/>\r\n    <div id=\"players\">\r\n        <table>\r\n                <thead>\r\n                    <th><%_player%></th>\r\n                    <th><%_rank%> (lp)</th>\r\n                    <th><%_win%></th>\r\n                    <th><%_lost%></th>\r\n                    <th><%_winrate%></th>\r\n                    <th><%_kill%></th>\r\n                    <th><%_death%></th>\r\n                    <th><%_assist%></th>\r\n                    <th><%_kda%></th>\r\n                    <th><%_gold%></th>\r\n                    <th><%_cs%></th>\r\n                    <th><%_turret%></th>\r\n                </thead>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.teams : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </table>\r\n    </div>\r\n    <div id=\"popup\"></div>\r\n    <div class=\"clear\"></div>\r\n    <button class=\"clickable button\" onclick=\"doom.eventAgg.trigger('doom:again')\"><%_doombutton%></button>\r\n</div>\r\n";
},"useData":true});