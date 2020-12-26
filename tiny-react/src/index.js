/* @jsx createElement */
// @jsx가 babel 지시어 이며, 어떤 메서들 변환시킬 것인가를 정해줌
import { createElement, render } from './react.js';

function Title (props) {
    return (
        <div>
            <h2>바벨 트렌스 파일링 전</h2>
            <h3>안녕하세요</h3>
        </div>
    )
}

console.log(Title());

//render(<Title/>, document.querySelector('#root'));

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
