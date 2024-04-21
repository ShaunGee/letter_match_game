fetch('/game.html')
    .then(response => response.text())
    .then(
        html=>{
            document.getElementById('game_container').innerHTML = html;
        }
    )
    .catch(error=>console.error('Error fetching content: ', error));
