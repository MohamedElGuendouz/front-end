const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/front-end'));

app.get('*', (req, res) => {
    res.sendFile(`./front-end/dist/index.html`); // load the single view file (angular will handle the page changes on the front-end)
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);
