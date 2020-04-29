import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import allActions from "./actions";

import { buyItem } from "../actions/carAction";

const AdditionalFeature = (props) => {
  const dispatch = useDispatch();
  return (
    <li>
      <button
        onClick={() => dispatch(allActions.userActions.buyItem())}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
