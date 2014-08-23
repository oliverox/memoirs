/**
 * @jsx React.DOM
 */

var React = require('react');

var ProfileComponent = React.createClass({
    componentWillMount: function() {
        this.props.profile.on("change", (function() {
            this.forceUpdate();
        }.bind(this)));
    },
    componentWillUnmount: function() {
        this.props.profile.off("change");
    },
    render: function() {
        return (
            <div className="card">
              <div className="picture">
                <img src={this.props.profile.get("picture")} />
              </div>
              <div className="name">
                {this.props.profile.get("name")}
                <small>
                  ({this.props.profile.get("gender")})
                </small>
              </div>
            </div>
          );
    }
});

module.exports = ProfileComponent;