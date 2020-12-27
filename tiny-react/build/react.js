function renderRealDOM(vdom) {
  const $el = document.createElement(vdom.tagName);
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