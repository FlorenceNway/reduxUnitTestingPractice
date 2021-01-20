import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../Utils";
import ListItem from "./ListItem";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    it("should NOT throw a warning", () => {
      const expectedProps = {
        title: "Example Title",
        desc: "Some text",
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example Title",
        desc: "Some text",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("should render without error", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });
    it("should render a title", () => {
      const title = findByTestAtrr(wrapper, "titleComponent");
      expect(title.length).toBe(1);
    });
    it("should render a desc", () => {
      const desc = findByTestAtrr(wrapper, "descComponent");
      expect(desc.length).toBe(1);
    });
  });

  describe("should NOT render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Some text",
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it("componet is not rendered", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
