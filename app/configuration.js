'use strict';
define([ './loglevels', './logicengine', './renderer', './mouse', 'text!app/config.json' ], function(LogLevels, LogicEngine, Renderer, MouseEvents, txtCfg) {

  var LOGLEVELS = new LogLevels();

  function Configuration() {
    this.init();
  }

  Configuration.prototype = {
    LOGLEVELS: LOGLEVELS,

    _currentLogLevel: LOGLEVELS.INFO,

    info: function(msg) {
      if (this._currentLogLevel >= LOGLEVELS.INFO) {
        console.log(msg);
      }
    },

    warn: function(msg) {
      console.warn(msg);
    },

    error: function(msg) {
      console.error(msg);
    },

    init: function() {
        this.cfgOptions = JSON.parse(txtCfg);

        for (var i = 0; i < this.cfgOptions.modules.length; i++) {
          var modName = this.cfgOptions.modules[i];
          var mod = require(modName);
          window.engine.addModule(new mod());
        }

        // window.engine.addModule(new Renderer());
        // window.engine.addModule(new MouseEvents());
        // window.engine.addModule(new LogicEngine());
    }
  };



  return Configuration;
});
