/* @jsx createElement */
// @jsx가 babel 지시어 이며, 어떤 메서들 변환시킬 것인가를 정해줌
import { createElement, render } from './react.js';

function Title (props) {
    return (
        <div>
            <h2>바벨 트렌스 파일링 전</h2>
            <h3>안녕하세요</h3>
            <h4>하이</h4>
          <div>
            안녕
            <h5>dd</h5>
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
