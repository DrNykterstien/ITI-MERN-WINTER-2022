const express = require('express');
const fs = require('fs');

const app = express();
const port = 9003;
app.use(express.json());

// home
app.get('/', (req, res) => {
    res.send(`Welcome to our products api`)
})

// retrieving products
app.get('/products', (req, res) => {
    res.sendFile(__dirname+ '/' + 'products.json')
})

// retrieving certian product
app.get('/products/:id', (req, res) => {
    
    fs.readFile('products.json', function(err, data) {
        if (err) {
            throw err; 
        }
        var index = parseInt(req.params.id)
        if(index < 1) {
            res.send('<h1>Not found</h1>')
        } else {
            var products = JSON.parse(data)
            var product = products[index-1]
            if(!product) {
                res.send('<h1>Not found</h1>')
            } else {
                res.send(`id: ${product['id']}, name: ${product['name']}`)
            }
        }
    })
    
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