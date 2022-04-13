package com.dlithe.account;

public class PublicTest {
     public String name = "Swapna";
     public static void main(String[] args) {
       // PublicTest publicTest=new PublicTest();
       System.out.println(new PublicTest().name);
    }

    public void displayName() {
        System.out.println("hello swapna");
    }
    protected void nameMethod(){
    }
    String surname="kochrekar";
    void addSurname(){
        System.out.println("kochrekar");
    }

}
