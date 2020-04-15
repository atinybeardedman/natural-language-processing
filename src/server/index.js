const express = require('express')
const cors = require('cors');
const aylien = require('aylien_textapi');
const dotenv = require('dotenv');
dotenv.config();

const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()

app.use(express.static('dist'));
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/summarize', function (req, res) {
    textapi.summarize({
        url: req.query.url,
    }, (err, summary) => {
        if(err === null){
            res.send(summary);
        } else {
            res.status(400).send({
                message: "Whoops, that url couldn't be understood. Try a different one."
            })
        }
    });
})
