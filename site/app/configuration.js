'use strict';
define('app/configuration', [ './loglevels', './logicengine', './renderer', './mouse', 'text!app/config.json' ], function(LogLevels, LogicEngine, Renderer, MouseEvents, txtCfg) {

  var LOGLEVELS = new LogLevels();

  function Configuration() {
  }

  Configuration.prototype = {
    LOGLEVELS: LOGLEVELS,

    _currentLogLevel: LOGLEVELS.INFO,

    info: function(msg) {
      if (this._currentLogLevel <= LOGLEVELS.INFO) {
        console.log(msg);
      }
    },

    warn: function(msg) {
      console.warn(msg);
    },

    error: function(msg) {
      console.error(msg);
    },

    setData: function(data) {
      this.cfgOptions = data;
    },

    init: function(engine) {

        for (var i = 0; i < this.cfgOptions.modules.length; i++) {
          var modName = this.cfgOptions.modules[i];
          var mod = require(modName);
          engine.addModule(new mod());
        }

        this._currentLogLevel = this.cfgOptions.logLevel;
    }
  };



  return Configuration;
});
