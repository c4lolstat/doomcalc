/**
 * Created by Zoltan_Biro on 3/23/2015.
 */
"use strict";
var ErrorView = Backbone.View.extend({

    tagName: 'div',
    id: 'errorview',
    className: 'errorview',

    template: Handlebars.templates['web/templates/error.handlebars'],
    header: Handlebars.templates['web/templates/header.handlebars'],

    renderHeader: function () {
        var content = this.header();
        content = (underi18n.template(content, dictionary.get(lang)));
        this.$el.append(content);
        return this;
    },

    renderError: function () {
        var content = this.template();
        content = (underi18n.template(content, dictionary.get(lang)));
        this.$el.append(content);
    },

    render: function () {
        this.renderHeader().renderError();
        return this;
    }
});