'use strict';
define(['lib/maths', 'lib/tracker'], function(Maths, Tracker) {
  function CircleEntity() {
    // Because it is a singleton.
    //jshint -W
    this.maths = Maths();
    this.cxT = new Tracker();
    this.cxT.update(this.maths.randInt(0, 300));
    this.cyT = new Tracker();
    this.cyT.update(this.maths.randInt(0,300));
    this.rT = new Tracker();
    this.rT.update(10);
    this._type = 0;
    this.id = 'circle_' + this.maths.getUniqueId();
  };

  CircleEntity.prototype.initialize = function(screen) {
    var node = screen.context.createElementNS('http://www.w3.org/2000/svg', 'circle');
    node.setAttribute('cx', this.cxT.value);
    node.setAttribute('cy', this.cyT.value);
    node.setAttribute('r', this.rT.value);
    node.setAttribute('id', this.id);
    node.setAttribute('stroke', 'black');
    node.setAttribute('fill', 'red');
    screen.get(0).appendChild(node);

    this.elem = $('#' + this.id);
  };

  CircleEntity.prototype.think = function() {
    if (this._type === 0) {
      this.randomDrift();
    } else if (this._type === 1) {
      this.drop();
    } else if (this._type === 2) {
      // maybe float.
    }
  };

  CircleEntity.prototype.setXY = function(x, y) {
    this.cxT.update(x);
    this.cyT.update(y);
  };

  CircleEntity.prototype.render = function(screen) {
    var that = this;
    this.cxT.applyChange(function(value) {
      that.elem.attr('cx', value);
    });
    this.cyT.applyChange(function(value) {
      that.elem.attr('cy', value);
    });
    this.rT.applyChange(function(value) {
      that.elem.attr('r', value);
    });
  };

  CircleEntity.prototype.setType = function(type) {
    this._type = type;
  };

  CircleEntity.prototype.randomDrift = function() {
    var diffx = this.maths.randInt(-10, 10);
    var diffy = this.maths.randInt(-10, 10);

    this.cxT.update(this.cxT.value + diffx, 0, 300);
    this.cyT.update(this.cyT.value + diffy, 0, 300);
  }

  CircleEntity.prototype.drop = function() {
    this.cyT.update(this.cyT.value += 1, 0, 300);
    this.cy += 1;
    if (this.cy > 300) {
      this.cy = 300;
    }
  };


  return CircleEntity;
});
