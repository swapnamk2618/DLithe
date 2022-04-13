        package com.practice.task;
        /**
         *
         * @author swapna
         * @since 12-04-2022
         */

        public class MethodTwo {
            int numberOne=10;
            int numberTwo=20;
            int result;
            public static void main(String[] args) {

            }
            // This method is used to add Two number
            public void addNumber() {
            result=numberOne+numberTwo;
            System.out.println("Sum:"+result);
            }
            // This method is used to multiple two number
            public void multipleNumber() {
                result=numberOne*numberTwo;
                System.out.println("multiplication:"+result);
            }
            //This method is used to subtract two number
            void subtractNumber(){
                result=numberOne-numberTwo;
                System.out.println("Subtraction:"+result);
            }
        }

