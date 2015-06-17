"use strict";

/**
 *  @author Zoltan_Biro
 *  Created on 3/11/2015.
 */

/**@class DocumentRouter
 * @augments Backbone.Router*/

doom.router = doom.router || {};
(function () {
    doom.router.DocumentRouter = Backbone.Router.extend({
        /**@lends DocumentRouter.prototype*/

        /**Define available routes
         * @memberOf DocumentRouter#*/
        routes: {
            'inputs': 'inputs',
            'doom': 'doom',
            'error': 'error'
        },


        /** Show input view
         * @memberOf DocumentRouter# */
        inputs: function () {
            doom.viewHandler.show(new doom.views.InputView());
        },


        /** Show doom view
         * @memberOf DocumentRouter# */
        doom: function () {
            doom.inst.doomModel = new doom.models.DoomModel();
            setTimeout(doom.watchDog, doom.watchDogTime);
            doom.viewHandler.show(new doom.views.DoomView({model: doom.inst.doomModel}));
            $('#loading').show();
            $('#content').hide();
            doom.inst.doomModel.getSummonerId();
        },

        /** Show general error view
         * @memberOf DocumentRouter# */
        error: function () {
            doom.viewHandler.show(new doom.views.ErrorView());
        }
    });
})();