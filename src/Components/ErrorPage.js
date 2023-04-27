import React from "react";
import Error404 from '../Images/gif/404-drib23.gif'
const ErrorPage = () => {
  return (
    <div className="text-center mt-5 bg-seondary">
      
      <img src={Error404} className="p-5" style={{maxWidth:'100vw'}} alt="Error images"/>
      <h1 className="mx-auto">404 Error</h1>
      <p className="fs-5">Might be you entered something Wrong</p>
    </div>
  );
};

export default ErrorPage;
