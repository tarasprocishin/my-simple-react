function createElement(tag, props = {}, children) {
  const element = document.createElement(tag);

  if (props) {
    for (let name in props) {
      if (typeof props[name] === 'object') {
        for (let key in props[name]) {
          element[name][key] = props[name][key];
        }
      } else {
        element[name] = props[name];
      }
    }
  }

  if (children) {
    if (Array.isArray(children)) {
      children.forEach((el) => {
        return element.append(el);
      });
      return element;
    }
    element.append(children);
  }

  return element;
}

function render(element, conteiner) {
  conteiner.append(element);
}

const React = {
  createElement,
  render,
};

const app = React.createElement(
  'div',
  { style: { backgroundColor: 'red' } },
  [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', { textContent: 'Text content' }),
  ],
);

React.render(app, document.getElementById('app'));
