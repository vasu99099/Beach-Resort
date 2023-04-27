import React, { useContext } from "react";
import Banner from "../Components/Banner";
import { Link, useParams } from "react-router-dom";
import { RoomContext } from "../Components/Context";
import Header from "../Components/Header";
import ErrorPage from '../Components/ErrorPage';
const SingleRoom = () => {
  let { slug } = useParams();

  const context = useContext(RoomContext);
  const data = context.getRoom(slug);
  if (data.length==0) {
    return  <ErrorPage></ErrorPage>
    }
    const { name, price, size, capacity, pets, description, extras, images } =
    data[0].fields;
  return (
    <div>
        <Header></Header>
      <Banner
        image={images[0].fields.file.url}
        title={name.concat(" Room")}
        subtitle=""
      >
        <Link to="/rooms" className="btn btn-room">
          BACK TO ROOMS
        </Link>
      </Banner>

      <div className="container-fluid container-lg mx-auto  my-5 px-5 px-lg-0 ">
        <div className=" row  mt-5">
          {images.map((image, index) => {
            if (index > 0) {
              return (
                <img
                  key={index}
                  src={image.fields.file.url}
                  className="col-12 col-md-6 col-lg-4 p-3"
                  alt=""
                />
              );
            }else{
                return '';
            }
          })}
        </div>

        <div className="row mt-3">
          <div className="col-12 col-lg-7">
            <h3 className="mb-4">Details</h3>
            <p
              className="lh-base "
              style={{ letterSpacing: "0px", fontSize: "18px" }}
            >
              {description}
            </p>
          </div>
          <div className="col-12 col-lg-5">
            <h3 className="mb-4 mt-3 mt-md-0">Info</h3>
            <div className="fs-6">
              <p> Price : ${price} </p>
              <p> Size : {size} SQFT </p>
              <p> Max Capacity : {capacity} Person </p>
              <p> {pets ? "Pets Allowed" : "No Pets Allowed"} </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="my-3">Extras</h3>
          <ul
            className="list-group list-group-horizontal row "
            style={{ letterSpacing: "1px" }}
          >
            {extras.map((extra, index) => {
              return (
                <li key={index} className="list-group-item border-0 col-12 col-md-6 col-lg-4 my-1">
                  - {extra}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleRoom;
