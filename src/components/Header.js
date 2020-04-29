import React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

const Header = () => {
  const hState = useSelector((state) => state.car);

  return (
    <>
      <figure className="image is-128x128">
        <img src={hState.image} alt={hState.name} />
      </figure>
      <h2>{hState.name}</h2>
      <p>Amount: ${hState.price}</p>
    </>
  );
};
// const mapStatetoProps = (state) => {
//   console.log("Header", state);
//   return { carName: state.car.name, amount: state.car.price };
// };

export default Header;
