"use strict";

/**
 * @author Zoltan_Biro
 * Created on 3/23/2015.
 */

/**@class ErrorView
 * @augments Backbone.View*/

var ErrorView = Backbone.View.extend({
    /**@lends ErrorView.prototype*/

    tagName: 'div',
    id: 'errorview',
    className: 'errorview',

    template: Handlebars.templates['web/templates/error.handlebars'],
    header: Handlebars.templates['web/templates/header.handlebars'],

    /** Header subview
     * @memberOf ErrorView# */
    renderHeader: function () {
        var content = this.header();
        content = (underi18n.template(content, doom.dictionary.get(doom.lang)));
        this.$el.append(content);
        return this;
    },

    /** Error subview
     * @memberOf ErrorView# */
    renderError: function () {
        var content = this.template();
        content = (underi18n.template(content, doom.dictionary.get(doom.lang)));
        this.$el.append(content);
        return this;
    },
    /** Compose view and render
     * @memberOf ErrorView# */
    render: function () {
        return this.renderHeader()
            .renderError();
    }
});