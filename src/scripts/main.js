var Application = require('./application');
var routes = require('./routes');

var app = new Application({
    
    title: "Memoirs App",

    routes: routes
});

console.log('app.router=', app.router);
