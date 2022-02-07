const express = require('express');
const { getArray, getLength, sum, addItem } = require('./arr')

const app = express();
const port = 9003;

app.use(express.json());

// home
app.get('/', (req, res) => {
    res.send(`Welcome to our array operations API!\n Check these endpoints : [/items, /total, /sum, /rest]`)
})

// retrieving the array
app.get('/items', (req, res) => {
    res.send(`Array : ${getArray()}`)
})

// getting length of the array
app.get('/total', (req, res) => {
    res.send(`Array has ${getLength()} items`)
})

// getting sum of array items
app.get('/sum', (req, res) => {
    res.send(`Sum of the array is : ${sum()}`)
})


// adding item to the array via body
app.post('/items', (req, res) => {
    const item = req.body.item
    if(item == undefined) {
        res.send('<h1>Please provide item of type number<h1>')
    } else if(isNaN(item)){
        res.send('<h1>You can add numbers only<h1>')
    } else {
        let arr = addItem(item)
        res.send(`Item : ${item} added, Array : ${arr}`)
    }
})

// for unhandled endpoints
app.use((req, res) => {
    res.status(404)
    res.send('<h1>404 - Not Found</h1>')
})

// for server errors
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.send('<h1>500 - Server Error</h1>')
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`))