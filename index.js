function distanceFromHqInBlocks(location) {
    const headquarters = 42
    return Math.abs(location - 42)
}
const distanceFromHqInFeet = (location) => {
    const totalFeet = distanceFromHqInBlocks(location) * 264
    return totalFeet
}
const distanceTravelledInFeet = (start, destination) => {
    if (start < destination) {
        return (destination - start) * 264
    } else if (start>destination) {
        return (start - destination) * 264
    }
}
const calculatesFarePrice = (start, destination) => {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance<400) {
        return 0
    } else if (distance > 400 && distance < 2000) {
        return(distance - 400) * .02
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else {
        return `cannot travel that far`
    }
}

    



