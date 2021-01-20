import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../Utils";
import SharedButton from "./SharedButton";

describe("SharedButton component", () => {
  describe("Checking PropTypes", () => {
    it("should NOT throw a warning", () => {
      const expectedProps = {
        buttonText: "Example button text",
        emitEvent: () => {},
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Example button text",
        emitEvent: () => {},
      };
      wrapper = shallow(<SharedButton {...props} />);
    });
    it("should render a button", () => {
      const button = findByTestAtrr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
