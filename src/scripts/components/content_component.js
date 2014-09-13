/**
 * @jsx React.DOM
 */

var React = require('react');
var Velocity = require('velocity-animate');

var ContentComponent = React.createClass({
    componentDidMount: function () {
        console.log('>>>> CONTENT COMPONENT DID MOUNT.');
        var thisComponent = this;
        this.getDOMNode().children[0].onload = function () {
            console.log('IMAGE HAS LOADED!');
            thisComponent.getImageDimensions(this);
            thisComponent.startAnimation();
        };
    },

    getImageDimensions: function (imgEl) {
        console.debug('image dimensions:', imgEl.clientWidth, imgEl.clientHeight);
    },

    startAnimation: function () {
        var imgEl = this.getDOMNode().children[0];
        Velocity(imgEl, "stop", true);
        var diffWidth = imgEl.clientWidth - window.innerWidth;
        Velocity(imgEl, {
            translateX: [-diffWidth, 0]
        }, {
            duration: 20000,
            complete: function () {
                Velocity(imgEl, "reverse");
            }
        });
    },

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
