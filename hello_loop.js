var puts = require("sys").puts;

// node.js script

// loop print hello
setInterval(
    function () {
    puts("hello");
},
500
);

// ctrl-C to exit prints "good bye"
process.addListener(
    "SIGINT",
    function () {
        puts("good bye");
        process.exit(0);
    }
);
