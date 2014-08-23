/**
 * @jsx React.DOM
 */

var React = require('react');

var MemoirComponent = React.createClass({
    componentWillMount: function() {
 
    },
    componentWillUnmount: function() {
 
    },
    render: function() {
        return (
            <div className="memoir_component">
                <div className="photo_container">
                    <img className="photo_title" src="/public/images/001.jpg" width="100%"/>
                </div>
                <div className="title_container"><h1 className="title">The Engagement</h1></div>
            </div>
        );
        // if (this.props.router.current === "foo") {
        //     return <FooComponent/>;
        // }
        // else if (this.props.router.current === "bar") {
        //     return <BarComponent/>;
        // }
        // else if (this.props.router.current === "profile") {

        //     var connect = document.querySelector(".connect");

        //     return <ProfileComponent profile={profile}/>;
        // }
        // else {
        //     return <div>index. <a href='/foo'>foo</a> <a href="/bar">bar</a></div>;
        // }

        // return <div/>;
    }
});

module.exports = MemoirComponent;