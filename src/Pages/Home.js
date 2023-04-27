import React from "react";
import Header from "../Components/Header";
import Services from "../Components/Services";
import Banner from "../Components/Banner";
import FeaturedRoom from "../Components/FeaturedRoom";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner
        image=""
        title="Luxurious Rooms"
        subtitle="Deluxe Rooms Starting At $299"
      >
        {" "}
        <Link to="/rooms" className="btn btn-room">
          OUR ROOMS
        </Link>
      </Banner>
      <Services />
      <FeaturedRoom />
    </div>
  );
};

export default Home;
