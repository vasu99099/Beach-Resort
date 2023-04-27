import React, { createContext, useEffect, useState } from "react";
import data from "../data";

const RoomContext = createContext();
const Context = (props) => {
  const [Featured, setFeatured] = useState([]);
  const [loader,setLoader] = useState(true);

  const [Room, setRoom] = useState(data);
  const getRoom = (slug) => {
    let tmp = Room.filter((d) => d.fields.slug === slug);
    return tmp;
  };

  useEffect(() => {
    const FeatureData = data.filter((d) => d.fields.featured === true);
    setFeatured(FeatureData);
  }, []);

  const maxPrice = Math.max(...data.map((item) => item.fields.price));
  const RoomType = [];
  const Guests = [];

  data.map((item) => {
    if (RoomType.indexOf(item.fields.type) === -1) {
      RoomType.push(item.fields.type);
    }
    if (Guests.indexOf(item.fields.capacity) === -1) {
      Guests.push(item.fields.capacity);
    }
    return 0;
  });




  const filterData = (filterData) => {
    const { RoomType, Guests, price, minSize, maxSize, breakFast, pets } =
      filterData;
    let tempRoom = [...data];

    if (RoomType !== "All") {
      tempRoom = tempRoom.filter((type) => type.fields.type === RoomType);
    }
    if (Guests !== 1) {
      tempRoom = tempRoom.filter((type) => type.fields.capacity >= Guests);
    }

    if (price !== 600) {
      tempRoom = tempRoom.filter((type) => type.fields.price <= price);
    }
    if (minSize !== 0 || maxSize !== 1000) {
      tempRoom = tempRoom.filter(
        (type) => type.fields.size >= minSize && type.fields.size < maxSize
      );
    }

    if (breakFast) {
      tempRoom = tempRoom.filter((type) => type.fields.breakfast === true);
    }
    if (pets) {
      tempRoom = tempRoom.filter((type) => type.fields.pets === true);
    }
    setRoom(tempRoom);
  };

  
  return (
    <RoomContext.Provider
      value={{
        Featured,
        Room,
        getRoom,
        maxPrice,
        RoomType,
        filterData,
        Guests,
        loader,
        setLoader,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
};

export default Context;
export { RoomContext };
