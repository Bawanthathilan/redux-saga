export const addToCart = (data) => {
  console.warn("action is called", data);
  return {
    type: "ADD_TO_CART",
    data: data,
  };
};
