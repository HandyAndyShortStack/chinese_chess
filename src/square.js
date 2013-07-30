function Square(x, y) {
  Object.defineProperties(this, {
    x: {
      value: x
    },
    y: {
      value: y
    }
  });
}

module.exports = Square;
