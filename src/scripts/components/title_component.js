/**
 * @jsx React.DOM
 */

var React = require('react');

var TitleComponent = React.createClass({
    render: function() {
        var classNames = "title_component" + ((this.props.position === -1) ? '' : ' hidden'); 
        console.log('>>>>> CLASSNAMES=', classNames);
        return (
            <h1 className={classNames}>{this.props.title}</h1>
        );
    }
});

module.exports = TitleComponent;