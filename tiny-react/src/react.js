export function render(component, container) {
console.log(component)
}

export function createElement(tagName, props, ...children) {
    return {tagName, props, children}
}

