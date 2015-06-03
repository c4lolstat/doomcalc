"use strict";

/**
 * @author Zoltan_Biro
 * Created on 2/4/2015.
 */

/**@class PopUpView
 * @augments Backbone.View*/

 var PopUpView = Backbone.View.extend({
    /**@lends PopUpView.prototype*/

    tagName: 'div',
    id: 'popupview',
    className: 'popupview',

    template: Handlebars.templates['web/templates/popup.handlebars'],

    /** PopUp subview
     * @memberOf PopUpView#
     * @param {string} player - summoner name */
    renderPopup: function (player) {
        this.model.getMasteries(player);
        var context = {
            runes:this.model.getRunes(player),
            masteries: this.model.getMasteries(player)
        };
        var content = this.template(context);
        content = underi18n.template(content, doom.dictionary.get(doom.lang));
        this.$el.append(content);
        return this;
    },
    /** Render view
     * @memberOf PopUpiew#
     * @param {string} player - summoner name */
    render: function (player) {
       return this.renderPopup(player);
    }
});

