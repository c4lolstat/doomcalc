/**
 * Created by Zoltan_Biro on 3/23/2015.
 */
"use strict";
var ErrorView = Backbone.View.extend({

    tagName: 'div',
    id: 'errorview',
    className: 'errorview',

    template:Handlebars.templates['web/templates/error.handlebars'],

    render: function () {
        this.$el.append(this.template());
        return this;
    }
});