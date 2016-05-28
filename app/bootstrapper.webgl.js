'use strict';
define(function(require) {
  var Config = require('app/configuration.webgl');
  var RafEngine = require('lib/rafengine');

  var engine = new RafEngine();
  window.engine = engine;
  engine.setConfig(new Config());
});
