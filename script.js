let dice = document.getElementById("dice")
let degrees = 0
let steps = 0
let character = document.getElementById("character")
let map = document.getElementById("map")
let botplaying = false
let botsteps = 0
let diceroll = 1
let bot = document.getElementById("bot")
let maps = [
    "snakes n ladders2.png",
    "snakes0.png",
]
map.src = maps[Math.floor(Math.random()*2)]
function movecharacter() {
    if (!botplaying) {
        if (steps.toString().length == 1) {
            character.style.left = steps.toString() * 10 + "%"
        }
        else {
            if (Math.floor(steps / 10) % 2 == 0) {
                character.style.left = steps.toString()[1] * 10 + "%"
                character.style.bottom = (Math.floor(steps / 10)) * 10 + "%"

            }
            else {
                character.style.left = (9 - steps.toString()[1]) * 10 + "%"
                character.style.bottom = (Math.floor(steps / 10)) * 10 + "%"
            }
        }

    }
    else {
        if (botsteps.toString().length == 1) {
            bot.style.left = botsteps.toString() * 10 + "%"
        }
        else {
            if (Math.floor(botsteps / 10) % 2 == 0) {
                bot.style.left = botsteps.toString()[1] * 10 + "%"
                bot.style.bottom = (Math.floor(botsteps / 10)) * 10 + "%"

            }
            else {
                bot.style.left = (9 - botsteps.toString()[1]) * 10 + "%"
                bot.style.bottom = (Math.floor(botsteps / 10)) * 10 + "%"
            }
        }
    }
}

movecharacter()

dice.onclick = function () {
    // when you press - nothing happens
    dice.style.pointerEvents = "none"
    degrees = degrees + 1800
    // rotate the image
    dice.style.transform = "rotate(" + degrees + "deg)"



    let diceinterval = setInterval(() => {
        console.log("dice");
        diceroll = Math.floor(Math.random() * 6 + 1)

        // dice images could change
        dice.src = "dice" + diceroll + ".png"

    }, 100);
    setTimeout(() => {
        clearInterval(diceinterval)
        dice.style.pointerEvents = "auto"
        console.log(map.src)
        if (!botplaying) {
            let currentsteps = 0
           let currentinterval = setInterval(() => {
                steps = steps + 1
                currentsteps = currentsteps + 1
                if (currentsteps == diceroll){
                    botplaying = !botplaying
                    if (botplaying) {

                        // change the html
                        document.getElementById("player").innerHTML = "player: bot"
            
                    }
                    else {
                        document.getElementById("player").innerHTML = "player: human"
                    }
                    clearInterval(currentinterval)
                }
                movecharacter()
            },800);
            // steps = steps + diceroll
            // if (map.src.includes("snakes0")) {
            //     if (steps == 5) {
            //         steps = 26
            //     }
            //     else if (steps == 8) {
            //         steps = 49
            //     }
            //     else if (steps == 19) {
            //         steps = 38
            //     }
            //     else if (steps == 24) {
            //         steps = 56
            //     }
            //     else if (steps == 52) {
            //         steps = 71
            //     }
            //     else if (steps == 53) {
            //         steps = 84
            //     }
            //     else if (steps == 60) {
            //         steps = 81
            //     }
            //     else if (steps == 42) {
            //         steps = 15
            //     }
            //     else if (steps == 54) {
            //         steps = 33
            //     }
            //     else if (steps == 77) {
            //         steps = 41
            //     }
            //     else if (steps == 69) {
            //         steps = 47
            //     }
            //     else if (steps == 94) {
            //         steps = 72
            //     }
            //     else if (steps == 95) {
            //         steps = 81
            //     }
            // }
            // else if (map.src.includes("ladders")) {
            //     console.log("snakes and ladders")
            //     if (steps == 16) {
            //         steps = 41
            //     }
            //     else if (steps == 32) {
            //         steps = 52
            //     }
            //     else if (steps == 56) {
            //         steps = 95
            //     }
            //     else if (steps == 33) {
            //         steps = 12
            //     }
            //     else if (steps == 44) {
            //         steps = 37
            //     }
            //     else if (steps == 72) {
            //         steps = 49
            //     }
            //     else if (steps == 93) {
            //         steps = 62
            //     }
            // }
            // if (steps > 99) {
            //     steps = 99
            // }
        }
        else {
            botsteps = botsteps + diceroll
            if (map.src.includes("snakes0")) {
                if (botsteps == 5) {
                    botsteps = 26
                }
                else if (botsteps == 8) {
                    botsteps = 49
                }
                else if (botsteps == 19) {
                    botsteps = 38
                }
                else if (botsteps == 24) {
                    botsteps = 56
                }
                else if (botsteps == 52) {
                    botsteps = 71
                }
                else if (botsteps == 53) {
                    botsteps = 84
                }
                else if (botsteps == 60) {
                    botsteps = 81
                }
                else if (botsteps == 42) {
                    botsteps = 15
                }
                else if (botsteps == 54) {
                    botsteps = 33
                }
                else if (botsteps == 77) {
                    botsteps = 41
                }
                else if (botsteps == 69) {
                    botsteps = 47
                }
                else if (botsteps == 94) {
                    botsteps = 72
                }
                else if (botsteps == 95) {
                    botsteps = 81
                }
            }
            else if (map.src.includes("ladders")) {
                console.log("snakes and ladders")
                if (botsteps == 16) {
                    botsteps = 41
                }
                else if (botsteps == 32) {
                    botsteps = 52
                }
                else if (botsteps == 56) {
                    botsteps = 95
                }
                else if (botsteps == 33) {
                    botsteps = 12
                }
                else if (botsteps == 44) {
                    botsteps = 37
                }
                else if (botsteps == 72) {
                    botsteps = 49
                }
                else if (botsteps == 93) {
                    botsteps = 62
                }
            }
            if (botsteps > 99) {
                botsteps = 99
            }
        }

        // movecharacter()
       
    }, 2000)
}


