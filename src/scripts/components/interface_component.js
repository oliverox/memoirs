/**
 * @jsx React.DOM
 */

var React = require('react');

var FooComponent = require('./foo_component');
var BarComponent = require('./bar_component');
var ProfileComponent = require('./profile_component');

var Profile = require('../models/profile_model');

var profile = new Profile();

var InterfaceComponent = React.createClass({
    componentWillMount: function() {
        this.callback = (function () {
            this.forceUpdate();
        }).bind(this);

        var self = this;
        document.getElementById('connect').addEventListener("click", function() {
            self.login();
        });

        this.props.router.on("route", this.callback);
    },
    componentWillUnmount: function() {
        this.props.router.off("route", this.callback);
    },

    fetchProfile: function() {  
        FB.api("/me", "get", {}, function(result) {
          profile.set("name", result.name);
          profile.set("gender", result.gender);
        });
  
        var params = "?redirect=false&width=200&height=200";
  
        FB.api(
          "/me/picture" + params,
          "get",
          {},
          function(result) {
            profile.set("picture", result.data.url);
          }
        );
      },
  
    login: function() {
        var self = this;
        FB.login(function() {
          self.fetchProfile();
        });
    },

    render: function() {
        console.log('this.props.router.current=', this.props.router.current);
        if (this.props.router.current === "foo") {
            return <FooComponent/>;
        }
        else if (this.props.router.current === "bar") {
            return <BarComponent/>;
        }
        else if (this.props.router.current === "profile") {

            var connect = document.querySelector(".connect");

            return <ProfileComponent profile={profile}/>;
        }
        else {
            return <div>index. <a href='/foo'>foo</a> <a href="/bar">bar</a></div>;
        }

        return <div/>;
    }
});

module.exports = InterfaceComponent;