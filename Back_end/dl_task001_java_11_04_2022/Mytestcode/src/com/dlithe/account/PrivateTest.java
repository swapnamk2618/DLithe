        package com.dlithe.account;
        public class PrivateTest {
            private String name="Swapna";
            private static void displayName(){
                System.out.println("hello swapna");
            }
            public static void main(String args[]){
             PublicTest publicTest=new PublicTest();
            publicTest.displayName();
            }
        }
