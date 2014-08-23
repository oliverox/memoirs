var Backbone = require('exoskeleton');

var Profile = Backbone.Model.extend({
    defaults: {
        name: null,
        gender: null,
        picture: null
    }
});

module.exports = Profile;