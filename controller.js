/*
as soon as page loads controller.js will get called. Thje first thing it must do is start the game through view

start game:



*/
let game_running = true;



fetch('/game.html')
    .then(response => response.text())
    .then(
        html=>{
            document.getElementById('game_container').innerHTML = html;
        }
    )
    .catch(error=>console.error('Error fetching content: ', error));

   
    

function game(){

    console.log('game running');
    if (game_running){
        //game code in here
        
        setTimeout(game, 1000);
    }
}
    

game();



