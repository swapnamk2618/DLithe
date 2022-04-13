    package com.dlithe.account;

    /**
     * @author Swapna Kochrekar
     * @version  1.0
     * @since 12-04-2022
     */

    public class Assignment {

        public static void main(String args[]) {
            System.out.println("Hello word!");//print the Hello word statement
        }

        /**
         *
         * @param numberOne
         * @param numberTwo
         * @return sum of two number as int
         */
        public static int addNumbers(int numberOne, int numberTwo) {

            numberOne = 100; //Parameter  One  added as 100
            numberTwo = 200; // Parameter   two added as 200
            System.out.println(100 + 200);
            //adds two numbers and return the output
            return numberOne + numberTwo;

        }

        /**
         *
         * @param numberThree
         * @param numberFour
         * @return  subtract two number as int
         */
        public static int subtract(int numberThree, int numberFour) {

            numberThree = 100; //Parameter  One  added as 100
            numberFour = 200; // Parameter   two added as 200
            System.out.println(100 + 200);
            //subtract two numbers and return the output
            return numberThree + numberFour;

        }
    }
