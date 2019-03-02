const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
// had to change because docker toolbox runs on 192.168.99.100 not localhost
// const client = redis.createClient(); 
// const client = redis.createClient({host: "192.168.99.100", port: 6379});    
// this works because of docker compose
const client = redis.createClient({
    host: 'redis-server', 
    port: 6379});

//  initialize the visits value on the redis server
client.set('visits', 0);

app.get("/", (req, res) => {
    // process.exit(0);    // this will crash the server, 0 is the exist code and everything is OK
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1)
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});
