/**
 * @jsx React.DOM
 */

var React = require('react');

var TitleComponent = React.createClass({
    render: function() {
        return <h1>{this.props.title}</h1>;
    }
});

module.exports = TitleComponent;