
    define(function(require) {
        var Handlebars = require('handlebars');

        return function() {
            // Templates
            require('templates/single');
            require('templates/single_project');
            require('templates/home');
            require('templates/projects');

            // Partials
            require('templates/partials/attachment');
            require('templates/partials/excerpt');

            Handlebars.registerPartial({
                'attachment': Handlebars.templates['attachment.mustache'],
                'excerpt': Handlebars.templates['excerpt.mustache']
            });

        };

    });