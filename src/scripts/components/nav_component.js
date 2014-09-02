/**
 * @jsx React.DOM
 */

var React = require('react');

var NavComponent = React.createClass({

    leftArrowClick: function () {
        console.log('nav_component#leftArrowClick()', this.props.length);
        if (this.props.position > -1) {
            this.props.onPositionChange(this.props.position - 1);
        }
    },


    rightArrowClick: function () {
        console.log('nav_component#rightArrowClick()', this.props.length);
        if (this.props.position < this.props.length) {
            this.props.onPositionChange(this.props.position + 1);
        }
    },

    render: function() {
        var nav_buttons = [];
        if (this.props.position === -1) {
            nav_buttons.push(<div key="left_arrow" className="left_arrow hidden" onTouchEnd={this.leftArrowClick}>left</div>);
        }
        else {
            nav_buttons.push(<div key="left_arrow" className="left_arrow" onTouchEnd={this.leftArrowClick}>left</div>);
        }
        if (this.props.position === this.props.length - 1) {
            nav_buttons.push(<div key="right_arrow" className="right_arrow hidden" onTouchEnd={this.rightArrowClick}>right</div>);
        }
        else {
            nav_buttons.push(<div key="right_arrow" className="right_arrow" onTouchEnd={this.rightArrowClick}>right</div>);            
        }
        return (
            <div className="nav_component">
                {nav_buttons}
            </div>
        );
    }
});

module.exports = NavComponent;