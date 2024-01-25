let dice = document.getElementById("dice")
let degrees = 0
let steps = 95
let character = document.getElementById("character")
let bot = true
let diceroll = 1
function movecharacter(){
    if(steps.toString().length == 1){
        character.style.left = steps.toString()*10+"%"
    }
    else{
        if (Math.floor(steps / 10)%2 == 0){
            character.style.left = steps.toString()[1]*10+"%"
            character.style.bottom = (Math.floor(steps / 10))*10+"%"
        
        }
        else{
            character.style.left = (9-steps.toString()[1])*10+"%"
            character.style.bottom = (Math.floor(steps / 10))*10+"%"
        }
    }
}

movecharacter()

dice.onclick = function(){
    // when you press - nothing happens
    dice.style.pointerEvents = "none"
    degrees = degrees + 1800
    // rotate the image
    dice.style.transform = "rotate("+ degrees +"deg)"
    if (bot){
        // change the html
        document.getElementById("player").innerHTML = "player: bot"

    }
    else{
        document.getElementById("player").innerHTML = "player: human"
    }
    bot = !bot
    let diceinterval = setInterval(() => {
        console.log("dice");
        diceroll = Math.floor(Math.random()*6+1)
        // dice images could change
        dice.src = "dice"+diceroll+".png"

    }, 100);
    setTimeout(() =>{
        clearInterval(diceinterval)
        dice.style.pointerEvents = "auto"
        steps = steps + diceroll
        if (steps == 5){
            steps = 26
        }
        else if (steps == 8){
            steps = 49
        }
        else if (steps == 19){
            steps = 38
        }
        else if (steps == 24){
            steps = 56
        }
        else if (steps == 52){
            steps = 71
        }
        else if (steps == 53){
            steps = 84
        }
        else if (steps == 60){
            steps = 81
        }
        else if (steps == 42){
            steps = 15
        }
        else if (steps == 54){
            steps = 33
        }
        else if (steps == 77){
            steps = 41
        }
        else if (steps == 69){
            steps = 47
        }
        else if (steps == 94){
            steps = 72
        }
        else if(steps == 95){
            steps = 81
        }

        else if (steps > 99){
            steps = 99 
        }
        movecharacter()
    }, 2000)
}


