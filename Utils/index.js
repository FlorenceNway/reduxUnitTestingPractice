import checkPropTypes from "check-prop-types";

export const findByTestAtrr = (component, attar) => {
  const wrapper = component.find(`[data-test='${attar}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.proptypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};
