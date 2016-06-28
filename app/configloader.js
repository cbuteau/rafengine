define('app/configloader', [] , function() {
  function ConfigLoader() {

  }

  ConfigLoader.prototype.fetch = function(done) {
    var that = this;
    $.getJSON('http://localhost:8081/config', function(data) {
      console.log('Config loaded', data);
      that.data = data;
      done(that.data);
    });
  }

  return ConfigLoader;
});
