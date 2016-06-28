define('app/multientity',[], function() {
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
    initialize: function(screen, context) {
      for (var i = 0; i < this.entities.length; i++) {
        var entity = this.entities[i];
        entity.initialize(screen, context);
      }
    },
    render: function(screen) {
      for (var i = 0; i < this.entities.length; i++) {
        var entity = this.entities[i];
        entity.render(screen);
      }
    }
  };

  return MultiEntity;
});
