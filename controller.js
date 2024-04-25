import { Card_Pairs, Game_Session } from "./model.js";
import {Card} from "./card.js";



fetch('/game.html')
    .then(response => response.text())
    .then(
        html=>{
            document.getElementById('game_container').innerHTML = html;
            game_init();
        
        }
    )
    .catch(error=>console.error('Error fetching content: ', error));

    
    function game_init(){
        const game_session = new Game_Session;
        game_session.startGame()
        initialiseCardPairs(); 
 
    }

    function randomNumCheck(rN, list){
        let t;
        if(list.length===0){
            console.log('empty list.. returning true');
            return true;          
        }
        for (let i = 0; i <list.length; i++){
            if (list[i] == rN){
                return false;           
            }
            else{
                t = true;
            }

        }
        return t;    
    }
    

    function initialiseCardPairs(){

        const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let alphabetList = [];
        alphabet.forEach(letter=>alphabetList.push(new Card(letter)));

        const numOfCards = 4;
        let gameCardIds = [];
        console.log('called');
        
        for(let a = 0; a < numOfCards;){
            //choose a random number between a and z index
            let randomID= Math.floor(Math.random() * alphabetList.length)

            if (randomNumCheck(randomID, gameCardIds)){
                console.log(randomID + ' to be added');
                gameCardIds.push(randomID);
                a++

            }

        }
        
        //pick random index number in gameCardsIdsc
        let cardPair = new Card_Pairs(gameCardIds);
        cardPair.setSingleCard(Math.floor(Math.random() * gameCardIds.length));
        console.log(gameCardIds)
     
    }







