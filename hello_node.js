var sys = require("sys");

// node.js script
// print hello, then after timeout print world

setTimeout( function () {
    sys.puts("world");
}, 2000);

sys.puts("hello");

