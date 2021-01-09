// 리덕스의 컨셉
// 전역상태가 필요한데 각 컴포넌트가 필요한 상태를 가져다 씀
// 만약 잘못 수정되면 어느 컴포넌트에서 수정되는지 어렵다라는 걸 해결
// 각각의 컴포넌트가 직접적으로 상태를 수정하지 못하게 하자
// 컴포넌트가 무엇을 어떻게 수정해줘라고 하는 시그널을 주고 실제 수정은 한곳에서 하게 
// 수정되는 한곳만 관리 가능!
// 스테이트를 수정할 수 있는 유일한 함수 updater를 받는다.
export function createStore(updater) {
    let state; // 전역 스토어

    function doUpdate(data) {
        state = updater(state, data);

    }

    function getState() {
        return state;
    }

    return {
        doUpdate,
        getState
    }
}

