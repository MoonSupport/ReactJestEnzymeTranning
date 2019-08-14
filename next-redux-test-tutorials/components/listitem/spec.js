import ListItem from "./index";
import { shallow } from "enzyme";
import { findByTestAtrribute, checkProps } from "../../test_utils/index";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    it("No 경고", () => {
      const expectedProps = {
        title: "Example Title",
        description: "Examle Description"
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("렌더링", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example Title",
        description: "Examle Description"
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("컴포넌트 렌더링이 잘 된다.", () => {
      const component = findByTestAtrribute(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });

    it("타이틀이 잘 렌더링 된다", () => {
      const title = findByTestAtrribute(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });

    it("세부사항이 잘 렌더링 된다.", () => {
      const description = findByTestAtrribute(wrapper, "componentDescription");
      expect(description.length).toBe(1);
    });
  });

  describe("타이틀 값이 없다면 렌더링 되지 않는다.", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example Title",
        description: "Examle Description"
      };
      wrapper = shallow(<ListItem />);
    });

    it("렌더링될 컴포넌트가 없다.", () => {
      const component = findByTestAtrribute(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });

    it("렌더링될 컴포넌트가 없다", () => {
      const title = findByTestAtrribute(wrapper, "componentTitle");
      expect(title.length).toBe(0);
    });

    it("렌더링될 컴포넌트가 없다.", () => {
      const description = findByTestAtrribute(wrapper, "componentDescription");
      expect(description.length).toBe(0);
    });
  });
});
