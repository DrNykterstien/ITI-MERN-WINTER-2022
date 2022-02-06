const fs = require('fs');

fs.readFile("../students.json", (err, data) => {
    if(err) console.log(err);
    var students = JSON.parse(data);
    console.log(students);
})
