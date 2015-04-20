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
        var allyTeam = new TeamModel({players: self.get('ally'), responses: self.get('responses')}).build();
        self.set('allyteam', allyTeam);
        self.set('allyDoom', parseFloat(self.get('allyteam').get('doom')));
        var enemyTeam = new TeamModel({players: self.get('enemy'), responses: self.get('responses')}).build();
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

        if (self.get('allyDoomPercentage') > 25) self.set('doomMessage', 'Your doom lvl is over 9000!');
        if (self.get('allyDoomPercentage') <= 25 && self.get('allyDoomPercentage') > 20) self.set('doomMessage', 'Did you sacrificed a kitty today?');
        if (self.get('allyDoomPercentage') <= 20 && self.get('allyDoomPercentage') > 15) self.set('doomMessage', 'Surrend @ 20...');
        if (self.get('allyDoomPercentage') <= 15 && self.get('allyDoomPercentage') > 10) self.set('doomMessage', 'GG');
        if (self.get('allyDoomPercentage') <= 10 && self.get('allyDoomPercentage') > 5) self.set('doomMessage', 'You can forget your food in the microwave.');
        if (self.get('allyDoomPercentage') <= 5 && self.get('allyDoomPercentage') > -5) self.set('doomMessage', 'You have to bait them and outsmart them.');
        if (self.get('allyDoomPercentage') <= -5 && self.get('allyDoomPercentage') > -10) self.set('doomMessage', 'OK');
        if (self.get('allyDoomPercentage') <= -10 && self.get('allyDoomPercentage') > -15) self.set('doomMessage', 'Tons of damage!');
        if (self.get('allyDoomPercentage') <= -15 && self.get('allyDoomPercentage') > -20) self.set('doomMessage', 'You see hero, you kill hero!');
        if (self.get('allyDoomPercentage') <= -20 && self.get('allyDoomPercentage') > -25) self.set('doomMessage', 'If you want to play with me, you better be sure you know the game.');
        if (self.get('allyDoomPercentage') <= -25) self.set('doomMessage', 'Blessed by the light!');

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
    }
    ,


    getStats: function (participants) {
        var responses = new Map();
        var self = this;
        var currentLocation = window.location;

        function ajaxCall(participant, callback) {
            $.ajax({
                url: currentLocation.origin + "/rankedstat/" + participants[participant].summonerId + "/" + self.get('region')
                , success: function (data) {
                    responses.set(participants[participant].summonerId, data);
                    callback();
                },
                error: function () {
                    responses.set('error', 'fail');
                    callback();
                }
            });
        };

        setTimeout(function () {
            ajaxCall(0, function () {
            });
        }, getTimeOut());

        setTimeout(function () {
            ajaxCall(1, function () {
            });
        }, getTimeOut());

        setTimeout(function () {
            ajaxCall(2, function () {
            });
        }, getTimeOut());

        setTimeout(function () {
            ajaxCall(3, function () {
            });
        }, getTimeOut());

        setTimeout(function () {
            ajaxCall(4, function () {
            });
        }, getTimeOut());

        setTimeout(function () {
            ajaxCall(5, function () {
            });
        }, getTimeOut());

        setTimeout(function () {
            ajaxCall(6, function () {
            });
        }, getTimeOut());

        setTimeout(function () {
            ajaxCall(7, function () {
            });
        }, getTimeOut());

        setTimeout(function () {
            ajaxCall(8, function () {
            });
        }, getTimeOut());

        setTimeout(function () {
            ajaxCall(9, function () {
                self.set('responses', responses);
                if (!self.checkResponses()) {
                    self.buildTeams()
                } else {
                    self.fireEvent('error:api');
                }
            });
        }, getTimeOut());
    },

    checkResponses: function () {
        return this.get('responses').has('error');
    }

});