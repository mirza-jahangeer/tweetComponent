import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import './index.css';

function Tweet({tweet}){
return(
    <div className="tweet">
        {/* <Avatar hash={tweet.gravatar}/>
        <div className="content">
            <Author author={tweet.author}/>
            <Time time={tweet.timestamp} />
            <Message text={tweet.message}/>
            
            <div className="buttons">
                <ReplyButton/>
                <RetweetButton count={tweet.retweets}/>
                <LikeButton count={tweet.likes}/>
                <MoreOptionsButton/>
            </div>
        </div> */}
        <ErrorBox>
            Something has gone wrong.
        </ErrorBox>
        <FirstChildOnly>
            <p>Some thing gone right</p>
            <p>Some thing gone sright</p>
            <p>Some thing gone tright</p>
        </FirstChildOnly>

    </div>
);
}

function ErrorBox({children}){
    return (
        <div>
            <i className="fa fa-exclamation triangle"/>
            {children}
        </div>
    );
}

function FirstChildOnly({children}){
    
 let items = React.Children.toArray(children);
 const first = items[items.length-1];
 return(
    <span>{first}</span>
 );
}
FirstChildOnly.propTypes = {
    children:PropTypes.node
}
function Avatar({hash}) {
    const url=`https://www.gravatar.com/avatar/${hash}`;
    return (
    <img
    src={url}
    className="avatar"
    alt="avatar" />
    );
}

function Message({text}){
    return(
        <div className="message">
           {text}
        </div>
    );
}

function Author({author}){
    const {name, handle} = author;
    return(
        <span className="author"> 
            <span className="name">{name}</span>
            <span className="handle">{handle}</span>
        </span>
    );
}

const Time = ({time}) => {
    const timeString = moment(time).fromNow();
    return(
    <span className="time"> {timeString}</span>
);
}
const ReplyButton = () => (
    
        <i className="fa fa-reply reply-button"/>
    
);
function Count({count}){
    if(count>0){
        return(
            <span className="retweet-count">
                {count}
            </span> );
    }
    else{
        return null;
    }
}


const RetweetButton = ({count}) => (
    <span className="retweet-button">
    <i className="fa fa-retweet tweet-button" />
      <Count count={count}/>
    </span>

);
const LikeButton = ({count}) =>(
    <span className="like-button">
    <i className="fa fa-heart like-button"/>
    {
        count>0 &&
        <span className="like-count">{count} </span>
    }
    </span>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
);

const testTweet = {
    message : "Something about cats.",
    gravatar : "xyz",
    author : {
    handle : "catperson",
    name : "I am Cat Person"
    },
    likes : 2,
    retweets : 0,
    timestamp : "2016-07-30 21:24:37"
};


ReactDOM.render(<Tweet/>, document.querySelector("#root"));