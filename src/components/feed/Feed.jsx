import React from "react";
import Post from "../post/Post";
import Sharefeed from "../sharefeed/Sharefeed";
import './Feed.css';

function Feed(){
    return(
        <>
            <div className="feedbar">
                <div className="feedwrapper">
                    <Sharefeed />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </>
    );
};



export default Feed;