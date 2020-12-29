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
}

export function render(vdom, container) {
  if (prevVdom !== nextVdom) {}

  container.appendChild(renderRealDOM(vdom));
}
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