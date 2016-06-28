'use strict';
define('app/circle',['lib/maths', 'lib/tracker'], function(Maths, Tracker) {
  function CircleEntity() {
    // Because it is a singleton.
    //jshint -W
    this.maths = Maths();
    this.cx = new Tracker();
    this.cx.update(this.maths.randInt(0, 300));
    this.cy = new Tracker();
    this.cy.update(this.maths.randInt(0,300));
    this.r = new Tracker();
    this.r.update(10);
    this._type = 0;
    this.setFill('red');
    this.setStroke('black');
    this.id = 'circle_' + this.maths.getUniqueId();
  };

  CircleEntity.prototype.initialize = function(screen, context) {
    this.context = context;

    this.cx.update(this.maths.randInt(0, this.context.width));
    this.cy.update(this.maths.randInt(0, this.context.height));


    var node = screen.context.createElementNS('http://www.w3.org/2000/svg', 'circle');
    node.setAttribute('cx', this.cx.value);
    node.setAttribute('cy', this.cy.value);
    node.setAttribute('r', this.r.value);
    node.setAttribute('id', this.id);
    node.setAttribute('stroke', this._stroke);
    node.setAttribute('fill', this._fill);
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
    this.cx.update(x);
    this.cy.update(y);
  };

  CircleEntity.prototype.render = function(screen) {
    var that = this;
    this.cx.applyChange(function(value) {
      that.elem.attr('cx', value);
    });
    this.cy.applyChange(function(value) {
      that.elem.attr('cy', value);
    });
    this.r.applyChange(function(value) {
      that.elem.attr('r', value);
    });
  };

  CircleEntity.prototype.setType = function(type) {
    this._type = type;
  };

  CircleEntity.prototype.setFill = function(fill) {
    this._fill = fill;
  };

  CircleEntity.prototype.setStroke = function(stroke) {
    this._stroke = stroke;
  };

  CircleEntity.prototype.randomDrift = function() {
    var diffx = this.maths.randInt(-10, 10);
    var diffy = this.maths.randInt(-10, 10);

    this.cx.update(this.cx.value + diffx, 0, this.context.width);
    this.cy.update(this.cy.value + diffy, 0, this.context.height);
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
