import React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStatetoProps = (state) => {
  return {};
};

export default connect(mapStatetoProps, {})(AdditionalFeature);
