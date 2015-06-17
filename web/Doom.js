/**
 * Created by Zoltan_Biro on 6/16/2015.
 */

var doom = doom || {};

doom.eventAgg = _.extend({}, Backbone.Events);
doom.watchDogTime = 90000;
doom.dictionary = new Map();
doom.lang = doom.lang || 'en';
doom.logger = woodman.getLogger('index');
doom.en = $.ajax(window.location.origin + "/locale/en");
doom.ru = $.ajax(window.location.origin + "/locale/ru");
doom.lastPlayer = '';
doom.models = {};
doom.views = {};
doom.router = {};
doom.inst = {};


doom.init = function () {
    doom.viewHandler = (function () {
        var currentView=null;
        return {
            show: function (view) {
                if (view!=currentView && currentView!=null){
                    currentView.close();
                }
                currentView = view;
                currentView.render();
                $("#container").html(currentView.el);
            }
        }
    })();
    doom.statics = new Constants().init();
    doom.exporter = new toCsv();
    doom.colorize = new Colorize();
    doom.inst.router = new doom.router.DocumentRouter();
};