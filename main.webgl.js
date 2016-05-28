'use strict';

requirejs.config({
  baseUrl: 'lib',
  paths: {
    app: '../app',
    lib: '../lib'
  },
  text: {
    useXhr: function(url, protocol, hostname, port) {
      return true;
    }
  }
});

requirejs(['app/bootstrapper.webgl']);
