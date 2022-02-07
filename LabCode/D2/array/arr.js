const arr = []

exports.getArray = () => {
    return arr
}

exports.getLength = () => {
    return arr.length
}

exports.sum = () => {
    let sum = arr.reduce(function(a, b){
        return a + b
    }, 0);
    return sum
}

exports.addItem = item => {
    arr.push(item)
    return arr
}
