/**
 * @jsx React.DOM
 */

var React = require('react');

var TitleComponent = React.createClass({
    render: function() {
        var classNames = "title_component" + ((this.props.position === -1) ? '' : ' hidden');
        return (
            <div className={classNames}><h1>{this.props.title}</h1></div>
        );
    }
});

module.exports = TitleComponent;
