exports.min = function min(array) {
    if (Math.min.apply(null, array) !== Infinity) {
        return Math.min.apply(null, array);
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (!array || array.length === 0) {
        Math.max.apply(null, array);
        return 0;
    } else {
        return Math.max.apply(null, array);
    }
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        return array.reduce((a, b) => a + b, 0) / array.length;
    }
};
