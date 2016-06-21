'use strict';
define(['./context'], function(Context) {

  function Renderer() {
    this.id = 'Renderer';
    this.entities = [];
  };

  Renderer.prototype.initialize = function() {
    this.screen = $('#screen');
    this.context = new Context(this.screen.width(), this.screen.height());
    this.size = [this.screen.width(), this.screen.height()];
    //this.screenDom = this.screen.get(0);
  };


  Renderer.prototype.addEntity = function(entity) {
    this.entities.push(entity);
  };

  // This is because in the optimization of JS code...this is one thing that cannot be optimized
  // so we segregate it to a small bit.
  function unoptimizedTrap(callback) {
    try {
      callback();
    } catch (e) {
      console.error(e);
    }
  }

  Renderer.prototype.think = function() {
    //var screen = $('screen');
    for (var i = 0; i < this.entities.length; i++) {
      var entity = this.entities[i];
      var that = this;
      unoptimizedTrap(function() {
        if (entity.isInitialized) {
          entity.render(that.screen);
        } else {
          entity.initialize(that.screen, that.context);
          entity.isInitialized = true;
        }
      })
    }
  };


  return Renderer;
})
