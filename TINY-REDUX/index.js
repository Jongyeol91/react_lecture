import { createStore } from "./redux.js";

function reducer(state, action) {
    if (action.type === "COUNT") {
        return { ...state, counter: action.paylaod.counter }
    }
    return state;
}
const store = createStore(reducer);

store.dispatch({ 
    type: "COUNT",
    payload: {
        counter: 1
    } 
});
console.log(store.getState());
