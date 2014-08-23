/**
 * @jsx React.DOM
 */

var Backbone = require('exoskeleton');
var React = require('react');
var Router = require('./router');

//// Components
// var InterfaceComponent = require('./components/interface_component');
var MemoirComponent = require('./components/memoir_component');

module.exports = App = function App() {
    console.log('-- app: App initialization --', this);
    console.log('-- app: creating new router');
    App.router = new Router();
    console.log('-- app: router=', App.router);

    // initialize all routes
    App.router.route("user/:userId", this.userRoute);
    App.router.route(":memrId", this.memrRoute);
    App.router.route("", "index", this.indexRoute);
    // App.router.route("foo", "foo", this.fooRoute);
    // App.router.route("bar", "bar", this.barRoute);
    // App.router.route("profile", "profile", this.profileRoute);

    Backbone.history.start({ pushState: true });

    if (Backbone.history && Backbone.history._wantsPushState) {
        document.getElementsByTagName('html')[0].addEventListener("click", function (evt) {
            if (evt.srcElement.tagName === 'A') {
                evt.stopPropagation();
                evt.preventDefault();
                Backbone.history.navigate(evt.srcElement.pathname, true);
            }
        });
    }

};

App.prototype.indexRoute = function() {
    App.router.current = 'index';
    console.log('route:', App.router.current);
};

App.prototype.memrRoute = function (memrId) {
    React.renderComponent(<MemoirComponent memrId= {memrId} />, document.getElementById('app_container'));
};

App.prototype.userRoute = function () {

};

// App.prototype.fooRoute = function() {
//     App.router.current = 'foo';
//     console.log('route:', App.router.current);
// };
// App.prototype.barRoute = function() {
//     App.router.current = 'bar';
//     console.log('route:', App.router.current);
// };
// App.prototype.profileRoute = function() {
//     App.router.current = 'profile';
//     console.log('route:', App.router.current);
// };

App.prototype.start = function() {
    console.log('-- inside App.start() --');
    // this.render();
};

App.prototype.render = function() {
    // console.log('-- app: render: App.router=', App.router);
    // // var router = App.router;
    // document.addEventListener("DOMContentLoaded", function() {
    //         React.renderComponent( <InterfaceComponent router = {
    //                 App.router
    //         }/>,
    //         document.getElementById('target')
    //     );    
    // });
};