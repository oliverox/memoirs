/**
 * @jsx React.DOM
 */

var React = require('react');
var Backbone = require('exoskeleton');

// components
var MemoirComponent = require('./memoir_component');

var AppComponent = React.createClass({

    fetchModel: function () {
        return new Backbone.Model({
            title: "The Engagement",
            items: [{
                imgUrl: "/public/images/001.jpg",
                story: ""
            },{
                imgUrl: "/public/images/002.jpg",
                story: ""
            },{
                imgUrl: "/public/images/003.jpg",
                story: ""
            },{
                imgUrl: "/public/images/004.jpg",
                story: ""
            },{
                imgUrl: "/public/images/005.jpg",
                story: ""
            }]
        });
    },

    render: function() {
        var model = this.fetchModel();
        return <MemoirComponent memoirId={this.props.memoirId} model={model} />;
    }
});

module.exports = AppComponent;