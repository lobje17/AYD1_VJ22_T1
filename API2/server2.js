const express = require('express');
const app = express();
const port = 4000;
const morgan = require('morgan');

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


/********************** ENDPOINT TYPE GET **********************/
app.get('/', (req, res)=>{
    res.send('Server start')
})

app.get('/info', (req, res)=>{
    res.send('Salvador de Jesus Lopez Bautista - 201314059')
})

/**************************************************************/
app.listen(port, () => {
    console.log(`Server start on port ${port}`);
})