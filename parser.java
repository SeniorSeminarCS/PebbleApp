public class parser{

     public static void main(String []args){
        String textData = "2015-02-23T17:47:01+00:00";
    	String date = "";
	    String time = "", newTime;
	    String day = "", month = "", year = "";
	    String hour = "", minute = "", second = "";
    	String[] results = new String[2];
    	String[] results2 = new String[3];
    	String[] results3 = new String[3];
    	results = textData.split("T",2);
	    date = results[0];
	    time = results[1];
	    newTime = time.substring(0,time.length()-6);
	    results2 = date.split("-",3);
	    year = results2[0];
	    month = results2[1];
	    day = results2[2];
	    results3 = newTime.split(":",3);
	    hour = results3[0];
	    minute = results3[1];
	    second = results3[2];
	    System.out.println("The month is: "+month);
	    System.out.println("The day is: "+day);
	    System.out.println("The year is: "+year);
	    System.out.println("The hour is: "+hour);
	    System.out.println("The minute is: "+minute);
	    System.out.println("The second is: "+second);
     }
}
