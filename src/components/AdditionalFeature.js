import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import { buyItem } from "../actions/carAction";

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
