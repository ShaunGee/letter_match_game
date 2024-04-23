
class Card{
    constructor(letter){
        this.letter = letter;
    }

    getLetter(){
        return this.letter;
    }

}



fetch('/game.html')
    .then(response => response.text())
    .then(
        html=>{
            document.getElementById('game_container').innerHTML = html;
        }
    )
    .catch(error=>console.error('Error fetching content: ', error));

   

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let alphabetList = [];

alphabet.forEach(letter=>alphabetList.push(new Card(letter)));










