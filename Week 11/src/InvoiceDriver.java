import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class InvoiceDriver {

    static Invoice[] invoices;

    public static void main(String[] args){
        loadInvioces();
    }

    public static void loadInvioces(){
        int             numberOfInvoices = 0;
        Scanner         fileReader       = null;
        FileInputStream fileIn           = null;

        try {
            fileIn     = new FileInputStream("CustomerOrders.txt");
            fileReader = new Scanner(fileIn);

            boolean noMoreCustomers = false;
            while(!noMoreCustomers){
                String tempLine = fileReader.nextLine();

                if(tempLine.charAt(0) == 'C'){
                    numberOfInvoices++;
                } else if(tempLine.charAt(0) == 'X'){
                    noMoreCustomers = true;
                }
            }
            invoices = new Invoice[numberOfInvoices];

            for(int index = 0; index < invoices.length;index++){
                invoices[index] = new Invoice(fileIn, index);
            }

        } catch(FileNotFoundException e){
            System.out.println(e.getMessage());
        }
    }

    public static void printInvoices(){

    }
}
