import React from "react";
import "./Rightbar.css";

function Rightbar() {
  return (
    <>
      <div className="rightbar">
        <div className="rightbarwrapper">
          <div className="birthdaycontainer">
            <img src="assets/prince.jpg" alt="" className="birthdayimage" />
            <span className="birthdaytext">
              <b>Pince raj verma</b> and <b>3 others friends</b> have birthday
              today.
            </span>
          </div>
          <img src="assets/add.jpg" alt="" className="rightbarad"/>
          <h4 className="rightbartitle">Online Friends</h4>
          <ul className="rightbaronlinefriendlist">
            <li className="rightbaronlinefriends">
                <div className="rightbaronlineimagecontainer">
                    <img src="assets/prince.jpg" alt="" className="rightbaronlinefriendimage" />
                    <span className="rightbaronlinefriendbadge"></span>
                </div>
                <span className="rightbaronlinefriendtext">Prince Raj Verma</span>
            </li>
            <li className="rightbaronlinefriends">
                <div className="rightbaronlineimagecontainer">
                    <img src="assets/prince.jpg" alt="" className="rightbaronlinefriendimage" />
                    <span className="rightbaronlinefriendbadge"></span>
                </div>
                <span className="rightbaronlinefriendtext">Prince Raj Verma</span>
            </li>
            <li className="rightbaronlinefriends">
                <div className="rightbaronlineimagecontainer">
                    <img src="assets/prince.jpg" alt="" className="rightbaronlinefriendimage" />
                    <span className="rightbaronlinefriendbadge"></span>
                </div>
                <span className="rightbaronlinefriendtext">Prince Raj Verma</span>
            </li>
            <li className="rightbaronlinefriends">
                <div className="rightbaronlineimagecontainer">
                    <img src="assets/prince.jpg" alt="" className="rightbaronlinefriendimage" />
                    <span className="rightbaronlinefriendbadge"></span>
                </div>
                <span className="rightbaronlinefriendtext">Prince Raj Verma</span>
            </li>
            <li className="rightbaronlinefriends">
                <div className="rightbaronlineimagecontainer">
                    <img src="assets/prince.jpg" alt="" className="rightbaronlinefriendimage" />
                    <span className="rightbaronlinefriendbadge"></span>
                </div>
                <span className="rightbaronlinefriendtext">Prince Raj Verma</span>
            </li>
            <li className="rightbaronlinefriends">
                <div className="rightbaronlineimagecontainer">
                    <img src="assets/prince.jpg" alt="" className="rightbaronlinefriendimage" />
                    <span className="rightbaronlinefriendbadge"></span>
                </div>
                <span className="rightbaronlinefriendtext">Prince Raj Verma</span>
            </li>
            <li className="rightbaronlinefriends">
                <div className="rightbaronlineimagecontainer">
                    <img src="assets/prince.jpg" alt="" className="rightbaronlinefriendimage" />
                    <span className="rightbaronlinefriendbadge"></span>
                </div>
                <span className="rightbaronlinefriendtext">Prince Raj Verma</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Rightbar;
