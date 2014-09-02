/**
 * @jsx React.DOM
 */

var Backbone = require('exoskeleton');
var React = require('react');

// components
var AppComponent = require('./components/app_component');
var FourOhFourComponent = require('./components/404_component');

var Application = (function() {

    function Application(options) {
        this.initialize(options);
    }

    Application.prototype.title = '';

    Application.prototype.router = null;

    Application.prototype.started = false;

    Application.prototype.initialize = function (options) {
        if (options == null) {
            options = {};
        }
        if (this.started) {
            throw new Error('Application#initialize: App was already started');
        }
        this.title = options.title || "";
        this.initRouter(options.routes);
        this.appContainerEl = document.getElementById('app_container');

        // initialize touch events on React components
        React.initializeTouchEvents(true);

        return this.start();
    };

    Application.prototype.initRouter = function(routes) {
        console.log('initializing router with routes:', routes);
        this.router = new Backbone.Router({
            routes: routes
        });
        Object.keys(routes).forEach(function (thisRoute) {
            if (typeof routes[thisRoute] === 'string') {
                console.log('processing route:', routes[thisRoute]);
                this.router.route(thisRoute, routes[thisRoute], (this[routes[thisRoute]]).bind(this));
            }
            else {
                throw new Error('Application#initRoute: Please define your routes definition as strings inside routes.js');
            }
        }, this);

        document.addEventListener("DOMContentLoaded", function (evt) {
            console.log("DOM fully loaded and parsed. Now launch the router...");
            Backbone.history.start({
                pushState: true
            });
            if (Backbone.history && Backbone.history._wantsPushState) {
                document.getElementsByTagName('html')[0].addEventListener("click", function(evt) {
                    if (evt.srcElement.tagName === 'A') {
                        evt.stopPropagation();
                        evt.preventDefault();
                        Backbone.history.navigate(evt.srcElement.pathname, true);
                    }
                });
            }
        });
    };

    Application.prototype.getAppContainerElement = function () {
        return this.appContainerEl;
    };

    Application.prototype.start = function() {
        console.log('Application started...');
        this.started = true;
    };

    Application.prototype.renderMemoirRoute = function (args) {
        console.log('>>>> RenderMemoir Route', args);
        var route = 'memoir';
        var memoirId = args.split('?')[0];
        if (memoirId === "") {
            React.renderComponent(<FourOhFourComponent />, this.getAppContainerElement());
        }
        else {
            React.renderComponent(<AppComponent route={route} memoirId={memoirId}/>, this.getAppContainerElement());
        }
    };


    Application.prototype.home = function () {
        console.log('>>>> HOME ROUTE');
        var route = 'home';
        React.renderComponent(<AppComponent route={route}/>, this.getAppContainerElement());
    };

    /*
    Application.prototype.testRoute1 = function () {
        console.log('>>>> TEST ROUTE 1');
        var route = 'route1';
        React.renderComponent(<AppComponent route={route}/>, this.getAppContainerElement());
    };

    Application.prototype.testRoute2 = function () {
        console.log('>>>> TEST ROUTE 2');
        var route = 'route2';
        React.renderComponent(<AppComponent route={route}/>, this.getAppContainerElement());
    }

    Application.prototype.testRoute3 = function () {
        console.log('>>>> TEST ROUTE 3');
        var route = 'route3';
        React.renderComponent(<AppComponent route={route}/>, this.getAppContainerElement());
    }
    */


    return Application;
})();

module.exports = Application;
