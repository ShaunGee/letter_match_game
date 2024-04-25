export class Card{
    constructor(letter){
        this.letter = letter;
        //this.card_id = 
    }

    getLetter(){
        return this.letter;
    }

    getCard(){
        fetch('/card.html')
        .then(html =>{
        let x = 'mod'

        //document.getElementById(card_id)

        let card_content = `<div class='letter_container'><h1 class='letter'>${x}</h1></div>`;
        return card_content;

        })

        
    }
    getCardID(){
        
    }



}