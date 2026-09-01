// ## Question 1: Value Detective 
function describeValue(value) {
    const DataType = typeof value
    if (!!value) {
        return (`"${DataType} | truthy"`)
    }
    else {
        return (`"${DataType} | falsy"`)
    }
}