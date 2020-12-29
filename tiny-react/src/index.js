/* @jsx createElement */
// @jsx가 babel 지시어 이며, 어떤 메서들 변환시킬 것인가를 정해줌
import {createElement, render} from './react.js';

function Title(props) {
  return (
      <div>
        <span>depth1_1</span>
        <span>depth1_2</span>
        <span>depth1_3</span>
        <div>
          <span>depth2_1</span>
          <span>depth2_2</span>
          <span>depth2_3</span>
        </div>
        <div>
          <span>depth3_1</span>
          <span>depth3_2</span>
          <span>depth3_3</span>
        </div>
      </div>
  )
}

// 사용자의 컴포넌트는 함수자체를 넘겨준다.
render(<Title/>, document.querySelector('#root'));

// <div id="root">
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
