/**
 * Created by Zoltan_Biro on 3/4/2015.
 */
"use strict";
var DoomView = Backbone.View.extend({

    tagName: 'div',
    id: 'doomview',
    className: 'doomview',

    template:Handlebars.templates['web/templates/doom.handlebars'],

    render: function () {
        var context = this.model.getTeamsAsObject();
        this.$el.append(this.template(context));
        return this;
    }
});

