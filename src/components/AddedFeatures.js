import React from "react";

import AddedFeature from "./AddedFeature";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

const AddedFeatures = () => {
  const features = useSelector((state) => state.car.features);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map((item) => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};
// const mapStatetoProps = (state) => {
//   return {};

export default AddedFeatures;
