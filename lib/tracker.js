define('lib/tracker', function() {
  function Tracker() {
  };

  Tracker.prototype.update = function(newValue, min, max) {
    this._isDirty = (this.value !== newValue);
    this.value = newValue;

    if (min !== undefined) {
      if (this.value < min) {
        this.value = min;
      }
    }

    if (max !== undefined) {
      if (this.value > max) {
        this.value = max;
      }
    }
  }

  Tracker.prototype.isDirty = function() {
    return this._isDirty;
  }

  Tracker.prototype.applyChange = function(callback) {
    callback(this.value);
    this._isDirty = false;
  };

  return Tracker;
});
