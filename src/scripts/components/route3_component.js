/**
 * @jsx React.DOM
 */

var React = require('react');

var Route3Component = React.createClass({
    render: function() {
        return <div>This is Route 3. Goto <a href='/route1'>Route 1</a> or <a href='/route2'>Route 2</a></div>;
    }
});

module.exports = Route3Component;