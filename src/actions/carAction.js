const buyItem = (item) => {
  // dipsatch an action here to add an item
  return { type: "ADD_NEW_FEATURE", payload: item };
};

const removeFeature = (item) => {
  return { type: "Remove_Feature", payload: item };
};
