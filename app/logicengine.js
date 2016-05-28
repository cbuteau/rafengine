'use strict';
define(['./circle', 'lib/Maths'] , function(CircleEntity, Maths) {

  function LogicEngine() {
    this.maths = new Maths();
    this.id = 'LogicEngine';
    this.logicals = [];
    //this.init();
  }

  LogicEngine.prototype.think = function() {
    // Randomly move all entities.
    for (var i = 0; i < this.logicals.length; i++) {
      var logic = this.logicals[i];
      logic.think();
    }
  };

  LogicEngine.prototype.initialize = function() {
    var mouse = window.engine.findModule('MouseEvents');
    var that = this;
    mouse.subscribe('click', function(event) {
      //var index = that.maths.randInt(200, 1000);
      var rend = window.engine.findModule('Renderer');
      that._makeCircleDrop(rend, event);
      //that._makeCircle(rend, index);
    });
    var rend = window.engine.findModule('Renderer');
    if (rend) {
      for (var i = 0; i < 100; i++) {
        this._makeCircle(rend, i);
      }
    }
  };

  LogicEngine.prototype.init = function() {
    var circle = new CircleEntity();
    var rend = window.engine.findModule('Renderer');
    if (rend) {
      rend.addEntity(circle);
      this.logicals.push(circle);
    }
  };

  LogicEngine.prototype._makeCircleDrop = function(rend, event) {
    var circle = new CircleEntity();
    circle.cx = event.offsetX;
    circle.cy = event.offsetY;
    circle.setType(1);
    circle.setXY(event.offsetX, event.offsetY);
    rend.addEntity(circle);
    this.logicals.push(circle);
  }

  LogicEngine.prototype._makeCircle = function(rend, i) {
    var circle = new CircleEntity();
    rend.addEntity(circle);
    this.logicals.push(circle);
  };

  return LogicEngine;
})
