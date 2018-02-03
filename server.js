import express from 'express'
import logger from 'morgan';
import bodyParser from 'body-parser';

const app = express()
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// app.get('*', (req, res) => {
//     res.send('hello world');
//   });

app.get('/', (req, res) => {
res.send(
    { message: 'it works' });
});

app.get('/test', (req, res) => {
    res.send(
        { message: 'this is the test endpoint' });
    });
  



    
app.listen(8000, () => {
    console.log('express app started on port 8000' ,);
});