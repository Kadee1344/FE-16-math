var htutil = require('./htutil');

exports.get = function(req, res) {
  res.writeHead('200', {'Content-Type': 'text/html'});

  var result = req.a * req.b;
  res.end(
    htutil.page('Multiplication', htutil.navbar(), [
      (!isNaN(req.a) && !isNaN(req.b) ?
        ("<p class='result'>{ " + req.a + " } * { " + req.b + " } = { " + result + " }</p>")
        : ""),
      "<p>Enter number to mult</p>",
      "<form name='mult' action='/mult' method='get'>",
      "A: <input type='text' name='a'><br/>",
      "B: <input type='text' name='b'><br/>",
      "<input type='submit' value='Submit'/>",
      "</form>"
    ]).join('\n'));
}
