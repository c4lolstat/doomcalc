"use strict";

/**
 *  @author Zoltan_Biro
 *  Created on 3/11/2015.
 */

/**@class DocumentRouter
 * @augments Backbone.Router*/

var DocumentRouter = Backbone.Router.extend({
    /**@lends DocumentRouter.prototype*/

    /**Define available routes
     * @memberOf DocumentRouter#*/
    routes: {
        'inputs': 'inputs',
        'doom': 'doom',
        'error': 'error',
        'doom/:player': 'showPopUp'
    },

    /**Initialize router
     * @memberOf DocumentRouter#
     * @param {model} model - Backbone model (DoomModel instance)
     * @param {eventAggregator} eventAgg - global event handle object*/
    initialize: function (model, eventAgg) {
        this.model = model;
        this.eventAgg = eventAgg;
    },

    /** Show input view
     * @memberOf DocumentRouter# */
    inputs: function () {
        $("#container").empty().append(new InputView({model: this.model}).render().el);
    },

    /** Show doom view
     * @memberOf DocumentRouter# */
    doom: function () {
        $("#container").empty().append(new DoomView({model: this.model}).render().el);
        this.eventAgg.trigger('render:afterdoom');
    },

    /** Show general error view
     * @memberOf DocumentRouter# */
    error: function () {
        $("#container").empty().append(new ErrorView({model: this.model}).render().el);
    },

    /**Show popup inside doom view view
     * @memberOf DocumentRouter# */
    showPopUp: function (player) {
        $("#popup").empty().append(new PopUpView({model: this.model}).render(player).el);
        this.eventAgg.trigger('render:afterpopup', player);
    }
});
