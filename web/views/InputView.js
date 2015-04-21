/**
 * Created by Zoltan_Biro on 2/4/2015.
 */
"use strict";
var InputView = Backbone.View.extend({

    tagName: 'div',
    id: 'inputview',
    className: 'inputview',

    template:Handlebars.templates.input,

    render: function () {
        var context = {prename:this.model.get('name'),preregion:this.model.get('region'),inputerror:this.model.get('inputError')};
        this.$el.append(this.template(context));
        return this;
    }
});


