import React, { useContext } from "react";
import { RoomContext } from "./Context";
import Room from "./Room";
import Filter from "./Filter";
const RoomList = () => {
  const room = useContext(RoomContext);
  return (
    <div className="container mx-auto">
      <h2 className="text-center mt-5 ">Search Rooms</h2>
      <div className="line-title "></div>
      <Filter></Filter>
      {room.Room.length===0&&<h3 className="text-center m-5 p-5">Unfortunately No Rooms Matched Your Search Parameters</h3>}
      <div className="row  mt-5 mb-5  ">
        {room.Room.map((d,index) => {
          let obj = {};
          obj.id = d.sys.id;
          obj.name = d.fields.name;
          obj.price = d.fields.price;
          obj.slug = d.fields.slug;
          obj.image = d.fields.images[0].fields.file.url;
          return <Room data={obj} key={index}></Room>;
         
        })}
      </div>
    </div>
  );
};

export default RoomList;
