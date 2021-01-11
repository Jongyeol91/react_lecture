// [리덕스의 컨셉]
// 전역상태가 필요한데 각 컴포넌트에서 필요한 전역 상태를 가져다 씀
// 만약 잘못 수정되더라도 여러 컴포넌트에서 수정되는것이 아니기 때문에 쉽게 찾아서 해결할 수 있다.
// 즉, 각각의 컴포넌트가 직접적으로 상태를 수정하지 못하게 하자
// 컴포넌트가 무엇을 어떻게 수정해줘라고 하는 시그널을 주고 실제 수정은 한곳에서 하게하는 컨셉이다.
// 리덕스에서는 상태를 어떻게 수정해야하는지 모르기 때문에 상태를 수정할 수 있는 단 하나의 함수 reducer를 외부에서 제공해줘야 한다. 
// 사건을 구독하고 전달하는 pop sub 패턴

export function createStore(reducer) {
    let state; // 전역 스토어

    function dispatch(action) {
        state = reducer(state, action);
    }

    function getState() {
        return state;
    }

    return {
        dispatch,
        getState
    }
}

