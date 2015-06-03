"use strict";

/**
 * @author Zoltan_Biro
 * Created on 2/18/2015.
 */

/**@class TeamModel
 * @augments Backbone.Model*/

 var TeamModel = Backbone.Model.extend({
    /**@lends TeamModel.prototype*/

    /** Define default as an anonymus function.
     * Object in default field are copied by reference upon multiple class instantation.
     * wrapped in a function all instances get empty objects.
     * @memberOf TeamModel# */
    defaults: function () {
        return {
            models: new Array(),
            firstTimer: 0,
            kill: 0,
            death: 0,
            gold: 0,
            creepscore: 0,
            assist: 0,
            lost: 0,
            total: 0,
            win: 0,
            KDA: '0',
            DF: 0,
            turret: 0,
            doom: '0',
            winrate: '0'
        }
    },

    /** Create a representation of the model as object that sufficient for templating.
     * @memberOf TeamModel#
     * @returns {obj} - javascript object representation of the model*/
    getTeamAsObject: function () {
        var self = this;
        var obj = {};

        obj.kill = this.get('kill');
        obj.death = this.get('death');
        obj.gold = this.get('gold');
        obj.cs = this.get('creepscore');
        obj.assist = this.get('assist');
        obj.lost = this.get('lost');
        obj.total = this.get('total');
        obj.win = this.get('win');
        obj.KDA = this.get('KDA');
        obj.DF = this.get('DF');
        obj.turret = this.get('turret');
        obj.winrate = this.get('winrate');
        obj.doom = this.get('doom');
        obj.members = function () {
            var players = [];
            $.each(self.get('models'), function (i, player) {
                players.push(player.getSummonerAsObject());
            });
            return players;
        }();

        return obj;
    },

    /** Build method for summoner
     * @memberOf TeamModel# */
    build: function () {
       return this.fillUpModels(this.get('players'))
                  .createAggregate()
                  .calculateDoom();
    },

    /** Get response from the responses map
     * @memberOf TeamModel#
     * @param {number} summonerId - id of the summoner
     * @returns {string} response text from map*/
    selectResponse: function (summonerId) {
        return this.get('responses').has(summonerId) ? this.get('responses').get(summonerId) : '';
    },

    /** Get league from the responses map
     * @memberOf TeamModel#
     * @param {number} summonerId - id of the summoner
     * @returns {string} response text from map*/
    selectLeague: function(summonerId){
        return this.get('leagues').has(summonerId) ? this.get('leagues').get(summonerId) : '';
    },

    /** Select currently played champion and build model
     * @memberOf TeamModel#
     * @param {string} response - contain player stats by all champions
     * @param {string} league - contain player league infos
     * @param {string} player - player who will be built
     * @returns {object} summonerModel instance */
    selectChampion: function (response, league, player) {
;
        var self = this;
        var champions = JSON.parse(response).champions;
        var stats = {};
        var first = self.get('firstTimer');
        $.each(champions, function (i, champion) {
            if (champion.id === player.championId) {
                stats = self.getSummonerModel(champion.stats, league, player);
            }
        });
        if (stats === '') {
            first = first + 1;
            self.set('firstTimer', first);
            stats = self.getSummonerModel(JSON.parse(doom.statics.getNullStats()).champions[0].stats, league ,player);
        }
        return stats;
    },
    /** Build all members summonerModel
     * @memberOf TeamModel#
     * @param {array} players - players who are members of the team.
     * @returns {object}  */
    fillUpModels: function (players) {
        var self = this;
        $.each(players, function (i, player) {
            var response = self.selectResponse(player.summonerId);
            var league = self.selectLeague(player.summonerId);
            self.get('models').push(self.selectChampion(response, league ,player));
        });
        return this;
    },

    /** Get summoner model
     * @memberOf TeamModel#
     * @param {string} stats - contain player stats for currently played champion
     * @param {string} league - contain player league infos
     * @param {string} player - player who will be built
     * @returns {object} summonerModel instance */
    getSummonerModel: function (stats, league, player) {
        return new SummonerModel({
            league:league,
            id:player.summonerId,
            name: player.summonerName,
            stats: stats,
            championId: player.championId,
            spell1Id: player.spell1Id,
            spell2Id: player.spell2Id,
            champList: doom.statics.getChamps()
        }).build();
    },

    /** Create Team aggregated stats
     * @memberOf TeamModel# */
    createAggregate: function () {
        var self = this;
        var kill = 0;
        var death = 0;
        var gold = 0;
        var cs = 0;
        var assist = 0;
        var total = 0;
        var lost = 0;
        var win = 0;
        var turret = 0;
        $.each(self.get('models'), function (i, member) {

            kill += member.get('kill');
            death += member.get('death');
            gold += member.get('gold');
            cs += member.get('creepscore');
            assist += member.get('assist');
            total += member.get('total');
            lost += member.get('lost');
            win += member.get('win');
            turret += member.get('turret');
        });

        self.set('kill', kill);
        self.set('death', death);
        self.set('gold', gold);
        self.set('creepscore', cs);
        self.set('assist', assist);
        self.set('total', total);
        self.set('lost', lost);
        self.set('win', win);
        self.set('DF', 2 * kill + assist - 3 * death);
        if (death === 0) {
            self.set('KDA', ((kill + assist) / 1).toFixed(2));
        } else {
            self.set('KDA', ((kill + assist) / death).toFixed(2));
        }
        self.set('turret', turret);
        if (total > 0) {
            self.set('winrate', (win / total * 100).toFixed(2));
        } else {
            self.set('winrate', '50.00');
        }
        return this;
    },

    /** Calculate doom value for the team
     * @memberOf TeamModel# */
    calculateDoom: function () {
        var firstTimers = this.get('firstTimer');
        var nonFirstTimers = 5 - firstTimers;
        var df = this.get('DF');
        var wr = (((this.get('winrate') * nonFirstTimers) + (50.00 * firstTimers)) / 5) - 50.00;
        var g = (this.get('gold') / 3000) - (3 * nonFirstTimers);
        var t = ( this.get('total') * ( this.get('winrate') / 100 ) ) / 5;
        this.set('doom', Math.round(df+wr+g+t));
        return this;
    }
    // dominance factor (DF) , shows even more domination is simple. Kills count as 2, deaths count as -3,
    // and assists are 1. This may seem slightly confusing at first but let's look at the examples from above.

});
