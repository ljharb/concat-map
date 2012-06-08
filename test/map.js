var concatMap = require('../');
var test = require('tap').test;

test('concat mapping', function (t) {
    var xs = [ 1, 2, 3, 4, 5, 6 ];
    var ys = concatMap(xs, function (x) {
        return x % 2 ? [ x - 0.1, x, x + 0.1 ] : [];
    });
    t.same(ys, [ 0.9, 1, 1.1, 2.9, 3, 3.1, 4.9, 5, 5.1 ]);
    t.end();
});
