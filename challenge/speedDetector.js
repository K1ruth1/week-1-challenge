const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Input carspeed',(speed)=> {
    const carspeed = parseInt(speed)
    demeritPointsCalculator(carspeed)
    readline.close()
  } )

function demeritPointsCalculator(speed){
    const speedLimit = 70
    const speedAboveLimit = 5

    if (speed <= speedLimit){
        console.log ("Points = 0")
    }
    else {
        const Points =  ((speed - speedLimit/speedAboveLimit))
        if (Points > 12) {
            console.log ("License suspended")
         }
         else {
            console.log ("Points = " + Points)
         }
    }
}

