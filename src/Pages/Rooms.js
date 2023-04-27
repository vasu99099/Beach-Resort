import React from "react";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import roombanner from "../Images/room-1.jpeg";
import RoomList from "../Components/RoomList";
import { Link } from "react-router-dom";
const Rooms = () => {
  return (
    <div>
      <Header />

      <Banner image={roombanner} title="Our Rooms" subtitle="">
        <Link to="/" className="btn btn-room">
          RETURN HOME
        </Link>
      </Banner>
      <RoomList />
    </div>
  );
};

export default Rooms;
