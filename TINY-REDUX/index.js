import { createStore } from "./redux.js";

function updater(state, data) {
    state = data;
    return state;
}
const store = createStore(updater);

store.doUpdate({ counter: 1 });
console.log(store.getState());