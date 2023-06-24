const point = function (num) {
  return num.map(function (x) {
    if (x >= 80 && x <= 100) {
      return 5.0;
    } else if (x >= 70 && x <= 79) {
      return 4.0;
    } else if (x >= 60 && x <= 69) {
      return 3.5;
    } else if (x >= 50 && x <= 59) {
      return 3.0;
    } else if (x >= 40 && x <= 49) {
      return 2;
    } else if (x >= 33 && x <= 39) {
      return 1;
    } else if (x >= 0 && x <= 32) {
      return 0;
    }
  });
};

