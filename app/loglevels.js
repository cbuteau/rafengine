'use strict';
define('app/loglevels', function() {
  function LOGLEVELS() {
    this.INFO = 0;
    this.WARN = 1;
    this.ERROR = 2;
  }

  // LOGLEVELS.prototype = {
  //   INFO: 0,
  //   WARN: 1,
  //   ERROR: 2
  // };

  return LOGLEVELS;
});
