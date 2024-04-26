import { Card_Pairs, Game_Session, Card } from "./model.js";




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
        alphabet.forEach((letter,id)=>alphabetList.push(new Card(id,letter)));

        const numOfCards = 4;
        let gameCardIds = [];
        
        for(let a = 0; a < numOfCards;){
            let randomID= Math.floor(Math.random() * alphabetList.length)

            if (randomNumCheck(randomID, gameCardIds)){
                gameCardIds.push(randomID);
                a++

            }

        }

        let cardPair = new Card_Pairs(gameCardIds);
        gameCardIds.forEach((id)=>{
            alphabetList[id];

            
        } 
        );
    
        
        cardPair.setSingleCard(Math.floor(Math.random() * gameCardIds.length));
        //console.log(cardPair.getSingleCard());
        populateGame();

        function getLetter(id){
            return alphabetList
        }
        
    
                                                      
        function populateGame(){
            //get top and bottom div
            const topDiv = document.querySelectorAll('.sector_top_card_container');
            const bottomDiv = document.getElementById('sector_bottom_card_container_1');

            topDiv.innerHTML = 'sdfsdfsd'

            topDiv.forEach((div,id)=>{
                div.innerHTML = alphabetList[gameCardIds[id]].getLetter();

            });
            //sets single letter
            bottomDiv.innerHTML = alphabetList[cardPair.getCardLIst()[cardPair.getSingleCard()]].getLetter();
            
            //console.log(bottomDiv.offsetHeight);
            //const topDiv = document.querySelectorAll('.sector_top_card_container');
            
        
            
            bottomDiv.addEventListener('dragend', (event)=>{
                //console.log(div.offsetX + bottomDiv.offsetLeft+(bottomDiv.offsetWidth/2));
                console.log(event.clientY);
               

               
               topDiv.forEach(td => {
                 
                    

                    if ( bottomDiv.innerHTML === td.innerHTML && event.clientX >= td.offsetLeft && 
                        event.clientX <= td.offsetLeft + td.offsetWidth && event.clientY >= td.offsetTop &&
                        event.clientY <= (td.offsetTop + td.clientHeight)) {
                            location.reload();
                        
                    }
                    
                    
                    
                });
                
                
                
                
            });
            

        }

    
}
