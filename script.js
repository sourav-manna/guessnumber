var num = Math.floor(Math.random(0,100)*100)+1
var round = 0
function CheckNumber(){
    var guessnum = parseInt(document.getElementById("n").value)
    if(guessnum == null || guessnum > 100 || guessnum < 1){
        document.getElementById("p1").innerHTML = 'Please enter number between 1-100'
    }
    else{
        round += 1
        if(num == guessnum){
            document.getElementById("p2").innerHTML = "Congrats!! Got the answer correctly!";
            document.getElementById("p1").innerHTML = ""
        }
        else if(num < guessnum){
            document.getElementById("p1").innerHTML = "Hint "+ round +": &nbsp; Guess a smaller number"
        }
        else if(num > guessnum){
            document.getElementById("p1").innerHTML = "Hint "+round+": &nbsp; Guess a greater number"
        }
    }
}

function reset(){
    document.getElementById("n").innerHTML = 0
    console.log('check')
}