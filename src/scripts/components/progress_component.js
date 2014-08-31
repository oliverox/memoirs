/**
 * @jsx React.DOM
 */

var React = require('react');

var ProgressComponent = React.createClass({
    render: function() {
        var circles = [];
        for (var i=-1; i<this.props.length; i++) {
            if (this.props.position === i) {
                circles.push(<div key={i} className="progress_circle full"></div>);
            }
            else {
                circles.push(<div key={i} className="progress_circle"></div>);
            }
        }
        return (
            <div className="progress_component">
                {circles}
            </div>
        );
    }
});

module.exports = ProgressComponent;