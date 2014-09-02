/**
 * @jsx React.DOM
 */

var React = require('react');

var HomeComponent = React.createClass({
    render: function() {
        return (
            <div>This is Home. Goto <a href='/route1'>Route 1</a> or <a href='/route2'>Route 2</a> or <a href='/route3'>Route 3</a></div>
        );
    }
});

module.exports = HomeComponent;
