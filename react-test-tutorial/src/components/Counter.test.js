import React from "react"
import renderer from "react-test-renderer"
import Counter from "./Counter"

describe("Counter 테스트", () => {
  let component = null

  it("렌더링 테스트", () => {
    component = renderer.create(<Counter />)
  })

  it("스냅샷과 비교", () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("더하기 기능", () => {
    component.getInstance().onIncrease()
    expect(component.getInstance().state.value).toBe(2)
    const tree = component.toJSON() // re-render
    expect(tree).toMatchSnapshot() // 스냅샷 비교
  })

  it("빼기 기능", () => {
    component.getInstance().onDecrease()
    expect(component.getInstance().state.value).toBe(1) // value 값이 1인지 확인
    const tree = component.toJSON() // re-render
    expect(tree).toMatchSnapshot() // 스냅샷 비교
  })
})
