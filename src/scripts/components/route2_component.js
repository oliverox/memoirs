/**
 * @jsx React.DOM
 */

var React = require('react');

var Route2Component = React.createClass({
    render: function() {
        return <div>This is Route 2. Goto <a href='/route1'>Route 1</a> or <a href='/route3'>Route 3</a></div>;
    }
});

module.exports = Route2Component;