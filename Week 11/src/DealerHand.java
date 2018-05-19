public class DealerHand extends BlackJackHand {

    DealerHand(){
        super();
    }

    public void playHand() {
        System.out.println();
        System.out.print("Dealer: ");
        for(int index = 0; index < cards.length;index++){
            if(cards[index] != null){
                if (index == cardHiddenIndex){
                    System.out.print("[?] ");
                } else{
                    System.out.print("[" + cards[index].getPrimaryValue() + "] ");
                }
            }
        }
    }
    public void playHand(boolean truth) {
        System.out.println();
        System.out.print("Dealer: ");
        for(int index = 0; index < cards.length;index++){
            if(cards[index] != null){
                System.out.print("[" + cards[index].getPrimaryValue() + "] ");
            }
        }
        System.out.print(" " + getHandValue());
    }
}
