/**
 * Created by Zoltan_Biro on 3/25/2015.
 */

describe('In doomModel model', function () {
    var model;
    var team = '{"one":"{}","two":"{}"}';
    var participants = '[{"teamId":100,"spell1Id":12,"spell2Id":4,"championId":31,"profileIconId":713,"summonerName":"Ev1LAng3L","bot":false,"summonerId":46596982,"runes":[{"count":9,"runeId":5273},{"count":9,"runeId":5290},{"count":9,"runeId":5318},{"count":3,"runeId":5357}],"masteries":[{"rank":4,"masteryId":4113},{"rank":1,"masteryId":4114},{"rank":3,"masteryId":4123},{"rank":1,"masteryId":4133},{"rank":2,"masteryId":4211},{"rank":2,"masteryId":4212},{"rank":1,"masteryId":4221},{"rank":3,"masteryId":4222},{"rank":1,"masteryId":4232},{"rank":3,"masteryId":4233},{"rank":3,"masteryId":4241},{"rank":1,"masteryId":4242},{"rank":1,"masteryId":4251},{"rank":3,"masteryId":4252},{"rank":1,"masteryId":4262}]},{"teamId":100,"spell1Id":4,"spell2Id":7,"championId":104,"profileIconId":781,"summonerName":"JinSilverz","bot":false,"summonerId":35636891,"runes":[{"count":9,"runeId":5245},{"count":9,"runeId":5277},{"count":9,"runeId":5317},{"count":1,"runeId":5335},{"count":2,"runeId":5337}],"masteries":[{"rank":4,"masteryId":4112},{"rank":1,"masteryId":4114},{"rank":3,"masteryId":4122},{"rank":1,"masteryId":4124},{"rank":1,"masteryId":4131},{"rank":1,"masteryId":4132},{"rank":3,"masteryId":4134},{"rank":1,"masteryId":4142},{"rank":1,"masteryId":4144},{"rank":1,"masteryId":4151},{"rank":3,"masteryId":4152},{"rank":1,"masteryId":4162},{"rank":2,"masteryId":4211},{"rank":2,"masteryId":4212},{"rank":1,"masteryId":4221},{"rank":3,"masteryId":4222},{"rank":1,"masteryId":4232}]},{"teamId":100,"spell1Id":4,"spell2Id":14,"championId":7,"profileIconId":657,"summonerName":"DRO BO VIK","bot":false,"summonerId":41518246,"runes":[{"count":9,"runeId":5273},{"count":9,"runeId":5298},{"count":9,"runeId":5316},{"count":3,"runeId":5357}],"masteries":[{"rank":1,"masteryId":4111},{"rank":3,"masteryId":4113},{"rank":1,"masteryId":4114},{"rank":3,"masteryId":4123},{"rank":1,"masteryId":4124},{"rank":1,"masteryId":4133},{"rank":3,"masteryId":4134},{"rank":3,"masteryId":4143},{"rank":1,"masteryId":4144},{"rank":2,"masteryId":4152},{"rank":1,"masteryId":4154},{"rank":1,"masteryId":4162},{"rank":1,"masteryId":4311},{"rank":3,"masteryId":4313},{"rank":2,"masteryId":4322},{"rank":1,"masteryId":4323},{"rank":1,"masteryId":4324},{"rank":1,"masteryId":4334}]},{"teamId":100,"spell1Id":3,"spell2Id":4,"championId":25,"profileIconId":660,"summonerName":"Magnetize","bot":false,"summonerId":27125570,"runes":[{"count":9,"runeId":5273},{"count":9,"runeId":5289},{"count":4,"runeId":5317},{"count":5,"runeId":5331},{"count":3,"runeId":5357}],"masteries":[{"rank":1,"masteryId":4111},{"rank":2,"masteryId":4113},{"rank":1,"masteryId":4114},{"rank":3,"masteryId":4123},{"rank":1,"masteryId":4124},{"rank":1,"masteryId":4133},{"rank":3,"masteryId":4134},{"rank":3,"masteryId":4143},{"rank":1,"masteryId":4144},{"rank":3,"masteryId":4152},{"rank":1,"masteryId":4154},{"rank":1,"masteryId":4162},{"rank":3,"masteryId":4312},{"rank":3,"masteryId":4313},{"rank":1,"masteryId":4322},{"rank":1,"masteryId":4324},{"rank":1,"masteryId":4332}]},{"teamId":100,"spell1Id":4,"spell2Id":11,"championId":64,"profileIconId":23,"summonerName":"jordnööten","bot":false,"summonerId":42909759,"runes":[{"count":9,"runeId":5245},{"count":3,"runeId":5289},{"count":6,"runeId":5295},{"count":9,"runeId":5317},{"count":3,"runeId":5335}],"masteries":[{"rank":3,"masteryId":4112},{"rank":1,"masteryId":4114},{"rank":1,"masteryId":4121},{"rank":3,"masteryId":4122},{"rank":1,"masteryId":4124},{"rank":1,"masteryId":4131},{"rank":1,"masteryId":4132},{"rank":3,"masteryId":4134},{"rank":1,"masteryId":4141},{"rank":1,"masteryId":4142},{"rank":1,"masteryId":4144},{"rank":3,"masteryId":4152},{"rank":1,"masteryId":4162},{"rank":2,"masteryId":4212},{"rank":2,"masteryId":4214},{"rank":3,"masteryId":4222},{"rank":1,"masteryId":4224},{"rank":1,"masteryId":4232}]},{"teamId":200,"spell1Id":14,"spell2Id":4,"championId":112,"profileIconId":7,"summonerName":"Unlucky sideph","bot":false,"summonerId":31550825,"runes":[{"count":9,"runeId":5273},{"count":9,"runeId":5289},{"count":9,"runeId":5316},{"count":3,"runeId":5357}],"masteries":[{"rank":3,"masteryId":4113},{"rank":1,"masteryId":4114},{"rank":3,"masteryId":4123},{"rank":1,"masteryId":4124},{"rank":1,"masteryId":4133},{"rank":3,"masteryId":4134},{"rank":3,"masteryId":4143},{"rank":1,"masteryId":4144},{"rank":3,"masteryId":4152},{"rank":1,"masteryId":4154},{"rank":1,"masteryId":4162},{"rank":1,"masteryId":4311},{"rank":3,"masteryId":4313},{"rank":2,"masteryId":4322},{"rank":1,"masteryId":4323},{"rank":1,"masteryId":4324},{"rank":1,"masteryId":4334}]},{"teamId":200,"spell1Id":4,"spell2Id":12,"championId":6,"profileIconId":23,"summonerName":"Boots of Speed","bot":false,"summonerId":20009147,"runes":[{"count":9,"runeId":5253},{"count":9,"runeId":5290},{"count":9,"runeId":5317},{"count":3,"runeId":5335}],"masteries":[{"rank":4,"masteryId":4113},{"rank":1,"masteryId":4114},{"rank":1,"masteryId":4121},{"rank":3,"masteryId":4122},{"rank":1,"masteryId":4124},{"rank":1,"masteryId":4131},{"rank":1,"masteryId":4132},{"rank":3,"masteryId":4134},{"rank":1,"masteryId":4141},{"rank":1,"masteryId":4144},{"rank":3,"masteryId":4152},{"rank":1,"masteryId":4162},{"rank":2,"masteryId":4211},{"rank":2,"masteryId":4212},{"rank":1,"masteryId":4221},{"rank":3,"masteryId":4222},{"rank":1,"masteryId":4232}]},{"teamId":200,"spell1Id":4,"spell2Id":11,"championId":254,"profileIconId":7,"summonerName":"ETERNAL daniz","bot":false,"summonerId":20018936,"runes":[{"count":9,"runeId":5245},{"count":9,"runeId":5289},{"count":9,"runeId":5317},{"count":3,"runeId":5335}],"masteries":[{"rank":4,"masteryId":4112},{"rank":1,"masteryId":4114},{"rank":3,"masteryId":4122},{"rank":1,"masteryId":4124},{"rank":1,"masteryId":4132},{"rank":3,"masteryId":4134},{"rank":3,"masteryId":4142},{"rank":1,"masteryId":4144},{"rank":3,"masteryId":4152},{"rank":1,"masteryId":4162},{"rank":2,"masteryId":4212},{"rank":2,"masteryId":4213},{"rank":2,"masteryId":4214},{"rank":1,"masteryId":4222},{"rank":1,"masteryId":4224},{"rank":1,"masteryId":4233}]},{"teamId":200,"spell1Id":7,"spell2Id":4,"championId":42,"profileIconId":758,"summonerName":"E KLoRo","bot":false,"summonerId":52233720,"runes":[{"count":9,"runeId":5245},{"count":9,"runeId":5289},{"count":9,"runeId":5317},{"count":3,"runeId":5337}],"masteries":[{"rank":4,"masteryId":4112},{"rank":1,"masteryId":4114},{"rank":3,"masteryId":4122},{"rank":1,"masteryId":4124},{"rank":1,"masteryId":4131},{"rank":1,"masteryId":4132},{"rank":3,"masteryId":4134},{"rank":1,"masteryId":4141},{"rank":1,"masteryId":4144},{"rank":1,"masteryId":4151},{"rank":3,"masteryId":4152},{"rank":1,"masteryId":4162},{"rank":2,"masteryId":4211},{"rank":2,"masteryId":4212},{"rank":1,"masteryId":4221},{"rank":3,"masteryId":4222},{"rank":1,"masteryId":4232}]},{"teamId":200,"spell1Id":4,"spell2Id":3,"championId":89,"profileIconId":616,"summonerName":"SI  Chiddy Boom","bot":false,"summonerId":35938226,"runes":[{"count":9,"runeId":5245},{"count":9,"runeId":5289},{"count":5,"runeId":5315},{"count":4,"runeId":5317},{"count":3,"runeId":5347}],"masteries":[{"rank":2,"masteryId":4211},{"rank":2,"masteryId":4213},{"rank":1,"masteryId":4221},{"rank":3,"masteryId":4222},{"rank":1,"masteryId":4232},{"rank":3,"masteryId":4233},{"rank":3,"masteryId":4234},{"rank":1,"masteryId":4244},{"rank":3,"masteryId":4312},{"rank":1,"masteryId":4314},{"rank":3,"masteryId":4322},{"rank":1,"masteryId":4324},{"rank":3,"masteryId":4331},{"rank":1,"masteryId":4334},{"rank":1,"masteryId":4341},{"rank":1,"masteryId":4342}]}]';
    var responsemap = new Map();
    var runeResponse= [ { count: 9, runeId: 5273, description: '+0.87 magic penetration' }, { count: 9, runeId: 5290, description: '+0.16 magic resist per level (+3 at champion level 18)' }, { count: 9, runeId: 5318, description: '+0.16 armor per level (+3 at champion level 18)' }, { count: 3, runeId: 5357, description: '+4.95 ability power' } ]
    responsemap.set('error', 'fail');

    describe('calculateDoom method', function () {
        beforeEach(function () {
            this.model = new DoomModel({eventAgg: _.extend({}, Backbone.Events)});
        });

        afterEach(function () {
            this.model.clear();
        });

        it('should calculate DOOM both positive', function () {
            this.model.set('allyDoom', 6.50);
            this.model.set('enemyDoom', 6.50);
            this.model.calculateDoom();
            expect(this.model.get('allyDoomPercentage')).toEqual(0);
            expect(this.model.get('enemyDoomPercentage')).toEqual(0);
            expect(this.model.get('doomMessage')).toEqual('<%_level5%>');
        });
        it('should calculate DOOM ally positive, enemy negative', function () {
            this.model.set('allyDoom', 6.50);
            this.model.set('enemyDoom', -6.50);
            this.model.calculateDoom();
            expect(this.model.get('allyDoomPercentage')).toEqual(-13);
            expect(this.model.get('enemyDoomPercentage')).toEqual(13);
            expect(this.model.get('doomMessage')).toEqual('<%_level7%>');
        });
        it('should calculate DOOM ally negative, enemy positive', function () {
            this.model.set('allyDoom', -6.50);
            this.model.set('enemyDoom', 6.50);
            this.model.calculateDoom();
            expect(this.model.get('allyDoomPercentage')).toEqual(13);
            expect(this.model.get('enemyDoomPercentage')).toEqual(-13);
            expect(this.model.get('doomMessage')).toEqual('<%_level3%>');
        });
        it('should calculate DOOM both negative', function () {
            this.model.set('allyDoom', -6.50);
            this.model.set('enemyDoom', -6.50);
            this.model.calculateDoom();
            expect(this.model.get('allyDoomPercentage')).toEqual(0);
            expect(this.model.get('enemyDoomPercentage')).toEqual(0);
            expect(this.model.get('doomMessage')).toEqual('<%_level5%>');
        });
    });
    describe('getCredentials method', function () {
        beforeEach(function () {
            this.model = new DoomModel({eventAgg: _.extend({}, Backbone.Events)});
        });

        afterEach(function () {
            this.model.clear();
        });

        it('should form raw credentials', function () {
            spyOn(this.model, 'getName').and.returnValue('C4 Chronic');
            spyOn(this.model, 'getRegion').and.returnValue(' EUW ');
            var credentilas = this.model.getCredentials();
            expect(credentilas.name).toEqual('c4chronic');
            expect(credentilas.region).toEqual('euw');
        });
    });

    describe('getInputs method', function () {
        beforeEach(function () {
            this.model = new DoomModel({eventAgg: _.extend({}, Backbone.Events)});
        });

        afterEach(function () {
            this.model.clear();
        });
        it('should save correct credentials into the model', function () {
            spyOn(this.model, 'getCredentials').and.returnValue({name: 'abcd', region: 'euw'});
            spyOn(this.model, 'fireEvent');
            this.model.getInputs();
            expect(this.model.get('name')).toEqual('abcd');
            expect(this.model.get('region')).toEqual('euw');
            expect(this.model.fireEvent).toHaveBeenCalled();
        });

        it('should give an error on wrong credentials', function () {
            spyOn(this.model, 'getCredentials').and.returnValue({name: '', region: ''});
            spyOn(this.model, 'fireEvent');
            this.model.getInputs();
            expect(this.model.get('inputError')).toEqual(true);
            expect(this.model.fireEvent).toHaveBeenCalled();
        });
    });

    describe('getSummonerId method', function () {
        beforeEach(function () {
            this.model = new DoomModel({eventAgg: _.extend({}, Backbone.Events)});
        });

        afterEach(function () {
            this.model.clear();
        });
        it('should get summoner id on success', function () {
            spyOn(this.model, 'fireEvent');

            var d = $.Deferred();
            d.resolve('{"abcd": {"id": 1111}}');
            this.model.set('name', 'abcd');
            spyOn($, 'ajax').and.returnValue(d.promise());

            this.model.getSummonerId();

            expect(this.model.get('inputError')).toEqual(false);
            expect(this.model.get('id')).toEqual(1111);
            expect(this.model.fireEvent).toHaveBeenCalled();
        });

        it('should give an error on fail', function () {
            spyOn(this.model, 'fireEvent');

            var d = $.Deferred();
            d.reject();
            this.model.set('name', 'abcd');
            spyOn($, 'ajax').and.returnValue(d.promise());

            this.model.getSummonerId();

            expect(this.model.fireEvent).toHaveBeenCalled();
        });
    });

    describe('getCurrentGameData', function () {
        beforeEach(function () {
            this.model = new DoomModel({eventAgg: _.extend({}, Backbone.Events)});
        });

        afterEach(function () {
            this.model.clear();
        });
        it('should set filled team into the model', function () {
            spyOn(this.model, 'fireEvent');

            var d = $.Deferred();
            d.resolve('{"abcd": {"id": 1111}}');
            this.model.set('name', 'abcd');
            spyOn($, 'ajax').and.returnValue(d.promise());

            this.model.getCurrentGameData();

            expect(this.model.get('teamInput')).toEqual('{"abcd": {"id": 1111}}');
            expect(this.model.fireEvent).toHaveBeenCalled();
        });

        it('should fire an error  on not valid team input json', function () {
            spyOn(this.model, 'fireEvent');

            var d = $.Deferred();
            d.resolve('<p>error</p>');
            this.model.set('name', 'abcd');
            spyOn($, 'ajax').and.returnValue(d.promise());

            this.model.getCurrentGameData();
            expect(this.model.fireEvent).toHaveBeenCalled();
        });
    });

    describe('sortPlayersIntoTeams method', function () {
        beforeEach(function () {
            this.model = new DoomModel({eventAgg: _.extend({}, Backbone.Events)});
        });

        afterEach(function () {
            this.model.clear();
        });
        it('should sort 5-5 players into teams', function () {
            this.model.set('participants', JSON.parse(participants));
            this.model.set('id', 46596982);
            this.model.sortPlayersIntoTeams();
            expect(this.model.get('ally').length).toEqual(5);
            expect(this.model.get('enemy').length).toEqual(5);
        });

        it('should put the caller player in ally team', function () {
            this.model.set('participants', JSON.parse(participants));
            this.model.set('id', 46596982);
            this.model.sortPlayersIntoTeams();
            expect(this.model.get('ally')[0].summonerId).toEqual(46596982);
        });
    });
    describe('startBuild method', function () {
        beforeEach(function () {
            this.model = new DoomModel({eventAgg: _.extend({}, Backbone.Events)});
        });

        afterEach(function () {
            this.model.clear();
        });
        it('should handle the build', function () {
            spyOn(this.model, 'sortPlayersIntoTeams');
            spyOn(this.model, 'getStats');
            var input = '{"participants":"yolo"}';
            this.model.set('teamInput', input);
            this.model.startBuild();
            expect(this.model.sortPlayersIntoTeams).toHaveBeenCalled();
            expect(this.model.getStats).toHaveBeenCalled();
            expect(this.model.get('participants')).toEqual('yolo');
        });
    });

    describe('getMasteries method', function () {
        beforeEach(function () {
            this.model = new DoomModel({eventAgg: _.extend({}, Backbone.Events)});
        });

        afterEach(function () {
            this.model.clear();
        });

        it('should return masteries grouped by branch', function () {
            this.model.set('participants', JSON.parse(participants));
            var check = this.model.getMasteries('Ev1LAng3L');
            expect(check).toEqual('9/21/0');
        });
    });

    describe('getRunes method', function () {
        beforeEach(function () {
            this.model = new DoomModel({eventAgg: _.extend({}, Backbone.Events)});
        });

        afterEach(function () {
            this.model.clear();
        });

        it('should return object with rune count and description', function () {
            this.model.set('participants', JSON.parse(participants));
            var check = this.model.getRunes('Ev1LAng3L');
            expect(check).toEqual(runeResponse);
        });
    });

});
