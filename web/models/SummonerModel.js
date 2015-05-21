/**
 * Created by Zoltan_Biro on 2/11/2015.
 */
"use strict";
var SummonerModel = Backbone.Model.extend({
    defaults: function () {
        return {
            id: 0,
            league: new Array(),
            name: "",
            championId: 0,
            spell1Id: 0,
            spell2Id: 0,
            champion: '',
            total: 0,
            kill: 0,
            death: 0,
            assist: 0,
            KDA: '0',
            gold: 0,
            creepscore: 0,
            win: 0,
            lost: 0,
            turret: 0,
            smwrate: 0,
            champList: {},
            tier: '',
            division: '',
            lp: 0
        }
    },

    getSummonerAsObject: function () {
        var obj = {};

        obj.name = this.get('name');
        obj.champion = this.get('champion');
        obj.total = this.get('total');
        obj.kill = this.get('kill');
        obj.death = this.get('death');
        obj.assist = this.get('assist');
        obj.KDA = this.get('KDA');
        obj.gold = this.get('gold');
        obj.cs = this.get('creepscore');
        obj.win = this.get('win');
        obj.lost = this.get('lost');
        obj.smwrate = this.get('smwrate');
        obj.turret = this.get('turret');
        obj.lp = this.get('lp');
        obj.tier = this.get('tier').slice(0,1);
        obj.division = this.get('division');

        return obj;
    },

    getLeagueInfo: function () {
        try {
            var self = this;
            var league = JSON.parse(self.get('league'));
            self.set('tier', league[self.get('id')][0].tier);
            var entries = league[self.get('id')][0].entries;
            $.each(entries, function (i, entry) {
                if (parseInt(entry.playerOrTeamId) === self.get('id')) {
                    self.set('lp', entry.leaguePoints);
                    self.set('division', entry.division);
                }
            });
        }catch (err){
            this.set('lp','?');
            this.set('tier','?');
            this.set('division','?');
        }
    },

    getStats: function () {
        try {
            var champion = this.get('champList').data[this.get('championId')].name;
            this.set('champion', champion);
        } catch (err) {
            this.set('champion', 'Unknown');
        } finally {
            var total = this.get('stats').totalSessionsPlayed;
            if (total > 0) {
                this.set('total', total);
                var kill = this.get('stats').totalChampionKills / total;
                this.set('kill', Math.round(kill));
                var death = this.get('stats').totalDeathsPerSession / total;
                this.set('death', Math.round(death));
                var assist = this.get('stats').totalAssists / total;
                this.set('assist', Math.round(assist));
                if (death === 0) {
                    this.set('KDA', ((kill + assist) / 1).toFixed(2));
                } else {
                    this.set('KDA', ((kill + assist) / death).toFixed(2));
                }
                this.set('win', this.get('stats').totalSessionsWon);
                this.set('lost', this.get('stats').totalSessionsLost);
                var winrate = (this.get('win') / total) * 100;
                this.set('smwrate', winrate.toFixed(2));
                var gold = this.get('stats').totalGoldEarned / total;
                this.set('gold', Math.round(gold));
                var cs = this.get('stats').totalMinionKills / total;
                this.set('creepscore', Math.round(cs));
                var turret = this.get('stats').totalTurretsKilled / total;
                this.set('turret', Math.round(turret));
            }
        }
    },
    build: function () {
        this.getLeagueInfo()
        this.getStats();
        return this;
    }

});
