var sys = require("sys");

// node.js script
// to run $node-dev function_args.js
// to exit ctrl-C

var putHello = function () {
    sys.puts("hello");
}

var addTwo = function (aNumber) {
  return aNumber += 2;
}

putHello();

var x = 3;
sys.puts("addTwo(" + x + "): " + addTwo(x));
sys.puts("x: " + x);


