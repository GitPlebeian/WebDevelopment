public enum Cards {

    ACE   (1,11),
    ONE   (1,0),
    TWO   (2,0),
    THREE (3,0),
    FOUR  (4,0),
    FIVE  (5,0),
    SIX   (6,0),
    SEVEN (7,0),
    EIGHT (8,0),
    NINE  (9,0),
    TEN   (10,0),
    JACK  (10,0),
    QUEEN (10,0),
    KING  (10,0);

    Cards(int primaryValue,int secondaryValue){
        this.primaryValue   = primaryValue;
        this.secondaryValue = secondaryValue;
    }

    public int getPrimaryValue(){
        return primaryValue;
    }

    public int getSecondaryValue(){
        return secondaryValue;
    }

    private CardSuit suit;
    private CardRank rank;
    private int      primaryValue;
    private int      secondaryValue;




    public enum CardRank{

    }

    public enum CardSuit{

    }
}
