'use strict';
define(['lib/timestamp', 'lib/stat'], function(Timestamp, Statistic) {
  function RafEngine() {
    this.modules = [];
    this.stats = {};
    //this._raf();
  };

  RafEngine.prototype = {
    _raf: function() {
      requestAnimationFrame(this.think.bind(this));
    },

    setConfig: function(options) {
      this.options = options;
      this._raf();
    },

    addModule: function(module) {
      if (module.isPrototypeOf && module.hasOwnProperty && module.toString) {
        // test it has id property.
        if (module.id && module.initialize) {
          module.initialize();
          this.modules.push(module);
        } else {
          throw new Error('Module needs id property.')
        }
      } else {
        throw new Error('Module must be object');
      }
    },

    findModule: function(moduleId) {
      for (var i = 0; this.modules.length; i++) {
        var module = this.modules[i];
        if (module.id === moduleId) {
          return module;
        }
      }

      return null;
    },

    think: function() {
      for(var i = 0; i < this.modules.length; i++) {
        var start = new Timestamp();
        var module = this.modules[i];
        if (!module.stat) {
          module.stat = new Statistic();
        }
        module.think();
        var stop = new Timestamp();
        var diff = stop.subtract(start);
        module.stat.set((diff / 1000).toFixed(3));
        this.options.info(
          {
            type: 'info',
            module: module.id,
            seconds: module.stat.value,
            min: module.stat.min,
            max: module.stat.max
          }
        );
        this.stats[module.id] = module.stat;
      }

      this._raf();
    }
  }

  return RafEngine;
});
