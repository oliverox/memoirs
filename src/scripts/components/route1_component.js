/**
 * @jsx React.DOM
 */

var React = require('react');

var Route1Component = React.createClass({
    render: function() {
        return <div>This is Route 1. Goto <a href='/route2'>Route 2</a> or <a href='/route3'>Route 3</a></div>;
    }
});

module.exports = Route1Component;