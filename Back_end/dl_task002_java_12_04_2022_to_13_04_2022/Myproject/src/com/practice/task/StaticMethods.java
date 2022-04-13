package com.practice.task;

public class StaticMethods {
    static String CollegeName="Sdmit";

    public static void main(String[] args) {
        StaticMethods a1=new StaticMethods();
        a1.avengersCharacter();
        methodOne();
        System.out.println(CollegeName);
    }

    public static void methodOne(){
        String college="Nitte";
        System.out.println(college);
    }

    public void avengersCharacter(){
        String name="groot";
        System.out.println(name);
    }
    //static block
    static{
        String address="Honnavar";
        System.out.println(address);
    }

    static{
        String address="Manglore";
        System.out.println(address);
    }
}
