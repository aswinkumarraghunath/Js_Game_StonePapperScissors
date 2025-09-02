const yes = document.getElementById("yes")
const no = document.getElementById("no")



function playGame(){
    // window.open("game.html") this opens in new tab
    location.replace("game.html ") // this opens on same window
}

function backButton(){
    location.replace("/")
}

function noStartGame(){
    document.getElementById("mainhead").textContent = "GOOD BYE!!"
    let buttons = document.getElementById("buttons");
    buttons.remove();
}

// $('input[type=radio]').click(function(){
//     $('input[type=radio][name=options]').prop('checked',false)
// })

let playerChoice;

function updateResult(selectedRadio) {
    document.getElementById('selectedOption').textContent = 'Selected option: ' + selectedRadio.value;
    playerChoice =  selectedRadio.value;
    
    // var radios = document.getElementsByName('options');
    // var atLeastOneSelected = false;
    
    // for (var i = 0; i < radios.length; i++) {
    //     if (radios[i].checked) {
    //         atLeastOneSelected = true;
    //         break;
    //     }
    // }
    
    // if(atLeastOneSelected){
    //     document.getElementById('selectedOption').textContent = 'Please select any options from the above';
    // }
}

let opt = document.getElementById("player");

opt.addEventListener("keydown", function(e) {
    if(e.code=== "Enter"){
        startGame();
    }
})


let playerPoints = 0;
function startGame(){

    const choices = ["scissors", "stone", "paper"];
    const computerChoice = choices[Math.floor(Math.random()*choices.length)]
    console.log(computerChoice);

    console.log("this is player choice: "+ playerChoice);

    if(playerChoice==undefined){
        document.getElementById('selectedOption').textContent = 'Please select any of the above options'
    }
    else{
        gamelogic(playerChoice,computerChoice)
        showResult()
    }

    
}


function stopGame(){
    location.replace("/")
    noStartGame()
}


function gamelogic(playerChoice, computerChoice){
    const player = document.getElementById("playerImg")
    const computer = document.getElementById("computerImg")
    const finalresult = document.getElementById("finalResult")
    const points = document.getElementById("points")
    console.log(player+"---"+ computer);

    // player.src = "images/"+ playerChoice +"./png"
    player.src = `images/${playerChoice}.png`
    // computer.src = "images/"+ computerChoice +"./png"
    computer.src = `images/${computerChoice}.png`
    if(playerChoice===computerChoice){
       finalresult.textContent = "MATCH TIED!!.. NO POINTS" 
    }
    else if((playerChoice==='stone' && computerChoice==='paper') || (playerChoice==='scissors' && computerChoice==='stone') || (playerChoice==='paper' && computerChoice==='scissors')){
        finalresult.textContent = "COMPUTER WINS!!.."
        playerPoints-=1;
        points.textContent = `Player points = ${playerPoints}`
    }
    else{
        finalresult.textContent = "PLAYER WINS!!.." 
        playerPoints+=1;
        points.textContent = `Player points = ${playerPoints}`
    }
}


function showResult(){
    let result = document.getElementById("result")
    result.style.display= 'grid';
}

function closePopup(){
    let result = document.getElementById("result")
    result.style.display= 'none';
}



