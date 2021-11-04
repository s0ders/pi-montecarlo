const r = 1

const landedIn = (x, y) => {
    return x**2 + y**2 < r**2
}

const randomFloat = (from, to) => {
    return Math.random() < 0.5 ? (Math.random() - 0.5) * - (r*2) : (Math.random() - 0.5) * (r*2)
}

const montecarloSimulation = (maxPoints) => {
    let pointsOut = 0
    let pointsIn = 0

    for(i = 0; i < maxPoints; i++) {
        let pointCoordinates = {
            x: randomFloat(),
            y: randomFloat()
        }

        landedIn(pointCoordinates.x, pointCoordinates.y) ? pointsIn++ : pointsOut++
    }

    const piEstimation = 4*pointsIn/maxPoints
    
    return piEstimation
}

console.log(montecarloSimulation(10e6))
