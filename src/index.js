import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet(){
return(
    <div className="tweet">
        <Avatar/>
        <div className="content">
            <Author/>
            <Message/>
            <Time/>
            <div className="buttons">
                <ReplyButton/>
                <RetweetButton/>
                <LikeButton/>
                <MoreOptionsButton/>
            </div>
        </div>
    </div>
);
}
function Avatar() {
    return (
    <img
    src="https://www.gravatar.com/avatar/nothing"
    className="avatar"
    alt="avatar" />
    );
}

function Message(){
    return(
        <div className="message">
            This is less than 40 character
        </div>
    );
}

function Author(){
    return(
        <span className="author"> 
            <span className="name">Mirza Jahangeer</span>
            <span className="handle">@100daysofCode</span>
        </span>
    );
}

const Time = () => (
    <span className="time">3h ago</span>
);

const ReplyButton = () => (
    
        <i className="fa fa-reply reply-button"/>
    
);

const RetweetButton = () =>(
    <i className="fa fa-retweet tweet-button" />
);

const LikeButton = () =>(
    <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
    );
ReactDOM.render(<Tweet/>, document.querySelector("#root"));