/* @jsx createElement */
// @jsx가 babel 지시어 이며, 어떤 메서들 변환시킬 것인가를 정해줌
import { createElement, render } from './react.js';

function Title(props) {
  return createElement("div", null, createElement("h2", null, "\uBC14\uBCA8 \uD2B8\uB80C\uC2A4 \uD30C\uC77C\uB9C1 \uC804"), createElement("h3", null, "\uC548\uB155\uD558\uC138\uC694"), createElement("h4", null, "\uD558\uC774"), createElement("div", null, "\uC548\uB155", createElement("h5", null, "dd")));
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