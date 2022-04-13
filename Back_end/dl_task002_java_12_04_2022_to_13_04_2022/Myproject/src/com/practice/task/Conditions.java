

package com.practice.task;

public class Conditions {
    public static void main(String[] args) {
        Conditions c1=new Conditions();
        c1.marks();
        c1.numbers();
        c1.orCondition();

    }
    //if-else condition
    public void marks(){
        int markMath=35;
        int markEnglish=100;
        if((markMath<=35) && (markEnglish<80))
        {
            System.out.println("pass");
        }
        else{
            System.out.println("fail");
        }
    }
    //if-else condition
    public void numbers(){
        int num=2;
        if(num==2){
            System.out.println("positive");
        }
        else{
            System.out.println("negative");
        }

    }
    public void orCondition(){
        int num=2;
       int numThree=5;
        if((num==2 )||(numThree<6)){
            System.out.println("right");
        }
        else{
            System.out.println("wrong");
        }

    }
}

//if((markMath>35) && (markEnglish<80))
// if((markMath>35) || (markEnglish<80))
//if(mark<35)


