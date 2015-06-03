"use strict";

/**
 *  @author Zoltan_Biro
 * Created on 3/4/2015.
 */

/**@class DoomView
 * @augments Backbone.View*/

var DoomView = Backbone.View.extend({
    /**@lends DoomView.prototype*/

    tagName: 'div',
    id: 'doomview',
    className: 'doomview',

    template: Handlebars.templates['web/templates/doom.handlebars'],
    header: Handlebars.templates['web/templates/header.handlebars'],

    /** Header subview
     * @memberOf DoomView# */
    renderHeader: function () {
        var content = this.header();
        content = (underi18n.template(content, doom.dictionary.get(doom.lang)));
        this.$el.append(content);
        return this;
    },

    /** Doom subview
     * @memberOf DoomView# */
    renderDoom: function () {
        var context = this.model.getTeamsAsObject();
        var content = this.template(context);
        content = underi18n.template(content, doom.dictionary.get(doom.lang));
        this.$el.append(content);
        return this;
    },

    /** Compose view and render
     * @memberOf DoomView# */
    render: function () {
        return this.renderHeader()
            .renderDoom();
    }
});

