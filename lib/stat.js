define('lib/stat', function(){
  function Statistic() {
    this.min = Number.MAX_SAFE_INTEGER;
    this.max = Number.MIN_SAFE_INTEGER;
  };

  Statistic.prototype.set = function(value) {
    this.value = value;
    if (this.value < this.min) {
      this.min = this.value;
    }

    if (this.value > this.max) {
      this.max = this.value;
    }
  }

  return Statistic;
});
