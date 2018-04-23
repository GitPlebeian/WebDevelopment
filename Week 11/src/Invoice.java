import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Invoice {
    private        Customer customer = null;
    private double subTotal          = 0;
    private String customerName      = "";
    private int    customerId        = 0;

    Invoice(FileInputStream fileIn, int customerNumber){
        Scanner fileReader      = null;
        int     currentCustomer = 0;
        String  currentLine     = "";

        try {
            fileIn      = new FileInputStream("CustomerOrders.txt");
            fileReader  = new Scanner(fileIn);

            boolean matchedCustomer = false;
            while(!matchedCustomer){
                currentLine  = fileReader.nextLine();

                if(currentLine.charAt(0) == 'C'){
                    if(currentCustomer == customerNumber){
                        matchedCustomer = true;
                    } else {
                        currentCustomer++;
                    }
                }
            }

            customerId   = Integer.parseInt(currentLine.substring(2,8));
            customerName = currentLine.substring(9);
            System.out.println(customerId);
            System.out.println(customerName);

            boolean breaker = true;
            while(breaker){

            }

        } catch(FileNotFoundException e){
            System.out.println(e.getMessage());
        }
    }

    public void invoice(Customer customer){

    }

    public int getCustomerId(){
        return 0;
    }
    public String getCustomerName(){
        return "";
    }
    public Order[] getItemsOrdered() {
        return null;
    }
    public double getSubTotal(){
        return 0;
    }
    public double getTax(){
        return 0;
    }
}
