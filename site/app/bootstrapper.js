'use strict';
define(function(require) {
  var Config = require('app/configuration');
  var RafEngine = require('lib/rafengine');
  var ConfigLoader = require('app/configloader');

  var config = new Config();

  var loader = new ConfigLoader();
  loader.fetch(function done(data) {
    console.log(data);
    config.setData(data);
    var engine = new RafEngine();
    window.engine = engine;
    engine.setConfig(config);
  });
});
