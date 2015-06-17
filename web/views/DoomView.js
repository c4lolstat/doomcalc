"use strict";

/**
 *  @author Zoltan_Biro
 * Created on 3/4/2015.
 */

/**@class DoomView
 * @augments Backbone.View*/

doom.views = doom.views || {};

(function () {
    doom.views.DoomView = Backbone.View.extend({
        /**@lends DoomView.prototype*/

        tagName: 'div',
        id: 'doomview',
        className: 'doomview',

        template: Handlebars.templates['web/templates/doom.handlebars'],
        header: Handlebars.templates['web/templates/header.handlebars'],
        popup: Handlebars.templates['web/templates/popup.handlebars'],

        initialize:function(){
            var self=this;
            doom.eventAgg.on('popup',function(player){
                $('#popup').show();
                var player = player.trim().replace(/\s/g, '').toLowerCase();
                if (doom.lastPlayer.length != 0) $('#' + doom.lastPlayer).css('color', 'black');
                $('#' + player).css('color', 'red');
                doom.lastPlayer = player;
                self.renderPopup(player);
            });

            doom.eventAgg.on('popup:hide', function () {
                $('#popup').hide();
                $('#' + doom.lastPlayer).css('color', 'black');
            });

            doom.eventAgg.on('doom:again', function () {
                doom.inst.router.navigate('inputs', {trigger: true});
            });

            this.model.on('change', this.render, this);
        },

        close:function(){
            this.remove();
            this.undelegateEvents();
        },

        /** PopUp subview
         * @memberOf DoomView#
         * @param {string} player - summoner name */
        renderPopup: function (player) {
            var context = {
                runes: this.model.getRunes(player),
                masteries: this.model.getMasteries(player)
            };
            var content = this.popup(context);
            content = underi18n.template(content, doom.dictionary.get(doom.lang));
            this.$('#popup').html(content);
            return this;
        },

        /** Header subview
         * @memberOf DoomView# */
        renderHeader: function () {
            var content = this.header();
            content = (underi18n.template(content, doom.dictionary.get(doom.lang)));
            this.$el.empty().append(content);
            return this;
        },

        /** Doom subview
         * @memberOf DoomView# */
        renderDoom: function () {
            var context = this.model.getTeamsAsObject();
            var content = this.template(context);
            content = underi18n.template(content, doom.dictionary.get(doom.lang));
            this.$el.append(content);
            var color = doom.colorize.getColor(doom.inst.doomModel.get('allyDoomPercentage'));
            this.$('#judge').css('background', color);
            this.$('#loading').hide();
            this.$('#content').show();
            this.$('#content').append(doom.exporter.export(['#teams','#players']));
            return this;
        },

        /** Compose view and render
         * @memberOf DoomView# */
        render: function () {
            return this.renderHeader()
                .renderDoom();
        }
    });
})();
