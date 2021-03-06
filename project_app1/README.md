불현듯 드는 의문 메모
1. 원본 데이터를 오염시키지 않기위해 Object.assign을 사용하였는데,
   Lodash, jQeury의 _.extend / _.assign / _.merge의 차이점 - https://it-man.tistory.com/656

==============================================================================================================================

- React - react 공식문서 확인 잘 할것

내부 - state / 외부 - props

this.props - 사용자에게 제공 / read-only / 수정안됨
this.state - 내부에서 관리 / this.setState로 데이터 변경

상위 component의 state를 하위 component의 props로 전달

component내부에서 자신에게 전달 된 this.props의 값을 변경할 수 없다 - this.props
component외부(상위 component)에서는 값을 변경할 수 있다 - this.setState

상위 component가 하위 component에게 값을 전달할 때 - this.props 통해 전달
하위 component가 상위 component의 어떤 값을 변경할 때 - event를 통해 state값 변경

component 설계시 고려해야할 부분
state나 props를 변경하게 되면 라이프사이클에 의해 불필요한 render가 호출되기 때문에,
state에 들어갈 내용을 고민하여 설계해야 한다 - 비용낭비

배열에 데이터를 추가할 때는 push() 보다는 concat()을 사용하는게 좋다 
- 성능관리시 원본데이터가 오염되어 수정하기 까다로움

개발 시 원본을 변경하지 않는다 - 불변성 (immutable)
this.setState 어떠한 값을 줄 때는 원본을 오염시키지 않고 복제본을 만들어 수정하고 원본을 변경하는 방식으로 해야한다.
- shouldComponentUpdate함수를 사용할 때 원본을 변경하게 되면 문제가 발생 - 원본 데이터와 변경 된 데이터 비교 불가

shouldComponentUpdate(newProps, newState)
- render보다 먼저 호출됨
- return값이 true면 render가 호출됨, false면 호출되지 않음 (불필요한 render 호출 방지) - 비용관리
- newProps인자는 새롭게 변경 된 데이터를 나타냄
  ㄴ ex) newProps.data(변경 된 데이터) === this.props.data(원본 데이터) - 원본이 변경되면 비교 불가

Array 경우

방법1
var arr = [1, 2];
var arr2 = Array.from(arr);
arr2.push("값");

방법2
var arr = [1, 2];
var arr2 = arr.concat("값");

방법1, 2모두 원본 데이터를 오염시키지 않고 새로운 배열을 변수에 담아 사용

Object 경우
var obj = {name: "test"};
var obj2 = Object.assign({}, obj);

결론적으로는 Array와 Object 둘 다 방법만 다를 뿐 원본 데이터를 오염시키지 않고 개발을 하는것이다

==============================================================================================================================

== Redux - 상태관리 라이브러리
redux를 사용하면, component의 상태(state) 관련 로직을 다른파일로 분리시켜 효율적으로 관리할 수 있다.
또한, component끼리 상태(state)를 공유하게 될 때 여러 컴포넌트를 거치지 않고 손쉽게 상태(state)값을 전달할 수 있다.


== 필요성

redux는 전역(global) 상태(state)를 하게 될 때 굉장히 효과적이다.
앱이 지니고 있는 상태(state)와, 상태(state) 변화 로직이 들어있는 저장소(store)를 통하여, 원하는 component에 원하는 상태(state)값과 함수를 직접 주입해줄 수 있다.
하나의 외부 데이터 저장소(store)에서 관리함, 저장소(store)에서 어떠한 상태(state)값이 바뀌면 관련 된 모든 component의 상태(state)값이 변경된다.


== 특징

1. 하나의 상태를 갖는다 (하나의 객체에서 모든 데이터를 관리한다)
2. 외부로부터 접근할 수 없으며(직접 수정 안됨), 데이터를 수정할 땐 dispatch > reducer / 데이터를 가져올 땐 getState를 사용한다
3. state가 변하게 되면 각각의 component의 상태가 변하게 된다
4. UNDO / REDO를 쉽게 할 수 있다
   각각의 스테이트 값들을 생성할 때 철저하게 통제하고,
   데이터를 만들 때 원본을 변경하는게 아니라, 원본을 복제하고 복제한 데이터를 수정해서 그 데이터를 새로운 원본으로 만들기 때문에
   각각의 상태의 변화가 서로에게 영향을 전혀 주지 않은 독립적 형태를 유지할 수 있고 이러한 특징을 잘 이용하면 상태를 바꾸는것을 매우 쉽게 할 수 있다.
5. 모듈리로딩
   코드를 작성하면 코드가 자동으로 어플리케이션으로 적용 됨


== 개념정리
사용자(user)  - action, render
저장소(store) - dispatch, subscribe, getState, reducer, state

1. action
- state를 변경할 때 dispatch의 인자로 넣어주면 reducer에서 처리할 수 있음 (type은 필수 property 나머지는 사용자 마음대로 정의 가능)
  ex)
  var state = store.getState();
  state.dispatch({
     type: // 필수값,
     .
     ..
     ... < 사용자 정의 값
  })

2. dispatch
- 1개의 인자(action)를 받고 reducer를 호출하는 역할을 함.
  ex)
  var state = store.getState() // state정보 가져오기
  <div onclick="state.dispatch(// 변경 될 state 값 - action);">
      .
      ..
      ...
  </div>

3. subscribe
- dispatch를 통해 reducer가 호출되고 state값이 변경되면 render를 호출해주는 함수
  변결 될 영역을 해당 함수의 인자로 넘겨주면 state값이 변경되었을 때 render를 호출하여 view를 업데이트함.
  ex)
  store.subscribe(// render 할 영역);

4. reducer
- dispatch에서 전달받은 action(수정된 값)과 state(기존 값)를 인자로 받는 함수.
  state를 직접 접근하여 수정하는 것이 불가능하기 때문에 reducer에 action(변경 될 상태값)을 전달하여 state(기존 값)를 변경해야 한다.
  redux의 createStore()함수의 인자로 reducer를 넣어줘야함.
  불변성(immutable)의 법칙으로 원본 state가 아닌 원본 state를 포함한 복제한 state를 반환한다.
  ex)
  function reducer(state, action(dispatch 인자)) {
     var newState; // 원본 객체를 복제할 빈 객체
     var newArray; // 원본 배열을 복제할 빈 배열

     1. Array 경우
     newArray = state.array.concat();
     newArray.push(action);
     newState = Object.assign({}, state, {
        property: newArray
     });

     return newState;

     2. Object 경우
     newState = Object.assign({}, state, {
        property: action
      });
     return newState;
  }
  var store = Redux.createStore(reducer);

5. state
- redux에서는 사용자가 state에 직접적으로 접근하는것이 불가능하다. 오직 reducer를 통하여 접근, 수정이 가능하다.
  추상적인 상태값으로 구성

6. getState
- state를 가져오는 함수.
  state에 직접적인 접근이 불가능 하기 때문에 사용자는 오직 getState를 사용하여 state값을 가져올 수 있다.