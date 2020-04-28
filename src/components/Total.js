import React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

const Total = () => {
  const totalState = useSelector((state) => state.car);
  return (
    <div className="content">
      <h4>Total Amount: ${totalState.price + totalState.additionalPrice}</h4>
    </div>
  );
};

export default Total;
