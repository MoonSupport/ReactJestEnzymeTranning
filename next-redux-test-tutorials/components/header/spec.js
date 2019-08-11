import { shallow } from "enzyme"
import Header from "./index"

import { findByTestAtrribute } from "../../test_utils/index"

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />)
  return component
}

describe("헤더 컴포넌트", () => {
  let component
  beforeEach(() => {
    component = setUp()
  })

  it("에러 없이 헤더 컴포넌트를 정상 렌더링 합니다.", () => {
    const wrapper = findByTestAtrribute(component, "headerComponent")
    expect(wrapper.length).toBe(1)
  })

  it("에러 없이 헤더의 제목을 정상 렌더링 합니다.", () => {
    const wrapper = findByTestAtrribute(component, "headerText")
    expect(wrapper.length).toBe(1)
  })

  it("에러 없이 헤더의 로고를 정상 렌더링 합니다.", () => {
    const wrapper = findByTestAtrribute(component, "headerLogo")
    expect(wrapper.length).toBe(1)
  })
})
