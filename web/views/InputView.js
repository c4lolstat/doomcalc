"use strict";

/**
 * @author Zoltan_Biro
 * Created on 2/4/2015.
 */

/**@class InputView
 * @augments Backbone.View*/

var InputView = Backbone.View.extend({
    /**@lends InputView.prototype*/

    tagName: 'div',
    id: 'inputview',
    className: 'inputview',

    template: Handlebars.templates['web/templates/input.handlebars'],
    header: Handlebars.templates['web/templates/header.handlebars'],

    /** Header subview
     * @memberOf InputView# */
    renderHeader: function () {
        var content = this.header();
        content = (underi18n.template(content, doom.dictionary.get(doom.lang)));
        this.$el.append(content);
        return this;
    },
    /** Input subview
     * @memberOf InputView# */
    renderInput: function () {
        var context = {
            prename: this.model.get('name'),
            preregion: this.model.get('region'),
            inputerror: this.model.get('inputError')
        };
        var content = this.template(context);
        content = underi18n.template(content, doom.dictionary.get(doom.lang));
        this.$el.append(content);
        return this;
    },
    /** Compose view and render
     * @memberOf InputView# */
    render: function () {
        return this.renderHeader()
            .renderInput();
    }
});


