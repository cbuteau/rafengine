define([], function() {
  function MultiEntity() {
    this.entities = [];
  };

  MultiEntity.prototype = {
    addEntity: function(entity) {
      this.entities.push(entity);
    },
    think: function() {
      // movement realtive to a center point.
    },
    render: function(screen) {

    }
  };
});
