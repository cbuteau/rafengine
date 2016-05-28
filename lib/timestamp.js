define([], function() {
  function Timestamp() {
    this.value = new Date().getTime();
  };

  Timestamp.prototype.lessThan(that) {
    return (this.value < that.value);
  };



  return Timestamp;
})
