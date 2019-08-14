import ShareButton from "./index";
import { mount } from "enzyme";
import { configureStore } from "../../pages/_app";
import { Provider } from "react-redux";
import { findByTestAtrribute, checkProps } from "../../test_utils/index";
describe("ShareButton 컴포넌트", () => {
  describe("PropTypes 테스트", () => {
    it("에러 없이 Prop를 전달받는다.", () => {
      const expectProps = {
        buttonText: "Example Button Text"
      };
      const propsError = checkProps(ShareButton, expectProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("에러 없이 렌더링한다", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Example Button Text"
      };
      const store = configureStore();
      wrapper = mount(
        <Provider store={store}>
          <ShareButton {...props} />
        </Provider>
      );
    });

    it("Should Render a Button", () => {
      const button = findByTestAtrribute(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
