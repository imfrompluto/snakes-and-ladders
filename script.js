let dice = document.getElementById("dice")
let degrees = 0
let steps = 0
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
            character.style.bottom = (Math.floor(steps / 10) +1)*10+"%"
        
        }
        else{
            character.style.left = (11-steps.toString()[1])*10+"%"
            character.style.bottom = (Math.floor(steps / 10) +1)*10+"%"
        }
    }
}

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
        movecharacter()
    }, 2000)
}

