const express = require('express');

const app = express();
const port = 9003;

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


// home
app.get('/', (req, res) => {
    res.send(`Welcome ITI Aswan home !. Check these endpoints : [/iti, /login]`)
})

// retrieve itiaswan document
app.get('/iti', (req, res) => {
    res.sendFile(__dirname+ '/' + 'itiaswan.html')
})

// retrieve login document that uses post verb
app.get('/entry', (req, res) => {
    res.sendFile(__dirname+ '/' + 'login.html')
})

// retrieve login document that uses get verb
app.get('/entrya', (req, res) => {
    res.sendFile(__dirname+ '/' + 'login2.html')
})

// login via post query string
app.get('/login', (req, res) => {
    const {username, password} = req.query
    if(username && password) {
        res.send(`<h1> Welcome ${username} </h1>`)

    } else {
        res.send('<h1> You must provide username and password </h1>')
    }
})

// login via post req body
app.post('/login', (req, res) => {
    const {username, password} = req.body
    console.log(username, password)
    if(username && password) {
        res.send(`<h1> Welcome ${username} </h1>`)

    } else {
        res.send('<h1> You must provide username and password </h1>')
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