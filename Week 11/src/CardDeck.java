import java.util.Random;

public class CardDeck {
    private Cards[] deck;
    private int     numLeft;
    private int     shuffleAt;
    private int     atCard;

    CardDeck(){
        deck      = new Cards[52];
        atCard    = 0;
        shuffleAt = 15;
        numLeft   = deck.length;
        generateDeck();
    }

    public void generateDeck(){

        for(int card = 0; card < deck.length; card++){
            if(card < 4){
                deck[card] = Cards.ACE;
            } else if(card >= 4 && card < 8){
                deck[card] = Cards.TWO;
            } else if(card >= 8 && card < 12){
                deck[card] = Cards.THREE;
            } else if(card >= 12 && card < 16){
                deck[card] = Cards.FOUR;
            } else if(card >= 16 && card < 20){
                deck[card] = Cards.FIVE;
            } else if(card >= 20 && card < 24){
                deck[card] = Cards.SIX;
            } else if(card >= 24 && card < 28){
                deck[card] = Cards.SEVEN;
            } else if(card >= 28 && card < 32){
                deck[card] = Cards.EIGHT;
            } else if(card >= 32 && card < 36){
                deck[card] = Cards.NINE;
            } else if(card >= 36 && card < 40){
                deck[card] = Cards.TEN;
            } else if(card >= 40 && card < 44){
                deck[card] = Cards.JACK;
            } else if(card >= 44 && card < 48){
                deck[card] = Cards.QUEEN;
            } else if(card >= 48 && card < 52){
                deck[card] = Cards.KING;
            }
        }
    }


    public void shuffle(){
        Random random = new Random();
        random.setSeed(System.currentTimeMillis());

        int ndxSwap;
        Cards tmpCard;
        int numShuffles = 3;

        for(int counter=0; counter<numShuffles; counter++) {
            for(int ndx = 0; ndx < deck.length; ndx++) {
                ndxSwap = random.nextInt(deck.length);
                if (ndxSwap != ndx) {
                    tmpCard = deck[ndx];
                    deck[ndx] = deck[ndxSwap];
                    deck[ndxSwap] = tmpCard;
                }
            }
        }
        atCard    = 0;
        numLeft   = deck.length;
    }


    public Cards dealCard(){
        Cards tempCard = deck[atCard];
        atCard++;
        numLeft--;
        return tempCard;
    }

    public void shuffleAuto(){
        if(numLeft <= shuffleAt){
            shuffle();
            System.out.println("AUTO SHUFFLE");
        }
    }
}
