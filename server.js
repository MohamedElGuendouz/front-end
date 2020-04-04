//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/front-end'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/front-end/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);
