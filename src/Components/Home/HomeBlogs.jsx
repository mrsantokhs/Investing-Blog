import React from "react";
import "./Home.css";
import testImg from "../../Assets/testimg.png";

const HomeBlogs = () => {
  return (
    <div className="homeblogs-main   ">
      <p className="text-danger text-center">Please Login to start Reading</p>
      <div className="home-leftside-blogs  ">
        <div className="home-blog-card d-flex mx-auto">
          <div>
            <h1>Startup leaders need to learn how to keep company steady</h1>
            <p className="home-blog-desc">
              Description goes here Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis, illo!
            </p>
            <p className="read-time ">1 min read</p>
          </div>
          <div className="home-blog-img">
            <img src={testImg} width={200} />
          </div>
        </div>

        <div className="home-blog-card d-flex mx-auto">
          <div>
            <h1>Startup leaders need to learn how to keep company steady</h1>
            <p className="home-blog-desc">
              Description goes here Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis, illo!
            </p>
            <p className="read-time ">1 min read</p>
          </div>
          <div className="home-blog-img">
            <img src={testImg} width={200} />
          </div>
        </div>

        <div className="home-blog-card d-flex mx-auto">
          <div>
            <h1>Startup leaders need to learn how to keep company steady</h1>
            <p className="home-blog-desc">
              Description goes here Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis, illo!
            </p>
            <p className="read-time ">1 min read</p>
          </div>
          <div className="home-blog-img">
            <img src={testImg} width={200} />
          </div>
        </div>
      </div>
      {/*} <div className="home-rightside-blogs ">
        <div className="home-blog-card d-flex mx-auto">
          <h1>fgdgfdg</h1>
          <img />
        </div>
  </div> */}
    </div>
  );
};
export default HomeBlogs;
