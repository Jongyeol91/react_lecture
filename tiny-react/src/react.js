const hooks = [];
let currentComponent = 0;// 어떤 함수가 호출되는지 useState와 createElement간의 정보공유

export function useState(initValue) {
    const position = currentComponent;
    // 최초 호출이면
    if (!hooks[position]) {
        hooks[position] = initValue;
    }
    return [
        hooks[position],
        (nextValue) => {
            hooks[position] = nextValue
        }
    ];
}

function renderRealDOM(vdom) {
    if (typeof vdom === 'string') {
       return document.createTextNode(vdom);
    }

    if(vdom === undefined) return;

    const $el = document.createElement(vdom.tagName);

    let test = vdom.children.map(renderRealDOM).forEach((node, idx) => {
        console.log('node', node, 'idx', idx)
        $el.appendChild(node);
    });
    return $el;
}

// compare vdom
// clojure
export const render = (() => {
    let prevVdom = null;
    return function (nextVdom, container) {
        if (prevVdom === null) {
            prevVdom = nextVdom;
        }
        // diff~
        container.appendChild(renderRealDOM(nextVdom))
    }
})();


export function createElement(tagName, props, ...children) {
    if (typeof tagName === 'function') {
        // 리액트 훅 공식문서에 훅을 반드시 함수형 컴포넌트 안에서먼, 조건적 호출에서는 쓰지 말아라
        // 항상 동일하게 렌더링 되어야 currentComponent 순서가 맞기 때문
        currentComponent++;
        return tagName.apply(null, [props, ...children])
    }
    return {tagName, props, children}
}
