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


// ## Question 2: Bangladesh Weekend Machine 
function getDayType(Days) {
    const Day = Days.toLowerCase()
    switch (Day) {
        case "friday":
        case "saturday":
            return "Weekend"
            break;
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day"
            break
        default:
            return "Invalid Day"
            break;
    }
}
