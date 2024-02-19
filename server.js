var os = require('os');
var process = require('process');
var express = require('express');
var cors = require('cors');
var app = express();


app.use(express.static('public'));

app.use(cors()); 
app.get('/api/systeminfo', function(req, res) {
    var systemInfo = {
        cpus: os.cpus(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        processMemoryUsage: process.memoryUsage()
    };
    res.json(systemInfo);
});

app.listen(4569, function() {
    console.log('System info API is running on http://localhost:4569');
});
