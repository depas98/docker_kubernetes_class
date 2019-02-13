const express = require('express');
const redis = require('redis');

const app = express();
// had to change because docker toolbox runs on 192.168.99.100 not localhost
// const client = redis.createClient(); 
const client = redis.createClient({host: "192.168.99.100", port: 6379});    

//  initialize teh visits value on the redis server
client.set('visits', 0);

app.get("/", (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1)
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});

