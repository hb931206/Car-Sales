import React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

const Total = () => {
  const totalState = useSelector((state) => state);
  return (
    <div className="content">
      <h4>
        Total Amount: ${totalState.car.price + totalState.additionalPrice}
      </h4>
    </div>
  );
};

export default Total;
