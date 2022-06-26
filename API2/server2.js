const express = require('express');
const app = express();
const port = 3000;
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

/********************* ENDPOINT TYPE POST *********************/
app.post('/resta', (req, res)=>{
    const n1 = Number(req.query.num1)
    const n2 = Number(req.query.num2)
    
    const result = n1 - n2
    console.log(result)
    res.send(`El resultado de ${n1} - ${n2} es ${result}`)
})

/**************************************************************/
app.listen(port, () => {
    console.log(`Server start on port ${port}`);
})