import React from "react";
// import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import { ADD_NEW_FEATURE } from "../actions/carAction";

const AdditionalFeature = (props) => {
  const dispatch = useDispatch();
  return (
    <li>
      <button
        onClick={() =>
          dispatch({ type: ADD_NEW_FEATURE, payload: props.feature })
        }
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
