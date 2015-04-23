module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        handlebars: {
            options: {
                namespace: 'Handlebars.templates'
            },
            all: {
                files: {
                    "web/compiled/doom.tpl.js": "web/templates/doom.handlebars",
                    "web/compiled/input.tpl.js": "web/templates/input.handlebars",
                    "web/compiled/error.tpl.js": "web/templates/error.handlebars"
                }
            }
        },
        bowercopy: {
            options:{
                runBower:true,
                srcPrefix: 'bower_components'
            },
            resources: {
                options: {
                    destPrefix: 'web/resources'
                },
                files: {
                    'backbone.js': 'backbone/backbone.js',
                    'handlebars.js': 'handlebars/handlebars.js',
                    'jquery.js': 'jquery/jquery.js',
                    'jquery.cookie.js': 'jquery-cookie/jquery.cookie.js',
                    'underscore.js': 'underscore/underscore.js'
                }
            },
            tests: {
                options: {
                    destPrefix: 'web/test/jasmine'
                },
                files: {
                    'jasmine.css':'jasmine/lib/jasmine-core/jasmine.css',
                    'jasmine.js':'jasmine/lib/jasmine-core/jasmine.js',
                    'jasmine-html.js':'jasmine/lib/jasmine-core/jasmine-html.js',
                    'boot.js':'jasmine/lib/jasmine-core/boot.js'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-bowercopy');

    grunt.registerTask('precompile', ['handlebars']);
    grunt.registerTask('update', ['bowercopy']);
};