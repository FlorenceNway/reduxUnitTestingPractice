import React from "react";
import { shallow } from "enzyme";
import Header from "./index.js";
import { findByTestAtrr } from "./../../../Utils";

//we can use eithr
// test() or it() method

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

// const findByTestAtrr = (component, attar) => {
//   const wrapper = component.find(`[data-test='${attar}']`);
//   return wrapper;
// };

describe("Header component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render a component", () => {
    //const component = shallow(<Header />);
    //const component = setUp()
    // console.log(component.debug());
    // const wrapper = component.find(`[data-test='headerComponent']`);
    const wrapper = findByTestAtrr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("should render a logo", () => {
    const logo = findByTestAtrr(component, "logoImg");
    expect(logo.length).toBe(1);
  });
});
