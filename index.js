const express = require('express'); 
const app = express(); 
const path = require('path'); 
const router = express.Router(); 

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/pages/home/index.html')); 
}); 

app.use('/', router);
app.use(express.static('public'));

app.listen(process.env.port || 80);
console.log('Running at Port ' + 80);
console.log('Local: http://localhost');
console.log('For devices on the same network, use http://192.168.1.145');
console.log('To kill this process, press Control + C or use Control + Z to pause it. Logs are below. \n');