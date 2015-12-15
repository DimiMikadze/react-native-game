var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/images/', express.static(path.join(__dirname, 'images')));

app.get('/api/:data', function(req, res) {

    var file = path.join(__dirname, 'questions/' + req.params.data + '.json');

    fs.readFile(file, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.setHeader('Cache-Control', 'no-cache');
        res.json(JSON.parse(data));
    });
});

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});