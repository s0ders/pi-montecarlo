const r = 1

/**
 * Check if a point is inside the circle.
 */
const landedIn = (x, y) => {
    return x**2 + y**2 < r**2
}

/**
 * Generates zero-centered float from -2 to 2.
 */
const randomFloat = (from, to) => {
    return Math.random() < 0.5 ? (Math.random() - 0.5) * - (r*2) : (Math.random() - 0.5) * (r*2)
}

/**
 * Run a simulation by generating a number of points
 * with pseudo-random coordinates and approximate PI
 * using the number of points inside the circle of 
 * radius r divided by the total number of points.
 */
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

    console.log(`PI estimation: ${piEstimation}`)
}

montecarloSimulation(100000000)