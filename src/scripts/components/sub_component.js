/**
 * @jsx React.DOM
 */

var React = require('react');

var SubComponent = React.createClass({
    render: function() {
        return (
            <div className='sub'>
                This is the sub component!
            </div>
        );
    }
});

module.exports = SubComponent;