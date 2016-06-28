define([], function() {
  function MouseEvents() {
    this.id = 'MouseEvents';
  };

  MouseEvents.prototype.initialize = function() {
    this.screen = $('#screen');
  };

  MouseEvents.prototype.subscribe = function(key, callback) {
    // jQuery magic ties it up.
    this.screen[key](callback);
  };

  MouseEvents.prototype.think = function() {
  };

  return MouseEvents;
});
