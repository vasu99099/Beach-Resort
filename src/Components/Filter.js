import React, { useContext, useEffect, useState } from "react";
import { RoomContext } from "./Context";
const Filter = () => {
  const context = useContext(RoomContext);

  const {maxPrice, RoomType, Guests,filterData } = context;
  const [inputFilter, setInputFilter] = useState({
    RoomType: "All",
    Guests: 1,
    price: context.maxPrice,
    minSize: 0,
    maxSize: 10000,
    breakFast: false,
    pets: false,
  });

  const filterHandler = (e) => {
    if (e.target.type !== "checkbox") {
      setInputFilter({ ...inputFilter, [e.target.name]: e.target.value });
    } else {
      setInputFilter({
        ...inputFilter,
        [e.target.name]: !inputFilter[e.target.name],
      });
    }
  };

  const resetFilterHandel = () => {
    setInputFilter({
      RoomType: "All",
      Guests: 1,
      price: context.maxPrice,
      minSize: 0,
      maxSize: 10000,
      breakFast: false,
      pets: false,
    });
  };

  useEffect(() => {
    filterData(inputFilter);
  },[inputFilter]);
  return (
    <div className="mx-auto">
      <div className="row gap-2 align-item-center py-5 mx-5 mx-lg-0 ">
        <div className="col-12 col-md-5 col-lg-2">
          <label>Room Type :</label>
          <select
            className="form-select"
            name="RoomType"
            value={inputFilter.RoomType}
            aria-label="Default select example"
            onChange={filterHandler}
          >
            <option defaultValue value="All">
              All
            </option>
            {RoomType.map((RoomType, index) => {
              return <option key={index}>{RoomType}</option>;
            })}
          </select>
        </div>
        <div className="col-12  col-md-5 col-lg-2">
          <label>Guests :</label>
          <select
            className="form-select"
            name="Guests"
            value={inputFilter.Guests}
            onChange={filterHandler}
            aria-label="Default select example"
          >
            {Guests.map((Guest, index) => {
              return <option key={index}>{Guest}</option>;
            })}
          </select>
        </div>
        <div className="col-8 col-md-5 col-lg-2 ">
          <label> Room Price : ${inputFilter.price}</label>
          <input
            type="range"
            name="price"
            value={inputFilter.price}
            min="0"
            max={maxPrice}
            className="py-2"
            onChange={filterHandler}
          />
        </div>

        <div className="col-12 col-md-5 col-lg-2">
          <label> Room Size :</label>
          <br />
          <span className="d-flex">
            <input
              type="number"
              name="minSize"
              className="from-control w-50 me-2"
              onChange={filterHandler}
              value={inputFilter.minSize}
            />
            <input
              type="number"
              name="maxSize"
              className="from-control w-50"
              onChange={filterHandler}
              value={inputFilter.maxSize}
            />
          </span>
        </div>

        <div className="col-12  col-lg-2">
          <div className="form-check">
            <input
              className="form-check-input"
              name="breakFast"
              type="checkbox"
              checked={inputFilter.breakFast}
              onChange={filterHandler}
            />
            <label>Breakfast</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              name="pets"
              type="checkbox"
              checked={inputFilter.pets}
              onChange={filterHandler}
            />
            <label>pets</label>
          </div>
        </div>
        <div className="col-1">
          <button className="btn btn-danger" onClick={resetFilterHandel}>
            Reset{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
