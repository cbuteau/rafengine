'use strict';
define([], function() {

  function Renderer() {
    this.id = 'Renderer';
    this.entities = [];
  };

  Renderer.prototype.initialize = function() {
    this.screen = $('#screen');
    this.size = [this.screen.width(), this.screen.height()];
    //this.screenDom = this.screen.get(0);
    this.gl = this.screen[0].getContect('webgl');
    this.gl.viewportWidth = this.screen.width();
    this.gl.viewportHeight = this.screen.height();
  };


  Renderer.prototype.addEntity = function(entity) {
    this.entities.push(entity);
  };

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
          entity.initialize(that.screen);
          entity.isInitialized = true;
        }
      })
    }
  };


  return Renderer;
})
