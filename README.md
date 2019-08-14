# Test Util

    import checkPropTypes from "check-prop-types";

    export const checkProps = (component, expectedProps) => {
        const propsErr = checkPropTypes(
    	    component.propTypes,
    	    expectedProps,
    	    "props",
    	    component.name
        );
        return propsErr;
    };

    export const findByTestAtrribute = (component, attr) => {
        const wrapper = component.find(`[data-test="${attr}"]`);
        return wrapper;
    };

# 테스트 예제

리액트 + 리액트 훅 + 리덕스 + 리덕스 훅+ 리덕스 사가 에 적용시킬 수 있는 가장 간단한 테스트

## 리액트 컴포넌트 테스트 (스냅샷 없이)

    import { shallow } from  "enzyme"
    import  Header  from  "./index"
    import { findByTestAtrribute } from  "../../test_utils/index"

    const  setUp  = (props  = {}) => {
        const  component  =  shallow(<Header  {...props}  />)
        return  component
    }
    describe("헤더 컴포넌트", () => {
        let  component
        beforeEach(() => {
        component  =  setUp()
        })
        it("에러 없이 헤더 컴포넌트를 정상 렌더링 합니다.", () => {
        const  header  =  findByTestAtrribute(component, "headerComponent")
        expect(header.length).toBe(1)
        expect(header.text()).toEqual("Test Header")
        })
    })

## 컴포넌트 Props 테스트 (props-type 적용 시)

    describe("PropTypes 체크", () => {
        it("에러 없음", () => {
    	    const  expectedProps  = {
    		    header:  "Test Header",
    		    description:  "Test Description",
    		    user: [
    		    {
    			    fName:  "Test fName",
    			    lName:  "Test lName",
    			    age:  24,
    			    onlineStatus:  false
    		    }
    		    ]
    	    }
    	    const  propsErr  =  checkProps(Headline, expectedProps)
    	    expect(propsErr).toBeUndefined()
        })
    })

## 리액트 훅 및 리덕스 훅 사용시 컴포넌트 테스트

    import  ShareButton  from  "./index";
    import { mount } from  "enzyme";
    import { configureStore } from  "../../pages/_app";
    import { Provider } from  "react-redux";
    import { findByTestAtrribute, checkProps } from  "../../test_utils/index";

    describe("ShareButton 컴포넌트", () => {
        describe("에러 없이 렌더링한다", () => {
    	    let  wrapper;
    	    beforeEach(() => {
    		    const  props  = {
    		    buttonText:  "Example Button Text"
    	    };
    	    const  store  =  configureStore();
    	    wrapper  =  mount(
    					    <Provider  store={store}>
    						    <ShareButton  {...props}  />
    					    </Provider>
    				    );
    	    });
    	    it("Should Render a Button", () => {
    		    const  button  =  findByTestAtrribute(wrapper, "buttonComponent");
    		    expect(button.length).toBe(1);
    	    });
        });
    });

## 리듀서 테스트 ( 사가 적용 X)

    import { GET_POSTS, getPostsAction } from "./reducer";
    import postReducer from "./reducer";
    describe("Posts Reducer", () => {
        it("default state가 리턴된다.", () => {
    	    const newState = postReducer(undefined, {});
    	    expect(newState).toEqual({posts: []});
        });

        it("props 값에 따라 새로운 state가 리턴된다.", () => {
    	    const posts = [
    		    { title: "Test1 " },
    		    { title: "Test2 " },
    		    { title: "Test3 " }
    	    ];

        const newState = postReducer(undefined, getPostsAction(posts));
        expect(newState).toEqual({ posts: posts });
        });
    });

## 리덕스 테스트 (사가 적용 비동기 테스트)

    import  postReducer, { GET_POSTS_SUCCESS } from  "./reducer";
    import { addPostAPI } from  "../../sagas/post";

    describe("Posts Reducer", () => {
        it("default state가 리턴된다.", () => {
        const  newState  =  postReducer(undefined, {});
        expect(newState).toEqual({ posts: [] });
        });

        it("요청 결과 값을 정확히 받는다..", async () => {
    	    const  expectedDummy  = {
    		    posts: [{
    			    userId:  1,
    			    id:  1,
    			    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    			    body:"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    			    },
    			    {
    			    userId:  1,
    			    id:  2,
    			    title:  "qui est esse",
    			    body:"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    			    },
    			    {
    			    userId:  1,
    			    id:  3,
    			    title:  "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    			    body:"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    			    }]
    			    };
    	    const  requestData  =  await  addPostAPI();
    	    const  newState  =  postReducer(undefined, {
    								type:  GET_POSTS_SUCCESS,
    								payload:  requestData
    							});
    		expect(newState).toEqual(expectedDummy);
    	});
    });

## 리덕스 사가 테스트

    import { GET_POSTS_SUCCESS } from  "../../reducers/post/reducer";
    import { call, put } from  "redux-saga/effects";
    import { addPost, addPostAPI } from  "../../sagas/post";

    describe("Posts Reducer", () => {
    	it("정상적으로 동기 실행을 한다.", () => {
    		const  iterator  =  addPost();
    		expect(iterator.next().value).toEqual(call(addPostAPI));
    		expect(iterator.next().value).toEqual(
    			put({
    				type:  GET_POSTS_SUCCESS,
    				payload:  undefined
    			})
    		);
    	});
    });

# 스냅샷 테스트

## 컴포넌트 테스트

    import  React  from  "react"
    import { shallow } from  "enzyme"
    import  renderer  from  "react-test-renderer"
    import  Counter  from  "./Counter"

    describe("Counter 테스트", () => {
        let  component  =  null
        it("렌더링 테스트", () => {
    	    component  =  renderer.create(<Counter  />) //renderer 사용시
    	    component = shallow(<Counter />) // enzyme 사용시
        })

        it("스냅샷과 비교", () => {
    	    const  tree  =  component.toJSON()
    	    expect(tree).toMatchSnapshot()
        })
        it("더하기 기능", () => {
    	    component.getInstance().onIncrease()
    	    expect(component.getInstance().state.value).toBe(2)
    	    const  tree  =  component.toJSON() // re-render
    	    expect(tree).toMatchSnapshot() // 스냅샷 비교
        })
    });

## 이벤트 시뮬레이션

    it("인풋 변화 시뮬레이션", () => {
        const  mockedEvent  = {
    	    target: {
    	    value:  "hello"
        }
    } //e.target.value랑 같은 느낌
    component.find("input").simulate("change", mockedEvent) // 이벤트를 시뮬레이트 합니다. 두번째 파라미터는 이벤트 객체입니다.
    expect(component.state().name).toBe("hello")
    })
