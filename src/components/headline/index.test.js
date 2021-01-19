import React from "react";
import { shallow } from "enzyme";
import Headline from "./index.js";
import { findByTestAtrr, checkProps } from "./../../../Utils";
import checkPropTypes from "check-prop-types";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test desc",
        tempArr: [
          {
            name: "flo",
            age: 25,
            onlineStatus: true,
          },
        ],
      };
      // const propsErr = checkPropTypes(
      //   Headline.propTypes,
      //   expectedProps,
      //   "props",
      //   Headline.name
      // ); // (component.propTypes, expectedProps, what we are testing, name of component)
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "test Header",
        desc: "test Desc",
      };
      wrapper = setUp(props);
    });

    it("should render without errors", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });
    it("should render H1", () => {
      const component = findByTestAtrr(wrapper, "header");
      expect(component.length).toBe(1);
    });
    it("should render a desc", () => {
      const component = findByTestAtrr(wrapper, "desc");
      expect(component.length).toBe(1);
    });
  });

  describe("Have no props", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setUp();
    });

    it("should render without errors", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
    it("should render H1", () => {
      const component = findByTestAtrr(wrapper, "header");
      expect(component.length).toBe(0);
    });
    it("should render a desc", () => {
      const component = findByTestAtrr(wrapper, "desc");
      expect(component.length).toBe(0);
    });
  });
});
