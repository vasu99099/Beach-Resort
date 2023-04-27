import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { RoomContext } from "./Context";

const Room = (props) => {
  const { id, name, slug, price, image } = props.data;
  const context = useContext(RoomContext);
  const { loader, setLoader } = context;

  return (
    <div
      className="card mb-3 col-12 col-md-6 col-lg-3 border-0 p-3   "
      key={id}
    >
      <div className="room">
        <div className="position-relative ">
          <img src={image} className="card-img-top   " alt="..." />
          <Link
            to={"/rooms/" + slug}
            className="btn fetures-button position-absolute "
          >
            FEATURES
          </Link>
          <div className="text-white position-absolute top-0  room-badge p-2">
            <p className="my-0 " style={{ fontSize: "14px" }}>
              $ {price}
            </p>
            <p
              className="mb-0"
              style={{ fontSize: "10px", letterSpacing: "0px" }}
            >
              per night
            </p>
          </div>
        </div>
        <div className="card-body py-0 px-0">
          <h5 className="card-title room-title my-0 py-2  text-center text-capitalize">
            {name}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Room;
