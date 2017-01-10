var express = require("express");
var multer = require("multer");
var upload = multer();
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.post('/get-file-size', upload.single('fileToUpload'), function (req, res) {
    res.send({size: req.file.size});
});

app.get('/', function (req, res) {
    res.send('index.html'); 
});

app.listen(PORT, function () {
    console.log('Server listening to port: ' + PORT);
});