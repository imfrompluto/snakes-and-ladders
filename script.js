let dice = document.getElementById("dice")
let degrees = 0
let steps = 0
let character = document.getElementById("character")
let map = document.getElementById("map")
let botplaying = false
let botsteps = 0
let diceroll = 1
let bot = document.getElementById("bot")
let victory = document.getElementById("victory")
let diceinterval
let currentinterval
let button = document.getElementById("button")
// fuction calls from html. needed when the try again button is pressed and reset the game
function again(){
    steps = 0
    botsteps = 0
    victory.style.opacity = 0
    bot.style.left = 0
    character.style.left = 0
    bot.style.bottom = 0
    character.style.bottom = 0
    dice.style.pointerEvents = "auto"
    clearInterval(diceinterval)
    clearInterval(currentinterval)
    botplaying = false
    document.getElementById("player").innerHTML = "player: human"
    button.style.opacity = 0
}
// Array
let maps = [
    "snakes n ladders2.png",
    "snakes0.png",
]
button.style.opacity = 0
map.src = maps[Math.floor(Math.random() * 2)]
function movecharacter() {
    console.log(steps);
    if (!botplaying) {
        // if the player is on the first row of the board (1 number numbers)
        if (steps.toString().length == 1) {

            character.style.left = steps* 10 + "%"
        }
        else {
            // if the player is on an even row
            if (Math.floor(steps / 10) % 2 == 0) {
                // needed for the player to move from the left to wherever he needs. toString()[1] is needed to take out the secon digit of the number
                character.style.left = steps.toString()[1] * 10 + "%"
                character.style.bottom = (Math.floor(steps / 10)) * 10 + "%"

            }
            else {
                // 9 - because the player is coming frpm the other side (odd row)
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
// function for the character to move
movecharacter()

dice.onclick = function () {
    // when you press - nothing happens
    dice.style.pointerEvents = "none"
    degrees = degrees + 1800
    // rotate the image
    dice.style.transform = "rotate(" + degrees + "deg)"


    // without the interval the dice wont change pictures when rotating
        diceinterval = setInterval(() => {
        console.log("dice");
        diceroll = Math.floor(Math.random() * 6 + 1)
        // dice images could change
        dice.src = "dice" + diceroll + ".png"
    }, 100);
    // to wait until the dice stops rotating
    setTimeout(() => {
        // stops the repeated execution
        clearInterval(diceinterval)
        console.log(map.src)
        if (!botplaying) {
            // how many steps the player made after the dice roll
            let currentsteps = 0
            // needed for the player to go one step at a time
            currentinterval = setInterval(() => {
                console.log(steps);
                // if the needed amount of steps were completed
                if (currentsteps == diceroll) {
                    clearInterval(currentinterval)
                    // to allow the user to press on the dice again 
                    dice.style.pointerEvents = "auto"

                    // the start of the different chances when the player steps onto a snake or ladder

                    if (map.src.includes("snakes0")) {
                        if (steps == 5) {
                            steps = 26
                        }
                        else if (steps == 8) {
                            steps = 49
                        }
                        else if (steps == 19) {
                            steps = 38
                        }
                        else if (steps == 24) {
                            steps = 56
                        }
                        else if (steps == 52) {
                            steps = 71
                        }
                        else if (steps == 53) {
                            steps = 84
                        }
                        else if (steps == 60) {
                            steps = 81
                        }
                        else if (steps == 42) {
                            steps = 15
                        }
                        else if (steps == 54) {
                            steps = 33
                        }
                        else if (steps == 77) {
                            steps = 41
                        }
                        else if (steps == 69) {
                            steps = 47
                        }
                        else if (steps == 94) {
                            steps = 72
                        }
                        else if (steps == 95) {
                            steps = 81
                        }
                        // to allow the character to move around the board
                        movecharacter()
                        botplaying = true
                    }
                    else if (map.src.includes("ladders")) {
                        console.log("snakes and ladders")
                        if (steps == 16) {
                            steps = 41
                        }
                        else if (steps == 32) {
                            steps = 52
                        }
                        else if (steps == 56) {
                            steps = 95
                        }
                        else if (steps == 33) {
                            steps = 12
                        }
                        else if (steps == 44) {
                            steps = 37
                        }
                        else if (steps == 72) {
                            steps = 49
                        }
                        else if (steps == 93) {
                            steps = 62
                        }
                        movecharacter()
                        botplaying = true
                    }
                   
                }
                else {
                    steps = steps + 1
                    if (steps >= 99) {
                        steps = 99
                        victory.style.opacity = 1
                        dice.style.pointerEvents = "none"
                        victory.innerHTML = "victory!"
                        button.style.opacity = 1
                    }
                    movecharacter()
                }
                currentsteps = currentsteps + 1
                if (botplaying) {

                    // change the html
                    document.getElementById("player").innerHTML = "player: bot"

                }
                else {
                    document.getElementById("player").innerHTML = "player: human"
                }

            }, 800);

        }
        else {
            let currentsteps = 0
            let currentinterval = setInterval(() => {
                console.log(steps);
                if (currentsteps == diceroll) {
                    clearInterval(currentinterval)
                    dice.style.pointerEvents = "auto"
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
                        movecharacter()
                        botplaying = false
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
                        movecharacter()
                        botplaying = false
                    }
                 
                }
                else {
                    botsteps = botsteps + 1
                    if (botsteps > 99) {
                        botsteps = 99
                        victory.style.opacity = 1
                        document.getElementById("victory").innerHTML = "you lost!"
                        dice.style.pointerEvents = "none"
                        button.style.opacity = 1
                    }
                    movecharacter()
                }
                currentsteps = currentsteps + 1
                if (botplaying) {

                    // change the html
                    document.getElementById("player").innerHTML = "player: bot"

                }
                else {
                    document.getElementById("player").innerHTML = "player: human"
                }

            }, 800);
        }
    }, 2000)
}


