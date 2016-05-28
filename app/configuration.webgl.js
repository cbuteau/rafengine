'use strict';
define([ './loglevels', './logicengine', './renderer.webgl', './mouse' ], function(LogLevels, LogicEngine, Renderer, MouseEvents) {

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
        window.engine.addModule(new Renderer());
        window.engine.addModule(new MouseEvents());
        window.engine.addModule(new LogicEngine());
    }
  };



  return Configuration;
});
