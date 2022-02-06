const http = require('http');
const fs = require('fs');


const httpServer = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/html')
    if(req.url == '/home'){
        res.writeHead(200);
        res.write('<strong>Welcome to our API</strong>')
        res.end()
    }
    else if(req.url == '/students'){
        res.setHeader('Content-Type', 'application/json')
        fs.readFile('../students.json', function(err, data) {
            if (err) {
                throw err; 
            }

            res.write(data)
            res.end()
        })

    }
    else if(req.url.startsWith('/students')){
        fs.readFile('../students.json', function(err, data) {
            if (err) {
                throw err; 
            }
            var index = parseInt(req.url.split('/')[2])
            if(index < 1) {
                res.write('Not found')
            } else {
                var students = JSON.parse(data)
                var student = students[index-1]
                if(!student) {
                    res.write('Not found')
                } else {
                    res.write(`id: ${student['id']}, name: ${student['name']}`)
                    res.end()
                }
            }
        })
    }
    else if(req.url == '/iti'){
        fs.readFile('../index.html', function(err, html) {
            if (err) {
                throw err; 
            }
            res.writeHeader(200, {"Content-Type": "text/html"});
            res.write(html)
            res.end()
        })
    } else {
        res.write("<h1>404 not found</h1>")
        res.end()
    }

})

var port = 5000;
httpServer.listen(port)
console.log(`listening on port ${port}...`);