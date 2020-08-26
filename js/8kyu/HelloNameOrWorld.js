const hello = (name = '') => {
  return name.length === 0 ? 'Hello, World!' : `Hello, ${name[0].toUpperCase() + name.substr(1,).toLowerCase()}!`;
};
