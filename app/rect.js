'use strict';
define('app/rect',['lib/maths', 'lib/tracker'], function(Maths, Tracker) {
  function RectangleEntity() {
    // Singleton with no new.
    this.maths = Maths();
    this.id = 'rect_' + this.maths.getUniqueId();
    this.direction = 1;
    this._type = 0;
  };

  RectangleEntity.prototype = {
    initialize: function(screen, context) {
      this.context = context;
      this.x = new Tracker();
      this.x.update(this.maths.randInt(0, context.width), 0, context.width);
      this.y = new Tracker();
      this.y.update(this.maths.randInt(0, context.width), 0, context.width);
      this.width = new Tracker();
      this.width.update(this.maths.randInt(5, 10));
      this.height = new Tracker();
      this.height.update(this.maths.randInt(5, 10));

      var node = screen.context.createElementNS('http://www.w3.org/2000/svg', 'rect');
      node.setAttribute('x', this.x.value);
      node.setAttribute('cy', this.y.value);
      node.setAttribute('width', this.width.value);
      node.setAttribute('height', this.height.value);
      node.setAttribute('id', this.id);
      node.setAttribute('stroke', 'blue');
      node.setAttribute('fill', 'green');
      screen.get(0).appendChild(node);

      this.elem = $('#' + this.id);
    },
    think: function() {
      switch (this._type) {
        case 0:
          this._thinkDrift();
          break;
        default:
          break;
      }
    },
    _thinkDrift: function() {
      switch (this.direction) {
        case 1:
          this.x.update(this.x.value + 1, 0, this.context.width);
          if (this.x.value === this.context.width) {
            this.direction = this.maths.randInt(1,4);
          }
          break;
        case 2:
          this.x.update(this.x.value - 1, 0, this.context.width);
          if (this.x.value === 0) {
            this.direction = this.maths.randInt(1,4);
          }
          break;
        case 3:
          this.y.update(this.y.value + 1, 0, this.context.height);
          if (this.y.value === this.context.height) {
            this.direction = this.maths.randInt(1,4);
          }
          break;
        case 4:
          this.y.update(this.y.value - 1, 0, this.context.height);
          if (this.y.value === 0) {
            this.direction = this.maths.randInt(1,4);
          }
          break;
      }
    },
    render: function(screen) {
      var that = this;
      this.x.applyChange(function(value) {
        that.elem.attr('x', value);
      });
      this.y.applyChange(function(value) {
        that.elem.attr('y', value);
      });
      this.width.applyChange(function(value) {
        that.elem.attr('width', value);
      });
      this.height.applyChange(function(value) {
        that.elem.attr('height', value);
      });
    }
  }

  // RectangleEntity.prototype.initialize = function(screen, context) {
  //     this.context = context;
  //     this.x = new Tracker();
  //     this.x.update(this.maths.randInt(0, context.width), 0, context.width);
  //     this.y = new Tracker();
  //     this.y.update(this.maths.randInt(0, context.width), 0, context.width);
  //     this.width = new Tracker();
  //     this.width.update(this.maths.randInt(5, 10));
  //     this.height = new Tracker();
  //     this.height.update(this.maths.randInt(5, 10));
  //
  //     var node = screen.context.createElementNS('http://www.w3.org/2000/svg', 'rect');
  //     node.setAttribute('x', this.x.value);
  //     node.setAttribute('cy', this.y.value);
  //     node.setAttribute('width', this.width.value);
  //     node.setAttribute('height', this.height.value);
  //     node.setAttribute('id', this.id);
  //     node.setAttribute('stroke', 'blue');
  //     node.setAttribute('fill', 'green');
  //     screen.get(0).appendChild(node);
  //
  //     this.elem = $('#' + this.id);
  // };
  //
  // RectangleEntity.prototype.think = function() {
  //   switch (this.direction) {
  //     case 1:
  //       this.x.update(this.x.value + 1, 0, this.context.width);
  //       if (this.x.value === this.context.width) {
  //         this.direction = this.maths.randInt(1,4);
  //       }
  //       break;
  //     case 2:
  //       this.x.update(this.x.value - 1, 0, this.context.width);
  //       if (this.x.value === 0) {
  //         this.direction = this.maths.randInt(1,4);
  //       }
  //       break;
  //     case 3:
  //       this.y.update(this.y.value + 1, 0, this.context.height);
  //       if (this.y.value === this.context.height) {
  //         this.direction = this.maths.randInt(1,4);
  //       }
  //       break;
  //     case 4:
  //       this.y.update(this.y.value - 1, 0, this.context.height);
  //       if (this.y.value === 0) {
  //         this.direction = this.maths.randInt(1,4);
  //       }
  //       break;
  //   }
  // };
  //
  // RectangleEntity.prototype.render = function(screen) {
  //   var that = this;
  //   this.x.applyChange(function(value) {
  //     that.elem.attr('x', value);
  //   });
  //   this.y.applyChange(function(value) {
  //     that.elem.attr('y', value);
  //   });
  //   this.width.applyChange(function(value) {
  //     that.elem.attr('width', value);
  //   });
  //   this.height.applyChange(function(value) {
  //     that.elem.attr('height', value);
  //   });
  // };
  return RectangleEntity;
});
