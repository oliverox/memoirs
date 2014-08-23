/**
 * @jsx React.DOM
 */

var React = require('react');

var FooComponent = React.createClass({
    render: function() {
        return <div>This is foo. Goto <a href='/bar'>bar</a></div>;
    }
});

module.exports = FooComponent;