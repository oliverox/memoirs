/**
 * @jsx React.DOM
 */

var React = require('react');

var BarComponent = React.createClass({
    render: function() {
        return <div>This is: bar. Goto <a href='foo'>foo</a></div>;
    }
});

module.exports = BarComponent;