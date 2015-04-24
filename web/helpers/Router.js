/**
 * Created by Zoltan_Biro on 3/11/2015.
 */
"use strict";

var DocumentRouter = Backbone.Router.extend({
    routes: {
        'inputs': 'inputs',
        'doom': 'doom',
        'error': 'error'
    },
    initialize: function (model, eventAgg) {
        this.model = model;
        this.eventAgg = eventAgg;
    },
    inputs: function () {
        $("#container").empty().append(new InputView({model: this.model}).render().el);
    },
    doom: function () {
        $("#container").empty().append(new DoomView({model: this.model}).render().el);
        this.eventAgg.trigger('render:afterdoom');
    },
    error: function () {
        $("#container").empty().append(new ErrorView({model: this.model}).render().el);
    }
});
