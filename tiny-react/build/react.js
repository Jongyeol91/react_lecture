function renderRealDOM(vdom) {
  if (typeof vdom === 'string') {
    console.log(vdom);
    return document.createTextNode(vdom);
  }

  if (vdom === undefined) return;
  const $el = document.createElement(vdom.tagName);
  console.log(vdom);
  let test = vdom.children.map(renderRealDOM);
  console.log("test", test);
  return $el;
}

export function render(vdom, container) {
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