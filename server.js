/**
 * Created by Zoltan_Biro on 4/3/2015.
 */

var express = require('express');
var path = require('path');
var fs = require('fs');
var https = require('https');
var app = express();
var doom = path.join(__dirname, 'web');

var host = ".api.pvp.net";
var summonerVersion = "v1.4";
var statsVersion = "v1.3";
var leagueVersion="v2.5";
var apiKey = "b0e2d67c-bb60-45e1-bb25-90806016c163";

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res) {
        res.set('x-timestamp', Date.now());
    }
};

var requestLimit = 10;
var timeLimit = 10000;
var cntrequest = 0;
var requestTimes = [];

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

app.use(express.static(doom, options));

app.get('/', function (req, res) {
    res.sendFile(path.join(doom, 'index.html'));
});

app.get('/testpage', function (req, res) {
    res.sendFile(path.join(doom, 'Runner.html'));
});

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

app.get('/rankedstat/:id([0-9]+)/:region([a-z]+)', function (req, res) {
    setTimeout(function () {
        var id = req.params.id;
        var region = req.params.region;

        var response = '';
        var url = "https://" + region + host + "/api/lol/" + region + "/" + statsVersion + "/stats/by-summoner/" + id + "/ranked?api_key=" + apiKey

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

app.get('/league/:id([0-9]+)/:region([a-z]+)', function (req, res) {
    setTimeout(function () {
        var id = req.params.id;
        var region = req.params.region;

        var response = '';
        var url = "https://" + region + host + "/api/lol/" + region + "/"+leagueVersion+"/league/by-summoner/" + id + "?api_key=" + apiKey

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

app.get('/champlist', function (req, res) {
    var response = '';
    var url = "https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?locale=en_US&dataById=true&api_key=" + apiKey;

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

app.get('/locale/:lang([a-z]+)', function (req, res) {
    var lang = req.params.lang;
    if (lang === 'en') {
        res.sendFile(path.join(doom, 'localization/en.json'));
    }
    if (lang === 'ru') {
        res.sendFile(path.join(doom, 'localization/ru.json'));
    }
});


var server = app.listen(1708, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});