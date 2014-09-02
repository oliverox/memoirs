/**
 * @jsx React.DOM
 */

var React = require('react');

var ContentComponent = React.createClass({
    render: function() {
        var classNames = "content_component" + ((this.props.position === -1) ? " blur" : "");
        return (
            <div className={classNames}>
                <img src={this.props.imgUrl} />
            </div>
        );
    }
});

module.exports = ContentComponent;
