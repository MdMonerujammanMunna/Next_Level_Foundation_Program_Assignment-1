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


// ## Question 3: Username Gatekeeper 
function validateUsername(UserName) {
    if (UserName.length < 4) {
        return "Too Short"
    }
    else if (UserName.includes(" ")) {
        return "No Space Allowed"
    }
    else if (UserName.toLowerCase().includes("admin")) {
        return "Reserved Word"
    }
    else {
        return "Available"
    }
}


// ## Question 4: Dhaka CNG Fare Meter 
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let Total = 0
    if (distance <= 2) {
        Total = 50
    }
    else if (distance > 2) {
        Total = ((distance - 2) * 15) + 50
    }
    if (waitingMinutes) {
        MintChg = waitingMinutes * 2
        Total = Total + MintChg
    }
    if (isNight === true) {
        let ExtraChg = (Total * 20) / 100
        Total = Total + ExtraChg
    }
    return Total
}