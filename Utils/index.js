export const findByTestAtrr = (component, attar) => {
  const wrapper = component.find(`[data-test='${attar}']`);
  return wrapper;
};
