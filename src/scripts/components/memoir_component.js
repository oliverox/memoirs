/**
 * @jsx React.DOM
 */

var React = require('react');

// components
var ProgressComponent = require('./progress_component');
var TitleComponent = require('./title_component');
var NavComponent = require('./nav_component');
var ContentComponent = require('./content_component');

var MemoirComponent = React.createClass({
    getInitialState: function () {
        return {
            position: -1
        }
    },

    handlePositionChange: function (position) {
        console.log('memoir_component#handlePositionChange', position);
        this.setState({
            position: position
        });
    },

    render: function() {
        var imgUrl;
        var story;
        if (this.state.position === -1) {
            imgUrl = this.props.model.get('items')[0].imgUrl;
            story = this.props.model.get('items')[0].story;
        }
        else {
            imgUrl = this.props.model.get('items')[this.state.position].imgUrl;
            story = this.props.model.get('items')[this.state.position].story;
        }
        
        return (            
            <div className='memoir_component'>
                <ContentComponent imgUrl={imgUrl} story={story} position={this.state.position} />
                <ProgressComponent length={this.props.model.get('items').length} position={this.state.position} />
                <TitleComponent title={this.props.model.get('title')} position={this.state.position} />
                <NavComponent position={this.state.position} length={this.props.model.get('items').length} onPositionChange={this.handlePositionChange} />
            </div>
        );
    }
});

module.exports = MemoirComponent;