function calculateMark (mark) { 
     
    if (mark > 79) {
        console.log ("A")
    }
    else if (mark>= 60) {
        console.log ("B")
    }
    else if  (mark>= 59) {
        console.log ("C")
    }
    else if (mark>= 40) {
        console.log ("D")
    }
    else if (mark< 40) {
        console.log ("E")
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('input your mark?', mark => {
    let converted_mark = parseInt(mark)
    calculateMark(converted_mark)
    readline.close();
  });
