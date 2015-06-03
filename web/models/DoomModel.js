"use strict";

/**
 *  @author Zoltan_Biro
 * Created on 2/19/2015.
 */

/**@class DoomModel
 * @augments Backbone.Model*/

var DoomModel = Backbone.Model.extend({
    /**@lends DoomModel.prototype*/

    inputError: false,
    doomRendered: false,

    /** At initialize check for previous set cookie
     * and if it has, set summoner name and region
     * else set default
     * @memberOf DoomModel# */
    initialize: function () {
        var cookie = $.cookie();
        if (!$.isEmptyObject(cookie)) {
            this.set("name", cookie.name);
            this.set("region", cookie.region);
        }
        else {
            this.set("name", "Your Summoner Name");
            this.set("region", "Your Region");
        }
    },

    /** Get the value of the Remember me checkbox through jquery
     * @memberOf DoomModel# */
    getRememberme: function () {
        return $('#inputview #rememberme').is(':checked');
    },

    /** Get the value of the Summoner Name input through jquery
     * @memberOf DoomModel# */
    getName: function () {
        return $('#inputview #summonerName').val();
    },

    /** Get the value of the region input through jquery
     * @memberOf DoomModel# */
    getRegion: function () {
        return $('#inputview #region').val();
    },

    /** Wrapper for event fireing, to ease testing.
     * @memberOf DoomModel#
     * @param {string} event - eventName */
    fireEvent: function (event) {
        return this.get('eventAgg').trigger(event);
    },

    /** Get credentials for create api request
     * @returns {object} - name: sanitized Summoner name, region: sanitized region
     * @memberOf DoomModel# */
    getCredentials: function () {
        var self = this;
        return {
            name: self.getName().trim().replace(/\s/g, '').toLowerCase(),
            region: self.getRegion().toLowerCase().trim()
        };
    },

    /** Handle inputs
     * @fires DoomModel#build:inputsuccess
     * @fires DoomModel#build:inputerror
     * @memberOf DoomModel# */
    getInputs: function () {
        var self = this;
        var credentials = self.getCredentials();
        if (credentials.name.length > 0 && credentials.region.length > 0 && credentials.name.indexOf('yoursummonername') == -1 && credentials.region.indexOf('Your Region') == -1) {
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

    /** Get Summoner Id through API call
     * @fires DoomModel#build:readyforteam
     * @fires DoomModel#error:api
     * @memberOf DoomModel# */
    getSummonerId: function () {
        var self = this;
        var name = this.get("name");
        var region = this.get("region");

        $.ajax(window.location.origin + "/summonerid/" + name + "/" + region)
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

    /** Get Current Game data through API call
     * @fires DoomModel#build:teamsuccess
     * @fires DoomModel#error:api
     * @memberOf DoomModel# */
    getCurrentGameData: function () {
        var self = this;

        $.ajax(window.location.origin + "/team/" + self.get('id') + "/" + self.get('region'))
            .done(
            function (data) {
                self.set('teamInput', data);
                self.fireEvent('build:teamsuccess');
            })
            .fail(
            function () {
                self.fireEvent('error:api');
            });
    },

    /** On success start building team statistics
     * @memberOf DoomModel# */
    startBuild: function () {
        var self = this;
        var obj = JSON.parse(self.get('teamInput'));
        self.set('participants', obj.participants);
        self.sortPlayersIntoTeams();
        self.getStats(obj.participants);
    },

    /** Form the two teams based upon participants in current game
     * Reaquester team is always the ally team
     * @memberOf DoomModel# */
    sortPlayersIntoTeams: function () {
        var self = this;
        var players = self.get("participants");
        var requesterTeamId = function () {
            var tmp = 0;
            $.each(players, function (i, player) {
                if (self.get('id') == player.summonerId) {
                    tmp = player.teamId;
                };
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

    /** Build the two teams from all the infoes that we gathered previously
     * @fires DoomModel#build:teamsready
     * @memberOf DoomModel# */
    buildTeams: function () {
        var self = this;
        var allyTeam = new TeamModel({
            players: self.get('ally'),
            responses: self.get('responses'),
            leagues: self.get('leagues')
        }).build();
        self.set('allyteam', allyTeam);
        self.set('allyDoom', parseFloat(self.get('allyteam').get('doom')));
        var enemyTeam = new TeamModel({
            players: self.get('enemy'),
            responses: self.get('responses'),
            leagues: self.get('leagues')
        }).build();
        self.set('enemyteam', enemyTeam);
        self.set('enemyDoom', parseFloat(self.get('enemyteam').get('doom')));
        self.fireEvent('build:teamsready');
    },

    /** calculate doom factor for the game.
     * @fires DoomModel#doom:calculated
     * @memberOf DoomModel# */
    calculateDoom: function () {
        var self = this;
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
    },

    /** Create a representation of the model as object that sufficient for templating.
     * @memberOf DoomModel#
     * @returns {obj} - javascript object representation of the model*/
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

    /** Get league information (tier/division) through API calls
     * @fires DoomModel#build:fetched
     * @fires DoomModel#error:api
     * @memberOf DoomModel# */
    getLeagues: function (participants) {
        var responses = new Map();
        var self = this;
        var currentLocation = window.location;

        var player0 = $.ajax(currentLocation.origin + "/league/" + participants[0].summonerId + "/" + self.get('region'));
        var player1 = $.ajax(currentLocation.origin + "/league/" + participants[1].summonerId + "/" + self.get('region'));
        var player2 = $.ajax(currentLocation.origin + "/league/" + participants[2].summonerId + "/" + self.get('region'));
        var player3 = $.ajax(currentLocation.origin + "/league/" + participants[3].summonerId + "/" + self.get('region'));
        var player4 = $.ajax(currentLocation.origin + "/league/" + participants[4].summonerId + "/" + self.get('region'));
        var player5 = $.ajax(currentLocation.origin + "/league/" + participants[5].summonerId + "/" + self.get('region'));
        var player6 = $.ajax(currentLocation.origin + "/league/" + participants[6].summonerId + "/" + self.get('region'));
        var player7 = $.ajax(currentLocation.origin + "/league/" + participants[7].summonerId + "/" + self.get('region'));
        var player8 = $.ajax(currentLocation.origin + "/league/" + participants[8].summonerId + "/" + self.get('region'));
        var player9 = $.ajax(currentLocation.origin + "/league/" + participants[9].summonerId + "/" + self.get('region'));

        $.when(player0, player1, player2, player3, player4, player5, player6, player7, player8, player9
        )
            .done(function (data0, data1, data2, data3, data4, data5, data6, data7, data8, data9) {
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
            function () {
                self.fireEvent('error:api');
            }
        );
    },

    /** Get players ranked statistics through API calls
     * @fires DoomModel#error:api
     * @memberOf DoomModel# */
    getStats: function (participants) {
        var responses = new Map();
        var self = this;
        var currentLocation = window.location;

        var player0 = $.ajax(currentLocation.origin + "/rankedstat/" + participants[0].summonerId + "/" + self.get('region'));
        var player1 = $.ajax(currentLocation.origin + "/rankedstat/" + participants[1].summonerId + "/" + self.get('region'));
        var player2 = $.ajax(currentLocation.origin + "/rankedstat/" + participants[2].summonerId + "/" + self.get('region'));
        var player3 = $.ajax(currentLocation.origin + "/rankedstat/" + participants[3].summonerId + "/" + self.get('region'));
        var player4 = $.ajax(currentLocation.origin + "/rankedstat/" + participants[4].summonerId + "/" + self.get('region'));
        var player5 = $.ajax(currentLocation.origin + "/rankedstat/" + participants[5].summonerId + "/" + self.get('region'));
        var player6 = $.ajax(currentLocation.origin + "/rankedstat/" + participants[6].summonerId + "/" + self.get('region'));
        var player7 = $.ajax(currentLocation.origin + "/rankedstat/" + participants[7].summonerId + "/" + self.get('region'));
        var player8 = $.ajax(currentLocation.origin + "/rankedstat/" + participants[8].summonerId + "/" + self.get('region'));
        var player9 = $.ajax(currentLocation.origin + "/rankedstat/" + participants[9].summonerId + "/" + self.get('region'));

        $.when(player0, player1, player2, player3, player4, player5, player6, player7, player8, player9
        )
            .done(function (data0, data1, data2, data3, data4, data5, data6, data7, data8, data9) {
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
            function () {
                self.fireEvent('error:api');
            }
        );
    },

    /** Get the masteries summary for player
     * @param {string} player - summoner name
     * @returns {string}
     * @memberOf DoomModel# */
    getMasteries: function (player) {
        var rawMasteries = {};
        var participants = this.get('participants');
        var i = 0;
        while (participants[i].summonerName !== player) {
            i++;
        }
        rawMasteries = participants[i].masteries;
        var def = 0;
        var util = 0;
        var off = 0;
        $.each(rawMasteries, function (i, value) {
            var tmpTree = doom.statics.getMasteryList().data[value.masteryId].masteryTree;
            if ("Offense" === tmpTree) {
                off += value.rank;
            }
            if ("Defense" === tmpTree) {
                def += value.rank;
            }
            if ("Utility" === tmpTree) {
                util += value.rank;
            }
        });
        return off + '/' + def + '/' + util;
    },

    /** Get the runes summary for player
     * @param {string} player - summoner name
     * @returns {array} - member: count:Number, description:String
     * @memberOf DoomModel# */
    getRunes: function (player) {
        var rawRunes = new Array();
        var participants = this.get('participants');
        var i = 0;
        while (participants[i].summonerName !== player) {
            i++;
        }
        rawRunes = participants[i].runes;
        $.each(rawRunes, function (i, value) {
            rawRunes[i].description = doom.statics.getRuneList().data[value.runeId].description;
        });
        return rawRunes;
    }

});
