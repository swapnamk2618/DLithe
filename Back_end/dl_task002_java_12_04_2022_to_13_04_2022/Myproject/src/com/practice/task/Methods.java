    package com.practice.task;

    public class Methods {


     public static int addNumbers(int numOne,int numTwo){
         int answer=numOne-numTwo;
         return answer;

     }
       public static int division(int numOne,int numTwo){
            int answer=numTwo/numOne;
           return answer;
       }
        public static void main(String[] args) {
            int subtractOfNumbers=addNumbers(20,50);
            System.out.println(subtractOfNumbers);
            int divisionNumber=division(10,50);
            System.out.println(divisionNumber);
        }
        public static void cars(String one,String two){
          one="audi";
           two="ferrari";

        }

     public String vehicle(String name){

          name="car";
         System.out.println(name);

         return name;

     }
     public int numbers(){
         return 123;
     }
     public int numberOne(int e, int f){
         int a=e+f;
         return a;
     }


     public float methodOne(float a, float b){
         float c=a+b;
         return c;
        // return 123;
     }


     public char animalStartName(){
         char C='H';
         return C;
     }


    }
