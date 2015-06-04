"use strict";

/**
 * @author Zoltan_Biro
 * Created on 4/3/2015.
 */

var express = require('express');
var path = require('path');
var fs = require('fs');
var https = require('https');
var app = express();
var doomPath = path.join(__dirname, 'web');

/**Get config from file*/
var config = JSON.parse(fs.readFileSync('serverconf.json', 'utf8', function (err, data) {
    if (err) {
        throw err;
    } else {
        return data;
    }
}));

var host =config.api.host;
var summonerVersion =config.api.summonerVersion;
var statsVersion =config.api.statsVersion;
var leagueVersion =config.api.leaguerVersion;
var staticVersion = config.api.staticVersion;
var apiKey = config.api.apiKey;

var requestLimit = config.requestLimiter.requestLimit || 10;
var timeLimit =config.requestLimiter.timeLimit || 10000;
var cntrequest = 0;
var requestTimes = [];

/** Follow request for request limiting
 * @return {number} timeout - delay for settimeout*/
function getTimeOut() {
    var timeout = 0;
    if (cntrequest < requestLimit) {
        cntrequest++;
        requestTimes.push(new Date().getTime());
    } else {
        var interval = new Date().getTime() - requestTimes[0];
        if (interval > timeLimit) {
            requestTimes.shift();
            requestTimes.push(new Date().getTime());
        } else {
            timeout = timeLimit - interval;
            requestTimes.shift();
            requestTimes.push(new Date().getTime() + timeout);
        }
    }
    return timeout;
};

/**Enable servicing static files from hdd*/
app.use(express.static(doomPath));

/**Mapping for root url
 * @param {object} req - request
 * @param {object} re - response*/
app.get('/', function (req, res) {
    res.sendFile(path.join(doomPath, 'index.html'));
});

/**Mapping for test page
 * @param {object} req - request
 * @param {object} re - response*/
app.get('/testpage', function (req, res) {
    res.sendFile(path.join(doomPath, 'Runner.html'));
});

/**Mapping for get summoner id by name
 * @param {object} req - request
 * @param {object} re - response*/
app.get('/summonerid/:name/:region([a-z]+)', function (req, res) {
    setTimeout(function () {
        var name = req.params.name;
        var region = req.params.region;

        var response = '';
        var url = "https://" + region + host + "/api/lol/" + region + "/" + summonerVersion + "/summoner/by-name/" + name + "?api_key=" + apiKey;

        https.get(url, function (rs) {
            rs.on('data', function (chunk) {
                response += chunk;
            });
            rs.on('error', function (e) {
                console.error(e);
            });
            rs.on('end', function () {
                res.send(response);
            });
        });
    }, getTimeOut());
});

/**Mapping for current game
 * @param {object} req - request
 * @param {object} re - response*/
app.get('/team/:id([0-9]+)/:region([a-z]+)', function (req, res) {
    setTimeout(function () {
        var id = req.params.id;
        var region = req.params.region;

        var response = '';
        var url = "https://" + region + host + "/observer-mode/rest/consumer/getSpectatorGameInfo/" + region.toUpperCase() + "1/" + id + "?api_key=" + apiKey;

        https.get(url, function (rs) {
            rs.on('data', function (chunk) {
                response += chunk;
            });
            rs.on('error', function (e) {
                console.error(e);
            });
            rs.on('end', function () {
                res.send(response);
            });
        });
    }, getTimeOut());
});

/**Mapping player ranked stats
 * @param {object} req - request
 * @param {object} re - response*/
app.get('/rankedstat/:id([0-9]+)/:region([a-z]+)', function (req, res) {
    setTimeout(function () {
        var id = req.params.id;
        var region = req.params.region;

        var response = '';
        var url = "https://" + region + host + "/api/lol/" + region + "/" + statsVersion + "/stats/by-summoner/" + id + "/ranked?api_key=" + apiKey;

        https.get(url, function (rs) {
            rs.on('data', function (chunk) {
                response += chunk;
            });
            rs.on('error', function (e) {
                console.error(e);
            });
            rs.on('end', function () {
                res.send(response);
            });
        });
    }, getTimeOut());
});

/**Mapping for player league (tier / division)
 * @param {object} req - request
 * @param {object} re - response*/
app.get('/league/:id([0-9]+)/:region([a-z]+)', function (req, res) {
    setTimeout(function () {
        var id = req.params.id;
        var region = req.params.region;

        var response = '';
        var url = "https://" + region + host + "/api/lol/" + region + "/" + leagueVersion + "/league/by-summoner/" + id + "?api_key=" + apiKey;

        https.get(url, function (rs) {
            rs.on('data', function (chunk) {
                response += chunk;
            });
            rs.on('error', function (e) {
                console.error(e);
            });
            rs.on('end', function () {
                res.send(response);
            });
        });
    }, getTimeOut());
});

/**Mapping for static champion list
 * not counted in request limit
 * @param {object} req - request
 * @param {object} re - response*/
app.get('/champlist', function (req, res) {
    var response = '';
    var url = "https://global"+host+"/api/lol/static-data/euw/"+staticVersion+"/champion?locale=en_US&dataById=true&api_key=" + apiKey;

    https.get(url, function (rs) {
        rs.on('data', function (chunk) {
            response += chunk;
        });
        rs.on('error', function (e) {
            console.error(e);
        });
        rs.on('end', function () {
            res.send(response);
        });
    });
});

/**Mapping for static rune list
 * not counted in request limit
 * @param {object} req - request
 * @param {object} re - response*/
app.get('/runelist', function (req, res) {
    var response = '';
    var url = "https://global"+host+"/api/lol/static-data/euw/"+staticVersion+"/rune?locale=en_US&dataById=true&api_key=" + apiKey;

    https.get(url, function (rs) {
        rs.on('data', function (chunk) {
            response += chunk;
        });
        rs.on('error', function (e) {
            console.error(e);
        });
        rs.on('end', function () {
            res.send(response);
        });
    });
});

/**Mapping for static mastery list
 * not counted in request limit
 * @param {object} req - request
 * @param {object} re - response*/
app.get('/masterylist', function (req, res) {
    var response = '';
    var url = "https://global"+host+"/api/lol/static-data/euw/"+staticVersion+"/mastery?locale=en_US&masteryListData=masteryTree&api_key=" + apiKey;

    https.get(url, function (rs) {
        rs.on('data', function (chunk) {
            response += chunk;
        });
        rs.on('error', function (e) {
            console.error(e);
        });
        rs.on('end', function () {
            res.send(response);
        });
    });
});

/**Mapping for language file
 * @param {object} req - request
 * @param {object} re - response*/
app.get('/locale/:lang([a-z]+)', function (req, res) {
    var lang = req.params.lang;
    if (lang === 'en') {
        res.sendFile(path.join(doomPath, 'localization/en.json'));
    }
    if (lang === 'ru') {
        res.sendFile(path.join(doomPath, 'localization/ru.json'));
    }
});

/**Create server on port 1708*/
var server = app.listen(1708, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});