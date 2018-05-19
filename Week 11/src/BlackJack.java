import org.omg.PortableInterceptor.INACTIVE;

import java.util.Scanner;

public class BlackJack {

    private CardDeck   cardDeck;
    private PlayerHand playerHand;
    private DealerHand dealerHand;
    private Players    players;
    private Player     player;
    private int        playerBet;
    private int        defaulBet = 2;
    private boolean    playerLost;

    BlackJack(){
        players  = new Players();
        cardDeck = new CardDeck();
    }

    public void play(){
        boolean stillPlaying = true;
        Scanner scanner      = new Scanner(System.in);
        String  playerChoice = "";

        players.loadPlayers();
        StartUpGame();
        cardDeck.shuffle();

        while(stillPlaying){
            if(playerLost == false){
                System.out.println("[P]lay hand, [E]xit game.");
                playerChoice = scanner.next();

                if(playerChoice.equalsIgnoreCase("p")){
                    cardDeck.shuffleAuto();

                    boolean betBreaker = true;
                    while(betBreaker){
                        System.out.println("Place bet or [N]one for default bet of " + defaulBet + ", You have " + player.getBankroll() + " dollars");
                        playerChoice = scanner.next();

                        if(playerChoice.equalsIgnoreCase("n")){
                            playerBet = defaulBet;
                            betBreaker = false;
                        } else {
                            try {
                                playerBet = Integer.parseInt(playerChoice);
                                betBreaker = false;
                                if(playerBet < defaulBet){
                                    System.out.println("You need to have a bet higher than " + defaulBet);
                                    betBreaker = true;
                                }
                            } catch (NumberFormatException e){
                                System.out.println("That is not a valid answer");
                            }
                        }
                        if(playerBet > player.getBankroll()){
                            System.out.println("You don't have that much money in your account");
                            betBreaker = true;
                        }
                    }

                    playerHand = new PlayerHand();
                    dealerHand = new DealerHand();

                    playerHand.addCard(cardDeck.dealCard());
                    dealerHand.addCard(cardDeck.dealCard());
                    playerHand.addCard(cardDeck.dealCard());
                    dealerHand.addCard(cardDeck.dealCard(), true);

                    playerHand.getHandValue();

                    boolean playersTurn = true;
                    boolean playerBust = false;
                    while(playersTurn){
                        if(playerHand.getHandValue() > BlackJackHand.MAX_SCORE){
                            playerBust = true;
                            break;
                        }
                        playerHand.playHand();
                        dealerHand.playHand();
                        System.out.println();

                        System.out.println("[H]it, [S]tay");
                        playerChoice = scanner.next();
                        if(playerChoice.equalsIgnoreCase("s") ){
                            playersTurn = false;
                        } else if(playerChoice.equalsIgnoreCase("h")){
                            playerHand.addCard(cardDeck.dealCard());
                        } else {
                            System.out.println("not correct response");
                        }
                    }

                    boolean dealerTurn = true;
                    while (dealerTurn){
                        dealerHand.playHand(true);
                        if(dealerHand.getHandValue() < 17){
                            dealerHand.addCard(cardDeck.dealCard());
                        } else {
                            dealerTurn = false;
                        }
                    }

                    System.out.println();
                    playerHand.playHand();
                    dealerHand.playHand(true);
                    System.out.println();
                    if(playerBust){
                        System.out.println("Player LOST");
                        player.updateBankRoll(playerBet * -1);
                    } else if(dealerHand.getHandValue() > BlackJackHand.MAX_SCORE){
                        System.out.println("Player WINS");
                        player.updateBankRoll(playerBet);
                    } else if(playerHand.getHandValue() == dealerHand.getHandValue()){
                        System.out.println("PUSH");
                    } else if(playerHand.getHandValue() < dealerHand.getHandValue()){
                        System.out.println("Player LOSE");
                        player.updateBankRoll(playerBet * -1);
                    } else {
                        System.out.println("Player WIN");
                        player.updateBankRoll(playerBet);
                    }

                    if(player.getBankroll() == 0){
                        playerLost = true;
                        System.out.println("You are out of money");
                        stillPlaying = false;
                    }

                } else if(playerChoice.equalsIgnoreCase("e")){
                    stillPlaying = false;
                } else {
                    System.out.println("That is not an option.");
                }
            }
        }
    }

    private void StartUpGame(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Welcome to Black Jax!");
        System.out.println("Please select an existing player by typing in their name or create a new one with \"C\"");
        listPlayers();

        boolean breaker       = true;
        boolean invalidAnswer = true;

        while(breaker){
            String choice = scanner.next();
            switch(choice.toLowerCase()){
                case "c":
                    String name;
                    System.out.println("Please enter the new players name.");
                    name = scanner.next();
                    player = new Player(name, 100);
                    players.addPlayer(player);
                    breaker = false;
            }
            if(breaker){
                Player[] players = this.players.getPlayers();
                for(int index = 0; index < players.length;index++){

                    if(choice.toLowerCase().equals(players[index].getName().toLowerCase())){
                        breaker       = false;
                        invalidAnswer = false;
                        player = players[index];
                    }
                }
                if(invalidAnswer){
                    System.out.println("Your response is incorrect");
                }
            }
        }
        System.out.println("You are playing Black Jax as " + player.getName());
    }

    private void listPlayers(){
        players.logPlayers();
    }

    private void displayHand(Cards[] hand){

    }

}
