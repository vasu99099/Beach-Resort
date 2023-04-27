import React from "react";
import  defaultBcg from '../Images/defaultBcg.jpeg'
import './Banner.css';
const Banner = (props) => {

  const { image, title, subtitle } = props;

  return (
    
    <div className="Banner position-relative text-center  " >
        <img src={image?image:defaultBcg} className="bannerImage" alt={title}  />
        <div className="position-absolute  hero">
          <h1 className="text-center fw-bold  pb-1 title ">{title}</h1>
          <div className="line-title mb-5"></div>
          <p className=" mb-5 subtitle">{subtitle}</p>
          {props.children}
        </div>
    </div>
  );
};

export default Banner;
