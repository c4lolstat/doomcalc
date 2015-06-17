"use strict";

/**
 * @author Zoltan_Biro
 * Created on 2/4/2015.
 */

/**@class InputView
 * @augments Backbone.View*/

doom.views = doom.views || {};

(function () {
    doom.views.InputView = Backbone.View.extend({
        /**@lends InputView.prototype*/

        tagName: 'div',
        id: 'inputview',
        className: 'inputview',

        template: Handlebars.templates['web/templates/input.handlebars'],
        header: Handlebars.templates['web/templates/header.handlebars'],

        events:{
         'click button':'inputEvent'
        },

        close:function(){
            this.remove();
            this.undelegateEvents();
        },

        /** handle click on MAtch me with retards
         * @memberOf InputView# */
        inputEvent: function () {
            var name =$('#inputview #summonerName').val().trim().replace(/\s/g, '').toLowerCase();
            var region =$('#inputview #region').val().toLowerCase().trim();
            var remember =$('#inputview #rememberme').is(':checked') ;

            if (name.length > 0 && region.length > 0 && name.indexOf('summonername') == -1 && region.indexOf('region') == -1) {
                doom.name=name;
                doom.region=region;
                if (remember) {
                    $.cookie('name', name, {expires: 365});
                    $.cookie('region', region, {expires: 365});
                }
                doom.inst.router.navigate('doom',{trigger:true});
            } else {
                this.renderInput(true);
            }
        },

        /** Header subview
         * @memberOf InputView# */
        renderHeader: function () {
            var content = this.header();
            content = (underi18n.template(content, doom.dictionary.get(doom.lang)));
            this.$el.append(content);
            return this;
        },
        /** Input subview
         * @param inputerror indicate it were an error in the inputs
         * @memberOf InputView# */
        renderInput: function (inputerror) {
            var context = {
                prename: $.cookie().name || 'Summoner name',
                preregion: $.cookie().region || 'Region',
                inputerror: inputerror
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
                .renderInput(false);
        }
    });
})();