/**
 * Created by Zoltan_Biro on 3/24/2015.
 */

describe('In summonerModel model', function () {
    var model;
    var champList = {"data": {"131": {"id": 131, "key": "Diana", "name": "Diana", "title": "Scorn of the Moon"}}};
    var name = 'c4chronic';
    var regularStats = {
        totalSessionsPlayed: 10,
        totalChampionKills: 10,
        totalDeathsPerSession: 10,
        totalAssists: 10,
        totalSessionsWon: 5,
        totalSessionsLost: 5,
        totalGoldEarned: 5,
        totalMinionKills: 10,
        totalTurretsKilled: 10
    };

    var firstTimeStats = {
        totalSessionsPlayed: 0,
        totalChampionKills: 10,
        totalDeathsPerSession: 10,
        totalAssists: 10,
        totalSessionsWon: 5,
        totalSessionsLost: 5,
        totalGoldEarned: 5,
        totalMinionKills: 10,
        totalTurretsKilled: 10
    };

    var championId = 131;
    var spell1 = 1;
    var spell2 = 2;

    var regularResponse = {
        name: 'c4chronic',
        champion: 'Diana',
        total: 10,
        kill: 1,
        death: 1,
        assist: 1,
        gold: 1,
        cs: 1,
        win: 5,
        lost: 5,
        turret: 1
    };

    describe('build method', function () {
        beforeEach(function () {
            this.model = new SummonerModel({
                name: name,
                championId: championId,
                spell1Id: spell1,
                spell2Id: spell2,
                champList: champList
            });
        });

        afterEach(function () {
            this.model.clear();
        });

        it('should calculate stats on build', function () {
            this.model.set('stats', regularStats);
            this.model.build();
            expect(this.model.get('name')).toEqual('c4chronic');
            expect(this.model.get('champion')).toEqual('Diana');
            expect(this.model.get('total')).toEqual(10);
            expect(this.model.get('kill')).toEqual(1);
            expect(this.model.get('death')).toEqual(1);
            expect(this.model.get('assist')).toEqual(1);
            expect(this.model.get('gold')).toEqual(1);
            expect(this.model.get('creepscore')).toEqual(1);
            expect(this.model.get('win')).toEqual(5);
            expect(this.model.get('lost')).toEqual(5);
            expect(this.model.get('turret')).toEqual(1);
        });

        it('should handle first timer summoner', function () {
            this.model.set('stats', firstTimeStats);
            this.model.build();
            expect(this.model.get('name')).toEqual('c4chronic');
            expect(this.model.get('champion')).toEqual('Diana');
            expect(this.model.get('total')).toEqual(0);
            expect(this.model.get('kill')).toEqual(0);
            expect(this.model.get('death')).toEqual(0);
            expect(this.model.get('assist')).toEqual(0);
            expect(this.model.get('gold')).toEqual(0);
            expect(this.model.get('creepscore')).toEqual(0);
            expect(this.model.get('win')).toEqual(0);
            expect(this.model.get('lost')).toEqual(0);
            expect(this.model.get('turret')).toEqual(0);
        });

        it('should handle unknown champion', function () {
            this.model.set('championId', 1);
            this.model.set('stats', regularStats);
            this.model.build();
            expect(this.model.get('champion')).toEqual('Unknown');
        });
    });
    describe('getSummonerAsObject method', function () {

        beforeEach(function () {
            this.model = new SummonerModel({
                name: name,
                championId: championId,
                spell1Id: spell1,
                spell2Id: spell2,
                champList: champList
            });
        });

        afterEach(function () {
            this.model.clear();
        });
        it('should create correct object from model', function () {
            this.model.set('stats', regularStats);
            this.model.build();
            expect(this.model.getSummonerAsObject()).toEqual(regularResponse);
        });
    });
});