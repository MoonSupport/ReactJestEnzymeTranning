import React from "react"
import { shallow } from "enzyme"
import Headline from "./index"
import checkPropTypes from "check-prop-types"
import { findByTestAtrribute, checkProps } from "../../test_utils/index"

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />)
  return component
}

describe("헤드라인 컴포넌트", () => {
  describe("속성을 받는 컴포넌트.", () => {
    let wrapper
    beforeEach(() => {
      const props = {
        header: "Test Header",
        description: "Test Description"
      }
      wrapper = setUp(props)
    })

    it("에러 없이 컴포넌트가 렌더링 됩니다.", () => {
      const component = findByTestAtrribute(wrapper, "HeadlineComponent")
      expect(component.length).toBe(1)
    })

    it("에러 없이 헤더가 렌더링 됩니다.", () => {
      const header = findByTestAtrribute(wrapper, "header")
      expect(header.length).toBe(1)
      expect(header.text()).toEqual("Test Header")
    })

    it("에러 없이 세부사항이 렌더링 됩니다.", () => {
      const description = findByTestAtrribute(wrapper, "description")
      expect(description.length).toBe(1)
      expect(description.text()).toEqual("Test Description")
    })
  })

  describe("속성을 받지 않는 컴포넌트", () => {
    let wrapper
    beforeEach(() => {
      wrapper = setUp()
    })
    it("컴포넌트 렌더링에 실패합니다.", () => {
      const component = findByTestAtrribute(wrapper, "HeadlineComponent")
      expect(component.length).toBe(0)
    })
  })

  describe("PropTypes 체크", () => {
    it("에러 없음", () => {
      const expectedProps = {
        header: "Test Header",
        description: "Test Description",
        user: [
          {
            fName: "Test fName",
            lName: "Test lName",
            age: 24,
            onlineStatus: false
          }
        ]
      }
      const propsErr = checkProps(Headline, expectedProps)
      expect(propsErr).toBeUndefined()
    })
  })
})
