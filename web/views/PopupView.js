/**
 * Created by Zoltan_Biro on 2/4/2015.
 */
"use strict";
var PopUpView = Backbone.View.extend({

    tagName: 'div',
    id: 'popupview',
    className: 'popupview',

    template: Handlebars.templates['web/templates/popup.handlebars'],


    renderPopup: function (player) {
        this.model.getMasteries(player);
        var context = {
            runes:this.model.getRunes(player),
            masteries: this.model.getMasteries(player)
        };
        var content = this.template(context);
        content = underi18n.template(content, dictionary.get(lang));
        this.$el.append(content);
        return this;
    },

    render: function (player) {
        this.renderPopup(player);
        return this;
    }
});

