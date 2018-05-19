public class BlackJackHand {
    public static final int MAX_CARDS = 12;
    public static final int MAX_SCORE = 21;

    protected    int     cardHiddenIndex;
    private   int     handValue;
    protected Cards[] cards;
    private   int     numCards = 0;

    BlackJackHand(){
        cards = new Cards[MAX_CARDS];
        cardHiddenIndex = -1;
    }

    public void addCard(Cards card){
        cards[numCards] = card;
        numCards++;
    }
    public void addCard(Cards card, boolean cardHidden){
        cards[numCards] = card;
        cardHiddenIndex = numCards;
        numCards++;
    }

    public Cards[] getHand(){
        return null;
    }

    public int getHandValue(){
        return scoreHand();
    }

    public void playHand(){
        System.out.println();
        System.out.print("Player: ");
        for(int index = 0; index < cards.length;index++){
            if(cards[index] != null){
                System.out.print("[" + cards[index].getPrimaryValue() + "] ");
            }
        }
        System.out.print(" " + getHandValue());
    }

    private int scoreHand(){
        handValue = 0;
        int temphandValue = 0;
        for(int index = 0; index < cards.length;index++){
            if(cards[index] != null){
                if((temphandValue += cards[index].getPrimaryValue()) <= MAX_SCORE){
                    handValue += cards[index].getPrimaryValue();
                    temphandValue = handValue;
                } else if((temphandValue += cards[index].getSecondaryValue()) <= MAX_SCORE && cards[index].getSecondaryValue() != 0){
                    handValue += cards[index].getSecondaryValue();
                    temphandValue = handValue;
                } else {
                    handValue += cards[index].getPrimaryValue();
                }
            }
        }
        return handValue;
    }
}
