import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import { REMOVE_FEATURE } from "../actions/carAction";

const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
