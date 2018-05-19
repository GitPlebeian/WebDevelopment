public class Player {

    private int    bankRoll;
    private String name;

    Player(String name, int bankRoll){
        this.bankRoll = bankRoll;
        this.name     = name;
    }

    public void updateBankRoll(int updateBy){
        bankRoll += updateBy;
    }

    public void printInfo(){
        System.out.println(name);
        System.out.println(bankRoll);
        System.out.println();
    }

    public String getName(){
        return name;
    }
    public int getBankroll(){
        return bankRoll;
    }
}
