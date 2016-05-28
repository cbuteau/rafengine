'use strict';
define(function() {
  function RafEngine() {
    this.modules = [];
    this._raf();
  };

  RafEngine.prototype = {
    _raf: function() {
      requestAnimationFrame(this.think.bind(this));
    },

    setConfig: function(options) {
      this.options = options;
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
      // TODO time each moodules thinks
      for(var i = 0; i < this.modules.length; i++) {
        var module = this.modules[i];
        module.think();
      }

      this._raf();
    }
  }

  return RafEngine;
});
