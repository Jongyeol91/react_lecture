/* @jsx createElement */
// @jsx가 babel 지시어 이며, 어떤 메서들 변환시킬 것인가를 정해줌
import { createElement, render } from './react.js';

function Title(props) {
  return createElement("div", null, createElement("span", null, "depth1_1"), createElement("span", null, "depth1_2"), createElement("span", null, "depth1_3"), createElement("div", null, createElement("span", null, "depth2_1"), createElement("span", null, "depth2_2"), createElement("span", null, "depth2_3")), createElement("div", null, createElement("span", null, "depth3_1"), createElement("span", null, "depth3_2"), createElement("span", null, "depth3_3")));
} // 사용자의 컴포넌트는 함수자체를 넘겨준다.


render(createElement(Title, null), document.querySelector('#root')); // <div id="root">
//     <span>haha</span>
// </div>
// {
//     tagName: 'div',
//     props: {
//         id: root,
//         classNmae: 'conatiner'
//     },
//     children: [
//         {
//             tagName: "span",
//             props: {},
//             children: [
//                 'haha',
//             ]
//         }
//     ]
// }