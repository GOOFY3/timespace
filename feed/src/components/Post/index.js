import React, { Component } from "react";
import "./Post.css"

class Post extends Component {
      render() {
        return(
          <div>
        <div className="Post" ref="Post">
            <header>
              <div className="Post-user">
                <div className="Post-user-avatar">
                  <img src={require('../../image.jpg')} alt="Mundy" />
                </div>
                <div className="Post-user-nickname">
                  <span>Aquib</span>
                </div>
              </div>
            </header>
            <div className="Post-image">
              <div className="Post-image-bg">
                <img alt="Sid" src={require('../../image.jpg')} />
              </div>
            </div>
            <div className="Post-caption">
              <strong>@aquib</strong> says: First Try!!!
            </div>
          </div>
          <div className="Post" ref="Post">
              <header>
                <div className="Post-user">
                  <div className="Post-user-avatar">
                    <img src={require('../../image.jpg')} alt="Mundy" />
                  </div>
                  <div className="Post-user-nickname">
                    <span>Aquib</span>
                  </div>
                </div>
              </header>
              <div className="Post-image">
                <div className="Post-image-bg">
                  <img alt="Sid" src={require('../../img2.jpg')} />
                </div>
              </div>
              <div className="Post-caption">
                <strong>@aquib</strong> says: Second Try!!!
              </div>
            </div>
        </div>
        );
        }
    }
    export default Post;
