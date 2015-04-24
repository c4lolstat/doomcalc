/**
 * Created by Zoltan_Biro on 3/4/2015.
 */
"use strict";
var DoomView = Backbone.View.extend({

    tagName: 'div',
    id: 'doomview',
    className: 'doomview',

    template: Handlebars.templates['web/templates/doom.handlebars'],
    header: Handlebars.templates['web/templates/header.handlebars'],

    renderHeader: function () {
        var content = this.header();
        content = (underi18n.template(content, dictionary.get(lang)));
        this.$el.append(content);
        return this;
    },

    renderDoom: function () {
        var context = this.model.getTeamsAsObject();
        var content = this.template(context);
        content = underi18n.template(content, dictionary.get(lang));
        this.$el.append(content);
    },

    render: function () {
        this.renderHeader().renderDoom();
        return this;
    }
});

