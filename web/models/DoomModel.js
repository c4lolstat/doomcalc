/**
 * Created by Zoltan_Biro on 2/19/2015.
 */
"use strict";
var DoomModel = Backbone.Model.extend({

    inputError: false,
    doomRendered: false,

    initialize: function () {
        var cookie = $.cookie();
        if (!$.isEmptyObject(cookie)) {
            this.set("name", cookie.name);
            this.set("region", cookie.region);
        } else {
            this.set("name", preName);
            this.set("region", preRegion);
        }
    },

    getRememberme: function () {
        return $('#inputview #rememberme').is(':checked');
    },

    getName: function () {
        return $('#inputview #summonerName').val();
    },

    getRegion: function () {
        return $('#inputview #region').val();
    },

    getTeam: function () {
        return $('#currentjson').val();
    },

    fireEvent: function (event) {
        return this.get('eventAgg').trigger(event);
    },

    getCredentials: function () {
        var self = this;
        return {
            name: self.getName().trim().replace(/\s/g, '').toLowerCase(),
            region: self.getRegion().toLowerCase().trim()
        };
    },

    getInputs: function () {
        var self = this;
        var credentials = self.getCredentials();
        if (credentials.name.length > 0 && credentials.region.length > 0) {
            self.set('name', credentials.name);
            self.set('region', credentials.region);
            if (self.getRememberme()) {
                $.cookie('name', credentials.name, {expires: 365});
                $.cookie('region', credentials.region, {expires: 365});
            }
            self.fireEvent('build:inputsuccess');
        } else {
            self.set('inputError', true);
            self.fireEvent('build:inputerror');
        }
    },

    getSummonerId: function () {
        var self = this;
        var name = this.get("name");
        var region = this.get("region");

        var currentLocation = window.location;

        $.ajax(currentLocation.origin + "/summonerid/" + name + "/" + region)
            .done(
            function (data) {
                var player = JSON.parse(data)
                self.set('inputError', false);
                self.set('id', player[name].id);
                self.fireEvent('build:readyforteam');
            })
            .fail(
            function () {
                self.fireEvent('error:api');
            });
    },

    getCurrentGameData: function () {
        var self = this;
        var currentLocation = window.location;

        $.ajax(currentLocation.origin + "/team/" + self.get('id') + "/" + self.get('region'))
            .done(
            function (data) {
                if (isJson(data)) {
                    self.set('teamInput', data);
                    self.fireEvent('build:teamsuccess');
                } else {
                    self.fireEvent('error:api');
                }
            })
            .fail(
            function () {
                self.fireEvent('error:api');
            });
    },

    startBuild: function () {
        var self = this;
        var obj = JSON.parse(self.get('teamInput'));
        self.set('participants', obj.participants);
        self.sortPlayersIntoTeams();
        self.getStats(obj.participants);
    },

    sortPlayersIntoTeams: function () {
        var self = this;
        var players = self.get("participants");
        var requesterTeamId = function () {
            var tmp = 0;
            $.each(players, function (i, player) {
                if (self.get('id') == player.summonerId) {
                    tmp = player.teamId;
                }
                ;
            });
            return tmp;
        }();
        var ally = [];
        var enemy = [];
        $.each(players, function (i, player) {
            if (player.teamId === requesterTeamId) {
                ally.push(player);
            } else {
                enemy.push(player);
            }
        });
        self.set('ally', ally);
        self.set('enemy', enemy);
    },

    buildTeams: function () {
        var self = this;
        var allyTeam = new TeamModel({players: self.get('ally'), responses: self.get('responses'),leagues:self.get('leagues')}).build();
        self.set('allyteam', allyTeam);
        self.set('allyDoom', parseFloat(self.get('allyteam').get('doom')));
        var enemyTeam = new TeamModel({players: self.get('enemy'), responses: self.get('responses'),leagues:self.get('leagues')}).build();
        self.set('enemyteam', enemyTeam);
        self.set('enemyDoom', parseFloat(self.get('enemyteam').get('doom')));
        self.fireEvent('build:teamsready');
    },

    calculateDoom: function () {
        var self = this;
        //DF cs/10 turret*10
        //DF + cs*/2+turret*/3
        //blue/blue+purple, purple/blue+purple

        //var blue = tempteam.get('DF') + tempteam.get('KDA') * 5 + tempteam.get('gold') / 3000 + tempteam.get('creepscore') / 40 + tempteam.get('total') / 5;
        //var purple = tempteam.get('DF') + tempteam.get('KDA') * 5 + tempteam.get('gold') / 3000 + tempteam.get('creepscore') / 40 + tempteam.get('total') / 5;

        var ally = self.get('allyDoom');
        var enemy = self.get('enemyDoom');

        self.set('allyDoomPercentage', enemy - ally);
        self.set('enemyDoomPercentage', ally - enemy);

        if (self.get('allyDoomPercentage') > 25) self.set('doomMessage', '<%_level0%>');
        if (self.get('allyDoomPercentage') <= 25 && self.get('allyDoomPercentage') > 20) self.set('doomMessage', '<%_level1%>');
        if (self.get('allyDoomPercentage') <= 20 && self.get('allyDoomPercentage') > 15) self.set('doomMessage', '<%_level2%>');
        if (self.get('allyDoomPercentage') <= 15 && self.get('allyDoomPercentage') > 10) self.set('doomMessage', '<%_level3%>');
        if (self.get('allyDoomPercentage') <= 10 && self.get('allyDoomPercentage') > 5) self.set('doomMessage', '<%_level4%>');
        if (self.get('allyDoomPercentage') <= 5 && self.get('allyDoomPercentage') > -5) self.set('doomMessage', '<%_level5%>');
        if (self.get('allyDoomPercentage') <= -5 && self.get('allyDoomPercentage') > -10) self.set('doomMessage', '<%_level6%>');
        if (self.get('allyDoomPercentage') <= -10 && self.get('allyDoomPercentage') > -15) self.set('doomMessage', '<%_level7%>');
        if (self.get('allyDoomPercentage') <= -15 && self.get('allyDoomPercentage') > -20) self.set('doomMessage', '<%_level8%>');
        if (self.get('allyDoomPercentage') <= -20 && self.get('allyDoomPercentage') > -25) self.set('doomMessage', '<%_level9%>');
        if (self.get('allyDoomPercentage') <= -25) self.set('doomMessage', '<%_level10%>');

        self.set('started', false);
        self.fireEvent('doom:calculated');
    }
    ,

    getTeamsAsObject: function () {
        var obj = {};
        var ally = this.get('allyteam').getTeamAsObject();
        var enemy = this.get('enemyteam').getTeamAsObject();
        obj.teams = [ally, enemy];
        obj.allyDoomPercentage = this.get('allyDoomPercentage');
        obj.enemyDoomPercentage = this.get('enemyDoomPercentage');
        obj.doomMessage = this.get('doomMessage');
        return obj;
    },

    getLeagues: function (participants) {
        var responses = new Map();
        var self = this;
        var currentLocation = window.location;

        var player0=$.ajax(currentLocation.origin + "/league/" + participants[0].summonerId + "/" + self.get('region'));
        var player1=$.ajax(currentLocation.origin + "/league/" + participants[1].summonerId + "/" + self.get('region'));
        var player2=$.ajax(currentLocation.origin + "/league/" + participants[2].summonerId + "/" + self.get('region'));
        var player3=$.ajax(currentLocation.origin + "/league/" + participants[3].summonerId + "/" + self.get('region'));
        var player4=$.ajax(currentLocation.origin + "/league/" + participants[4].summonerId + "/" + self.get('region'));
        var player5=$.ajax(currentLocation.origin + "/league/" + participants[5].summonerId + "/" + self.get('region'));
        var player6=$.ajax(currentLocation.origin + "/league/" + participants[6].summonerId + "/" + self.get('region'));
        var player7=$.ajax(currentLocation.origin + "/league/" + participants[7].summonerId + "/" + self.get('region'));
        var player8=$.ajax(currentLocation.origin + "/league/" + participants[8].summonerId + "/" + self.get('region'));
        var player9=$.ajax(currentLocation.origin + "/league/" + participants[9].summonerId + "/" + self.get('region'));

        $.when(player0, player1, player2, player3, player4, player5, player6, player7, player8, player9
        )
            .done(function (data0, data1,data2,data3, data4, data5, data6, data7, data8, data9
            ) {
                responses.set(participants[0].summonerId, data0[0]);
                responses.set(participants[1].summonerId, data1[0]);
                responses.set(participants[2].summonerId, data2[0]);
                responses.set(participants[3].summonerId, data3[0]);
                responses.set(participants[4].summonerId, data4[0]);
                responses.set(participants[5].summonerId, data5[0]);
                responses.set(participants[6].summonerId, data6[0]);
                responses.set(participants[7].summonerId, data7[0]);
                responses.set(participants[8].summonerId, data8[0]);
                responses.set(participants[9].summonerId, data9[0]);
                self.set('leagues', responses);
                self.fireEvent('build:fetched');
            }).fail(
            function(){
                self.fireEvent('error:api');
            }
        );
    },

    getStats: function (participants) {
        var responses = new Map();
        var self = this;
        var currentLocation = window.location;

        var player0=$.ajax(currentLocation.origin + "/rankedstat/" + participants[0].summonerId + "/" + self.get('region'));
        var player1=$.ajax(currentLocation.origin + "/rankedstat/" + participants[1].summonerId + "/" + self.get('region'));
        var player2=$.ajax(currentLocation.origin + "/rankedstat/" + participants[2].summonerId + "/" + self.get('region'));
        var player3=$.ajax(currentLocation.origin + "/rankedstat/" + participants[3].summonerId + "/" + self.get('region'));
        var player4=$.ajax(currentLocation.origin + "/rankedstat/" + participants[4].summonerId + "/" + self.get('region'));
        var player5=$.ajax(currentLocation.origin + "/rankedstat/" + participants[5].summonerId + "/" + self.get('region'));
        var player6=$.ajax(currentLocation.origin + "/rankedstat/" + participants[6].summonerId + "/" + self.get('region'));
        var player7=$.ajax(currentLocation.origin + "/rankedstat/" + participants[7].summonerId + "/" + self.get('region'));
        var player8=$.ajax(currentLocation.origin + "/rankedstat/" + participants[8].summonerId + "/" + self.get('region'));
        var player9=$.ajax(currentLocation.origin + "/rankedstat/" + participants[9].summonerId + "/" + self.get('region'));

        $.when(player0, player1, player2, player3, player4, player5, player6, player7, player8, player9
            )
            .done(function (data0, data1,data2,data3, data4, data5, data6, data7, data8, data9
            ) {
                responses.set(participants[0].summonerId, data0[0]);
                responses.set(participants[1].summonerId, data1[0]);
                responses.set(participants[2].summonerId, data2[0]);
                responses.set(participants[3].summonerId, data3[0]);
                responses.set(participants[4].summonerId, data4[0]);
                responses.set(participants[5].summonerId, data5[0]);
                responses.set(participants[6].summonerId, data6[0]);
                responses.set(participants[7].summonerId, data7[0]);
                responses.set(participants[8].summonerId, data8[0]);
                responses.set(participants[9].summonerId, data9[0]);
                self.set('responses', responses);
                self.getLeagues(self.get('participants'));
            }).fail(
            function(){
                self.fireEvent('error:api');
            }
        );
    },

    checkResponses: function () {
        return this.get('responses').has('error');
    }

});
