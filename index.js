const rs = require('readline-sync');

//1. Write a program to input 2 numbers and display the sum of the numbers to the console.

//Input Number 1: 20
//Input Number 2: 40
//Sum : 60
//.Answer:
//let num1 = Number(rs.question('Enter one input number? '));
//let num2 = Number(rs.question('Enter second input number? '));
//let sum = Number(num1+num2);
//console.log(sum);


//2.Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

//Input: P=100, R=6%, T=2
//Output: 12

//Answer:
//let p = Number(rs.question('Enter princial amount? '));
//let r = Number(rs.question('Enter rate? '));
//let t = Number(rs.question('Enter time? '));
//let si = (p*t*r)/100;
//console.log(si);


//3. Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.

//Formula : 0.5 * m * v * v
//Answer:
//let m = 25;
//let v = 10;
//let kinetic = 0.5*m*v*v;
//console.log(kinetic);

//4.Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: T = (T - 32) 5/9 'T' is the temperature on the Fahrenheit scale.

//Input: 56
//Output: 13.33333

//Answer:
//let t = Number(rs.question('Enter temparate on Fahrenheit scale? '));
//let celsius = (t-32)*(5/9);
//console.log(celsius);


//5. Calculate the area, perimeter of a s1.re of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

//Formula :

//Area: a*a

//Perimeter: 4*a

//Surface Area: 6*a*a

//Volume: a*a*a

//Answer:

//let a = 9;
//let squarearea = a*a;
//let squareperimeter = 4*a;
//let cubearea = 6*a*a;
//let cubevolume = a*a*a;
//console.log(squarearea);
//console.log(squareperimeter);
//console.log(cubearea);
//console.log(cubevolume);

//6.Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

//Input: CP = 1500, SP = 2000
//Output: 500 Profit

//Input: CP = 3125, SP = 1125
//Output: 2000 Loss

//Answer:

//let cp = Number(rs.question('Enter cost price? '));
//let sp = Number(rs.question('Enter selling price? '));
//let difference = cp-sp;
//if(difference > 0){
  //console.log(difference +' loss');
//}
//else
//{
//  console.log((sp-cp) +' profit');
//}

//7. Write a program to calculate sum of N natural digits, as input by the users?

//Enter a positive integer: 100
//Sum = 5050

//Answer:
 //let n = Number(rs.question('Enter a positive Integer? '));
//let sum = 0;
//for(let i =1; i<=n; i++){
  //sum += i;
//}
//console.log(sum);


//8. Write a Program to Print N Odd Number in Descending Order.

//Input : 4
//Output : 7
//5
//3
//1

//Answer:
//let n = Number(rs.question('enter the number? '));
//for(i =n-1; i>=0; i--){
 // output =1+i*2;
  //console.log(output);
//}

//9.Write a JavaScript program to compute the sum of all digits that occur in a given string.

//Input: 1234
//Output: 1+2+3+4 = 10

//let input = rs.question('Enter input number? ');
//let sum =0;
//while(input){
 // sum+=input%10;
  //input = Math.floor(input/10);
//}
//console.log(sum)

//10.Write a JavaScript program that reverses a number.

//Example:

//Input:  32243;
//Output:  34223

//let input = Number(rs.question('Enter a Number? '));
//let rev =0; 
//let digit =0;
//while(input !=0){
// digit = input%10;
 //rev = rev*10+digit;
 // input = Math.floor(input/10);
  //}
 //console.log(rev);














