/**
 * Created by Zoltan_Biro on 2/4/2015.
 */
"use strict";
var InputView = Backbone.View.extend({

    tagName: 'div',
    id: 'inputview',
    className: 'inputview',

    template: Handlebars.templates['web/templates/input.handlebars'],
    header: Handlebars.templates['web/templates/header.handlebars'],

    renderHeader: function () {
        var content = this.header();
        content = (underi18n.template(content, dictionary.get(lang)));
        this.$el.append(content);
        return this;
    },

    renderInput: function () {
        var context = {
            prename: this.model.get('name'),
            preregion: this.model.get('region'),
            inputerror: this.model.get('inputError')
        };
        var content = this.template(context);
        content = underi18n.template(content, dictionary.get(lang));
        this.$el.append(content);
        return this;
    },

    render: function () {
        this.renderHeader().renderInput();
        return this;
    }
});


