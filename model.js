

export class Game_Session {

    constructor(){
        this.game_active
    }

    startGame(){
         this.game_active = true;
    }

    stopGame(){
        this.game_active = false;
    }

    getGameStatus(){
        return this.game_active;
    }
}

export class Card_Pairs{
    constructor(cardList){
        this.cardList = cardList;
        this.singleCard;
    }

    setCardList(cardList){
        this.cardList = cardList
    }
    getCardLIst(){
        return this.cardList;
    }

    deleteCardList(){
        this.cardList = undefined;
    }

    setSingleCard(card){
        this.singleCard = card;
    }
    getSingleCard(){
        return this.singleCard;
    }
}