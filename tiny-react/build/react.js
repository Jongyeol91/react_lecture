function renderRealDOM(vdom) {
  if (typeof vdom === 'string') {
    return document.createTextNode(vdom);
  }

  if (vdom === undefined) return;
  const $el = document.createElement(vdom.tagName);
  let test = vdom.children.map(renderRealDOM).forEach((node, idx) => {
    console.log('node', node, 'idx', idx);
    $el.appendChild(node);
  });
  return $el;
} // compare vdom
// clojure


export const render = (() => {
  let prevVdom = null;
  return function (nextVdom, container) {
    if (prevVdom === null) {
      prevVdom = nextVdom;
    }

    container.appendChild(renderRealDOM(nextVdom));
  };
})();
export function createElement(tagName, props, ...children) {
  if (typeof tagName === 'function') {
    return tagName.apply(null, [props, ...children]);
  }

  return {
    tagName,
    props,
    children
  };
}