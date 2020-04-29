import React from "react";

import { useDispatch } from "react-redux";
import { REMOVE_FEATURE } from "../actions/carAction";

const AddedFeature = (props) => {
  const dispatch = useDispatch();
  return (
    <li>
      <button
        onClick={() =>
          dispatch({ type: REMOVE_FEATURE, payload: props.feature })
        }
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
