import React from "react";
import "./Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Post() {
  return (
    <>
      <div className="post">
        <div className="postwrapper">
          <div className="posttop">
            <div className="posttopleft">
              <img
                src="/assets/prince.jpg"
                alt=""
                className="posttopleftimage"
              />
              <span className="postusername">Prince Raj verma</span>
              <span className="postdate">5 mins ago</span>
            </div>
            <div className="posttopright">
              <MoreVertIcon className="posttoprightverticaldots" />
            </div>
          </div>
          <div className="postcenter">
            <span className="postcentertext">Hey! It's my first post</span>
            <img src="/assets/p1.jpg" alt="" className="postcenterimage" />
          </div>
          <div className="postbottom">
            <div className="postbottomleft">
              <ThumbUpIcon className="postbottomherticon" />
              <FavoriteIcon className="postbottomherticon" />
              <span className="peoplelikecounter">32 People liked it.</span>
            </div>
            <div className="postbottomright">
              <span className="postbottomcomment">32 Comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
