var Chaplin = require('chaplin');

var HelloWorldModel = Chaplin.Model.extend({
    defaults: {
        message:'Hello My WORLD!'
    },
    initialize: function (attributes, options) {
        console.debug('HelloWorld#initialize');
    }
});

module.exports = HelloWorldModel;