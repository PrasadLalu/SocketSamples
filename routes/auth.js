
exports.test = function(req, res) {
    console.log('Yes');
    let x = 10;
    setInterval(() => {
        x = x + 10;
        console.log(x);
    }, 1);
    res.send({'key': 10});
    res.io.emit("socketTest", x);
}