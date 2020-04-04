//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/front-end'));

app.get('/*', function(req,res) {
  res.sendFile(__dirname+ '/dist/front-end/src/index.html');
});

// default Heroku port
app.listen(process.env.PORT || 8080);
