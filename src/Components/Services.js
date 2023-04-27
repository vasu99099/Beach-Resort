import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
    ],
  };
  return (
    <section className="services text-center p-5">
      <h1 className="mx-auto p-4">Services</h1>

      <div className="row mx-auto justify-content-evenly pt-5 pb-2 ps-0">
        {state.services.map((item, index) => {
          return (
            <div
              key={index}
              className="service col-12 col-lg-6 col-xl-2 text-center"
            >
              <div className="card-services">
                <div className="icon mb-5">{item.icon}</div>
                <div>
                  <h6>{item.title}</h6>
                </div>
                <div>
                  <p>{item.info}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
