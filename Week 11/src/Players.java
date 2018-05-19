import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Scanner;

public class Players {

    private Player[] players;
    private String   filename = "data.txt";

    public void addPlayer(Player player){
        Player[] tempPlayers = new Player[players.length + 1];
        for(int index = 0; index < tempPlayers.length; index++){
            if(index == tempPlayers.length - 1){
                tempPlayers[index] = player;
            } else{
                tempPlayers[index] = players[index];
            }
        }
        players = tempPlayers;
    }
    public boolean removePlayer(String playerId){
        return false;
    }
    public void loadPlayers(){
        int numberOfPlayers = 0;

        Scanner         fileReader = null;
        FileInputStream fileIn     = null;

        try{
            fileIn     = new FileInputStream(filename);
            fileReader = new Scanner(fileIn);

            boolean breaker = true;
            while(breaker && fileReader.hasNext()){
                String tempString = fileReader.next();

                switch (tempString.toLowerCase()){
                    case "p":
                        numberOfPlayers++;
                        break;
                    case "x":
                        breaker = false;
                        break;
                }
            }
            players = new Player[numberOfPlayers];

            fileIn     = new FileInputStream(filename);
            fileReader = new Scanner(fileIn);

            if(fileReader.hasNextLine()) {

                breaker = true;
                int index = 0;
                while(breaker && index < players.length){

                    String  tempString = fileReader.nextLine();
                    Scanner scanner    = new Scanner(tempString);

                    String  name       = "";
                    int     money      = 0;

                        switch(scanner.next()){
                            case "P":
                                name  = scanner.next();
                                money = scanner.nextInt();
                                break;
                            case "X":
                                breaker = false;
                                break;
                        }
                    players[index] = new Player(name, money);
                    index++;
                }
            }
        } catch(FileNotFoundException e){
            System.out.println("File not found excemption");
        }
    }

    public void savePlayers(){

    }

    public Player[] getPlayers(){
        return players;
    }

    public void getPlayer(String name){

    }
    public void logPlayers(){
        for(int index = 0;index < players.length;index++){
            System.out.println(players[index].getName() + " " + players[index].getBankroll());
        }
    }
}
