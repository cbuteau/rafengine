'use strict';
define('app/logicengine',['./circle', 'app/rect', 'app/multientity', 'lib/Maths'] , function(CircleEntity, RectangleEntity, MultiEntity, Maths) {

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
      for (var i = 0; i < 1000; i++) {
        this._makeCircle(rend, i);
      }
      for (var j = 0; j < 100; j++) {
        var rect = new RectangleEntity();
        rend.addEntity(rect);
        this.logicals.push(rect);
      }
      for (var k = 0; k < 1; k++) {
        var multi = new MultiEntity();
        var circle1 = new CircleEntity();
        circle1.setType(2);
        circle1.setFill('lightblue');
        var circle2 = new CircleEntity();
        circle2.setType(2);
        circle2.setFill('pink');
        multi.addEntity(circle1);
        multi.addEntity(circle2);

        rend.addEntity(multi);
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
