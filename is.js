exports.number = function(obj) {
  return (
    typeof obj == 'number' &&
    obj == obj &&
    obj != Infinity
  );
};

exports.string = function(obj) {
  return typeof obj == 'string';
};

exports.func = function(obj) {
  return typeof obj == 'function';
};

exports.canvas = function(obj) {
  return (
    obj != null &&
    obj.nodeName == 'CANVAS'
  );
};
