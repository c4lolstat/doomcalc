/**
 * Created by Zoltan_Biro on 2/18/2015.
 */
"use strict";
var TeamModel = Backbone.Model.extend({

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

    build: function () {
        this.fillUpModels(this.get('players'));
        this.createAggregate();
        this.calculateDoom();
        return this;
    },

    selectResponse: function (summonerId) {
        return this.get('responses').has(summonerId) ? this.get('responses').get(summonerId) : '';
    },

    selectChampion: function (response, player) {
        var self = this;
        var champions = JSON.parse(response).champions;
        var stats = '';
        var first = self.get('firstTimer');
        $.each(champions, function (i, champion) {
            if (champion.id === player.championId) {
                stats = self.getSummonerModel(champion.stats, player);
            }
        });
        if (stats === '') {
            first = first + 1;
            self.set('firstTimer', first);
            stats = self.getSummonerModel(JSON.parse(nullStat).champions[0].stats, player);
        }
        return stats;
    },

    fillUpModels: function (players) {
        var self = this;
        $.each(players, function (i, player) {
            var response = self.selectResponse(player.summonerId);
            self.get('models').push(self.selectChampion(response, player));
        });
    },

    getSummonerModel: function (stats, player) {
        return new SummonerModel({
            name: player.summonerName,
            stats: stats,
            championId: player.championId,
            spell1Id: player.spell1Id,
            spell2Id: player.spell2Id,
            champList: champList
        }).build();
    },

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
        //console.log('kill: ' + kill + '; death: ' + death + '; gold: ' + gold + '; creepscore: ' + cs + '; assist: ' + assist + '; lost: ' + lost + '; total: ' + total + '; win: ' + win + '; KDA: ' + self.get('KDA') + '; DF: ' + self.get('DF') + '; turret: ' + turret + '; winrate: ' + self.get('winrate')+'; penalty: '+firstTimePenalty);
    },

    calculateDoom: function () {
        var firstTimers = this.get('firstTimer');
        var nonFirstTimers = 5 - firstTimers;
        var df = this.get('DF');
        var wr = (((this.get('winrate') * nonFirstTimers) + (50.00 * firstTimers)) / 5) - 50.00;
        var g = (this.get('gold') / 3000) - (3 * nonFirstTimers);
        var t = ( this.get('total') * ( this.get('winrate') / 100 ) ) / 5;
        this.set('doom', Math.round(df+wr+g+t));
        //var cos = Math.cos(3.14 / 3);
        //var sin = Math.sin(3.14 / 3);
        //var a = Math.sqrt(Math.pow((wr * sin), 2) + Math.pow((df + (cos * wr)), 2));
        //var b = Math.sqrt(Math.pow((g * sin), 2) + Math.pow((wr + (cos * g)), 2));
        //var c = Math.sqrt(Math.pow((df * sin), 2) + Math.pow((g + (cos * df)), 2));
        //var s = (a + b + c) / 2;
        //this.set('doom', Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2));
        // self.set('doom', (self.get('DF') + (self.get('winrate')-50.00) +(self.get('gold') / 3000 - 15 ) + self.get('total') / 40 + firstTimePenalty).toFixed(2));
    }
    // dominance factor (DF) , shows even more domination is simple. Kills count as 2, deaths count as -3,
    // and assists are 1. This may seem slightly confusing at first but let's look at the examples from above.

});
