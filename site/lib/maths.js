define([], function() {

  var instance = null;

  function Maths() {
    this.id = 0;
  };

  Maths.prototype.randInt = function(min, max) {
    // inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  Maths.prototype.getUniqueId = function() {
    var current = this.id;
    this.id++;
    return current;
  };

  return function getInstance() {
    instance = instance || new Maths();
    return instance;
  }

  return Maths;
})
