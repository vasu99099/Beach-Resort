import React, { useContext } from "react";
import { RoomContext } from "./Context";
import Room from "./Room";
const FeaturedRoom = () => {
  const FeatureRoom = useContext(RoomContext);

  return (
    <div>
      <h2 className="text-center mt-5 ">Featured Rooms</h2>
      <div className="line-title "></div>
      <div className="row mx-5 mt-5 mb-5 justify-content-evenly">
        {FeatureRoom.Featured.map((d) => {
          let obj = {};
          obj.id = d.sys.id;
          obj.name = d.fields.name;
          obj.price = d.fields.price;
          obj.slug = d.fields.slug;
          obj.image = d.fields.images[0].fields.file.url;
          return <Room data={obj} key={Math.random()}></Room>;
        })}
      </div>
    </div>
  );
};

export default FeaturedRoom;
