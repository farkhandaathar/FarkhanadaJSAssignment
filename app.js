//Second chapter

var username;
var myname ="Farkhanda Athar";
document.write(myname);


// 3rd question
var message = "Hello World";
alert(message);

//4th question

var name = "Farkhanda Athar";
var age = "15 year old";
var status = "Certified Application Developer";
alert(name);
alert(age);
alert(status);

//5th question
var name= "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(name);


//6th question 

var email = "farkhanda_athar@yahoo.com";
alert( "My email is " + email);

//7th question
var book = "A smarter way to learn javascript";
alert("I am trying to learn from the book " + book);

//8th question
document.write("<br>" +"Yah! I can write the HTML content through javascript");

//9th question
var string = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
alert(string);





// 3rd chapter
//1st question
var age = 15;
alert( "I am " + age + " year old");

//second question 

var time = 14;
alert("You have visited this page " + time + " times.");

//3rd question

var birthyaer = 200;
document.write("My birth year is " + birthyaer + "<br>" + "Data type of my ddeclared variable is a number");

//4th question 

var name="Jhon Doe";
var product ="T shirts";
var quantity = "5";
document.write("<br>" + name.bold() + " ordered " + quantity.bold() + " " + product.bold() + " on XYZ online stroe");

//4th chapter
//question 1
//var username, age, job_title;
//question#2
//legal
//var username, age12, job_title, MyName, _result;
//invalid
//var 123name, job job_title, mybook, *MyName;
//Question#3

var heading = "Rules for declaring the variable names";
document.write(heading.bold());
document.write("<br>" + "<br>")
document.write("Variable names can only contain, numbers, $ and_. For Example:$my_1stVariable");
document.write("<br>" + "Variable name must begin with letter, $");
document.write("<br>" + "Variable name are case sensitive");
document.write("<br>" + "Variables names should not JS keyword");





 //                         Ch#05  (MATH EXPRESSIONS )

 //   Task : 01
 var num1=+prompt(" Enter First Number","First number is:");
 var num2=+prompt(" Enter Second Number","Second number is:");
 var result=num1+num2;
 document.write(" <br> Sum of " +num1 +" and " +num2 +" is " +result);

 //   Task : 02
                //   Subtraction
 var num1=+prompt(" Enter First Number","First number is:");
 var num2=+prompt(" Enter Second Number","Second number is:");
 var result=num1-num2;
 document.write("<br> Subtraction of " +num1 +" and " +num2 +" is " +result);
               //    Multiplication
 var num1=+prompt(" Enter First Number","First number is:");
 var num2=+prompt(" Enter Second Number","Second number is:");
 var result=num1*num2;
 document.write("<br> Multiplication of " +num1 +" and " +num2 +" is " +result);
              // Divison
 var num1=+prompt(" Enter First Number","First number is:");
 var num2=+prompt(" Enter Second Number","Second number is:");
 var result=num1/num2;
 document.write("<br> divison of " +num1 +" and " +num2 +" is " +result);
              // modulus
 var num1=+prompt(" Enter First Number","First number is:");
 var num2=+prompt(" Enter Second Number","Second number is:");
 var result=num1%num2;
 document.write("<br> Modulus of " +num1 +" and " +num2 +" is " +result);


//   Task : 03
var number;
document.write( " <br> Value after variable declaration is " +number);
number=10;
document.write("<br>Initial value: " +number);
++number;
document.write("<br>Value after increment is: " +number);
number=number+7;
document.write("<br>Value after addition is: " +number);
--number;
document.write("<br>Value after decrement is: " +number);
number=number%3;
document.write("<br>The remainder is : " +number);


//   Task : 04
var oneTicketPrice=600;
var fiveTicketPrice=(oneTicketPrice*5);
document.write("<br> Total price to buy 5 tickets to a movie is " +fiveTicketPrice +"PKR");

//   Task : 05

var table=prompt("Enter a table number you want to write ","Table number is:");
document.write("<br>Table of " +table);
for(var i=1; i<=10;i++)
{
    document.write("<br>" +table +"*" +i +"=" +(table*i) );
}

//   Task : 06
var Celsius=prompt("Enter temperature in Celsius","Temperature in Celsius is :");
var Fahrenheit = (Celsius*9/5)+32;
document.write("<br>" +Celsius +"°C is " +Fahrenheit +"°F");

var Fahrenheit=prompt("Enter temperature in fahrenheit","Temperature in fahrenheit is :");
var Celsius = (Fahrenheit-32)*5/9;
document.write("<br>" +Fahrenheit +"°F is " +Celsius +"°C");


//   Task : 07
var priceItem1=+prompt("Enter the price of item 1 ","Price of item 1 is :");
var priceItem2=+prompt("Enter the price of item 2 ","Price of item 2 is :");
var quantityItem1=+prompt("Enter the quantity of item 1 you want to order"," Quantity of item 1 is :");
var quantityItem2=+prompt("Enter the quantity of item 2 you want to order"," Quantity of item 2 is :");
var shipCharges=100;
document.write("<br>Price of item 1 is " +priceItem1);
document.write("<br>Quantity of item 1 is " +quantityItem1);
totalPriceItem1= priceItem1*quantityItem1;
document.write("<br>Price of item 2 is " +priceItem2);
document.write("<br>Quantity of item 2 is " +quantityItem2);
totalPriceItem2= priceItem2*quantityItem2;
document.write("<br>Shipping charges " +shipCharges);

totalPrice=totalPriceItem1+totalPriceItem2+shipCharges;
document.write("<br> <br> Total cost of your order is " +totalPrice);

//   Task : 08
var Tmarks=prompt("Enter Enter total marks ","Total marks is :");
var Omarks=prompt("Enter obtained marks ","Obtained marks is:");
var percentage= (Omarks/Tmarks)*100;

document.write("<br>Total marrks: " +Tmarks);
document.write("<br>Marks obtained: " +Omarks);
document.write("<br>Percentage: " +percentage +"%");

//   Task : 09
var USdollar=10;
var saudiRayal=25;
var totalCurrency = (USdollar*104.80)+(saudiRayal*28);
document.write("Total Currency in PKR: " +totalCurrency);

//   Task : 10
var num=10;
var res= ((num+5)*10)/2
document.write("<br>Result after calculation is: " +res);

//   Task : 11
var currentYear=+prompt("Enter current year","Current year is:");
var birthYear=+prompt("Enter your Birth year","Birth year is:");
var age = currentYear-birthYear;

document.write("<br>Current Year :" +currentYear);
document.write("<br>Birth Year :" +birthYear);
document.write("<br>Your Age is either " +age +" or " +(age-1));

//   Task : 12
var radius=+prompt("Enter he radius of circle","Radius is:");
const Pi=3.142;
var circumference=2*Pi*radius;
var area= Pi*radius*radius;
document.write("<br><br> Radius of a circle: " +radius);
document.write("<br>The Circumference is: " +circumference);
document.write("<br>The area is: " +area);

//   Task : 13
var favrtSnack=prompt("Enter the name of your favourite snack","Your favourite snack is:");
var currentAge=+prompt("Enter your current age","Your current age is:");
var maxAge=+prompt("Enter your maximum estimated age","Your maximum age is:");
var amountSnackPerDay=+prompt("Enter the amount of snack you eat in a day","Number of snacks is:");
var Total=(amountSnackPerDay*365)*(maxAge-currentAge);
document.write("<br> <h1>The Lifetime Supply Calculator</h1>");
document.write("<br><br>Favourite snack: "+favrtSnack);
document.write("<br>Current Age: " +currentAge);
document.write("<br>Estimated Maximum Age "+maxAge);
document.write("<br>Amount of snacks per day: "+amountSnackPerDay);
document.write("<br>You will need " +Total +" to last you until the ripe old age of " +maxAge);



//                         Ch#(06-09)  (MATH EXPRESSIONS)

   Task : 01
var a=prompt("Enter a numner","The number is:");
document.write("<br>Result:<br>The value of a is: " +a);
++a;
document.write("<br>..................................");
document.write("<br><br>The value of ++a is: " +a ,"<br>Now the value of a is: " +a);
++a;
document.write("<br><br>The value of a++ is: " +a, "<br>Now the value of a is: " +a);
--a;
document.write("<br><br>The value of --a is: " +a, "<br>Now the value of a is: " +a);
a--;
document.write("<br><br>The value of a-- is: " +a, "<br>Now the value of a is: " +a);


   Task : 02
 var a = 2, b = 1;
var result = --a - --b + ++b + b--;
        //      1 -  0 +  1  + 1
        document.write("<br><br>a is " +a);
        document.write("<br>b is " +b);
        document.write("<br>result is " +result);

 //   Task : 03
 var name=prompt("Enter your name ","Your name is:");
 document.write("<br>Thankyou " +name +"! It's good to see you " )

 //   Task : 04 (missing in assignment)

 //   Task : 05
 var table=0;
 table = +prompt("Enter a table number you want to write ");
 document.write("<br>Table is " +table)
 if(table == 0)
 {
   table=5;
 }

 for(var i=1; i<=10;i++)
  {
     document.write("<br>" +table +"*" +i +"=" +(table*i) );
  }

  //   Task : 06
  var sub1=prompt("Enter first subject name","First subject is:");
  var sub2=prompt("Enter second subject name","Second subject is:");
  var sub3=prompt("Enter third subject name","Third subject is:");
  var totalMarkssub=100;
  var totalMarks=100*3;
  var Osub1=+prompt("Enter first subject marks","First subject marks is:");
  var Osub2=+prompt("Enter second subject marks","Second subject marks is:");
  var Osub3=+prompt("Enter third subject marks","Third subject marks is:");

  var obainedSubjectMarks=Osub1+Osub2+Osub3;

  var percentageSub1=Osub1/totalMarkssub*100;
  var percentageSub2=Osub2/totalMarkssub*100;
  var percentageSub3=Osub3/totalMarkssub*100;

  var totalpecentage= obainedSubjectMarks/totalMarks*100; 

  document.write("<br><br>")
  document.write("<table>")
    document.write("<tr>")
        document.write("<th>")
        document.write("Subject")
        document.write("</th>")

        document.write("<th>")
        document.write("Total Marks")
        document.write("</th>")

        document.write("<th>")
        document.write("Obtained Marks")
        document.write("</th>")

        document.write("<th>")
        document.write("Percentage")
        document.write("</th>")
    document.write("</tr>") 
    document.write("<tr>")
          document.write("<td>")
          document.write(sub1)
          document.write("</td>")

          document.write("<td>")
          document.write(totalMarkssub)
          document.write("</td>")
          
          document.write("<td>")
          document.write(Osub1)
          document.write("</td>")

          document.write("<td>")
          document.write(percentageSub1)
          document.write("%")
          document.write("</td>")
    document.write("</tr>") 
    document.write("<tr>")
         document.write("<td>")
         document.write(sub2)
         document.write("</td>")

         document.write("<td>")
         document.write(totalMarkssub)
         document.write("</td>")
    
         document.write("<td>")
         document.write(Osub2)
         document.write("</td>")

         document.write("<td>")
         document.write(percentageSub2)
         document.write("%")
        document.write("</td>")
document.write("</tr>") 
document.write("<tr>")
        document.write("<td>")
        document.write(sub3)
        document.write("</td>")

        document.write("<td>")
        document.write(totalMarkssub)
        document.write("</td>")

        document.write("<td>")
        document.write(Osub3)
        document.write("</td>")

        document.write("<td>")
        document.write(percentageSub3)
        document.write("%")
        document.write("</td>")
        document.write("</tr>")

        document.write("<tr>")
        document.write("<td>")
        document.write(" ")
        document.write("</td>")

        document.write("<td>")
        document.write("&nbsp &nbsp")
        document.write("<b>")
        document.write(totalMarks)
        document.write("</b>")
        document.write("</td>")

        document.write("<td>")
        document.write("&nbsp &nbsp")
        document.write("<b>")
        document.write(obainedSubjectMarks)
        document.write("</b>")
        document.write("</td>")

        document.write("<td>")
        document.write("&nbsp &nbsp")
        document.write("<b>")
        document.write(totalpecentage)
        document.write("</b>")
        document.write("%")
        document.write("</td>")
document.write("</tr>") 

  document.write("</table>")


//                         Ch#(09-11)  (USER INPUT & CONDITIONAL STATEMENT)

//    Task : 01
var city=prompt("Enter the name of city","City name is:");
if(city == "Karachi" ||city == "karachi" )
{
    alert("Welcome to city of lights");
}

//    Task : 02
var gender=prompt("Enter your gender","Your gender is:");
if(gender == "male" || gender == "Male")
{
    alert(" Good Morning Sir");
}
else 
if(gender == "female" || gender == "Female")
{
    alert("Good Morning Ma’am");
}

//    Task : 03
var lightColor=prompt("Enter color of road traffic signal ","Traffic signal color is:");
if(lightColor === "red" || lightColor=== "Red")
{
    alert("Must Stop");
}
else
if(lightColor === "yellow" || lightColor=== "Yellow")
{
    alert("Ready to move");
}
else
if(lightColor === "green" || lightColor=== "Green")
{
    alert("Move now");
}
else
alert("Wrong input")

//    Task : 04
var fuel=+prompt("Enter the  remaining fuel in car (in litres)");
if(fuel<0.25)
{
    alert("“Please refill the fuel in your car");
}

//    Task : 05
// a.
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
    //  output: message displayed

//  b. 
    var b = 82;
    if (b++ === 83){
    alert("given condition for variable b is true");
    }
    //  output: message not displayed

// c. 
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
   //  output: condition 2 is true.

// d.
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 //  output: message displayed

// e.
 if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

    //  output: message displayed True

// f. 
if("car" < "cat"){
    alert("car is smaller than cat");
    }

    //  output: message displayed 



//    Task : 06

var obtainedMarks=+prompt("Enter 3 subject marks","subject marks is:");
var Tmarks=+prompt("Enter total marks of 3 subject","Total marks is:")
var prcnt=obtainedMarks/Tmarks*100;

var grade,remarks;

if(prcnt<=100 && prcnt>=80)
{
    grade="A-one";
    remarks="Excellent";
}
else
if(prcnt<80 && prcnt>=70)
{
    grade="A";
    remarks="Good";
}
else
if(prcnt<70 && prcnt>=60)
{
    grade="B";
    remarks="You need t0 improve";
}
else
if(prcnt<60 && prcnt>=0)
{
    grade="Fail";
    remarks="Sorry";
}

document.write("<br><br> <h1>Marks sheet</h1>");
document.write("<br>Total marks : " +Tmarks);
document.write("<br>Obtained marks : " +obtainedMarks);
document.write("<br>percentage : " +prcnt +"%");
document.write("<br>Grade is : " +grade);
document.write("<br>Remarks is : " +remarks);

//    Task : 07
var secretNo=7;
var guessnumber=+prompt("Guess secret number between 1 t0 10","Gussed number is:");
if(guessnumber === 7)
{
    alert("Bingo! Correct answer");
}
else
if(guessnumber+1 === 7)
{
    alert("Close enough to the correct answer");
}
else
{
    alert("Wrong guessed")
}


//    Task : 08
var number=+prompt("Enter a number","Number is:");
if(number%3 == 0)
{
    alert("Number is divisible by 3");
}
else
{
      alert("Number is not divisible by 3");
}


//    Task : 09
var number=+prompt("Enter a number","Number is:");
if(number%2 == 0)
{
    alert("Even number");
}
 else
{
       alert("Odd number");
 }


//    Task : 10
var temp=+prompt("Enter a temperature","Temperature is:");
if(temp>40 && temp<70)
{
    alert("It is too hot outside.");
}
else
if(temp>=30 && temp<40)
{
    alert("The Weather today is Normal.");
}
else
if(temp>=20 && temp<30)
{
    alert("Today’s Weather is cool.");
}
else
if(temp>=10 && temp<20)
{
    alert("OMG! Today’s weather is so Cool.");
}
else{
    alert("You enter wrong temperature")
}


//    Task : 11
var num1 = +prompt("Enter first number","First number is:");
var num2 =+ prompt("Enter Second number","Sirst number is:");
var operator=prompt("Enter operator  (+, -, *, /, %)","operator is:");

if(operator === "+")
{
    alert("Result of " +num1 +operator +num2 +" = " +num1+num2);
}
if(operator === "-")
{
    alert("Result of " +num1 +operator +num2 +" = " +num1-num2);
}
if(operator === "*")
{
    alert("Result of " +num1 +operator +num2 +" = " +num1*num2);
}
if(operator === "/")
{
    alert("Result of " +num1 +operator +num2 +" = " +num1/num2);
}
if(operator === "%")
{
    alert("Result of " +num1 +operator +num2 +" = " +num1%num2);
}

//                         Ch#(12-13)  (IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS)

//    Task : 01
var char=+prompt("Enter a charcter or number (48-57 for 0-9 numbers, 65 to 90 for Uppercase letter , 97 to 122 for lowercase");
if(char>=48 && char<57)
{
    alert("Its number " )
}
else
if(char>=65 && char<90 )
{
    alert("Upercase leter" )
}
else
if(char>=97 && char<122 )
{
    alert("Lowercase leter" )
}

//    Task : 02

var int1=+prompt("Enter first interger","First Integer is:");
var int2=+prompt("Enter second interger","Second Integer is:");
if(int1 > int2)
{
    alert(int1 +" is greater than " +int2)
}
else
if(int1 < int2)
{
    alert(int1 +" is less than " +int2)
}
else{
    alert(int1 +" is equal to " +int2)
}

//    Task : 03
var num=+prompt("Enter any number","Numberis:");
if(num > 0)
{
    alert(num +" is positive number");
}
else
if(num < 0)
{
    alert(num +" is negative number");
}
else{
    alert(" number is 0");
}

//    Task : 04
var char=prompt("Enter a charcter (i.e. string of length 1) ")
if(char=='a' || char=='A' || char=='e'|| char =='E' || char=='i' ||char=='I' || char=='o' || char=='O' || char=='u' || char=='U')
{
    alert("True");
}
else
{
    alert("False");
}


//    Task : 05

var correctPassword=prompt("Stor a correct password: ");
var password=prompt("Enter your password");
password=0;
if(password == 0)
{
    alert(" Please enter your password");
    var password=prompt("Enter your password");
}
if(password == correctPassword)
{
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password.")
}


//    Task : 06

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else
{
greeting = "Good evening";
}


//    Task : 07

var time=+prompt("Enter a time 24 hours clock format like: 1900 = 7pm.");
if(time>=0000 && time <1200)
{
    alert("Good Morning");
}
else
if(time>=1200 && time<1700)
{
    alert("Good Afternoon");
}
else
if(time>=1700 && time<2100)
{
    alert("Good Evening");
}
else
if(time>=2100 && time<2359)
{
    alert("Good Night");
}
else{
    alert("You enter wrong input");
}

//                         Ch#(14-16)  (ARRAYS )

//    Task : 01

    // Literals array empty
    var literalArray=[];
    // Literals array with data
    var student=["Hafsa","Sana"];

//    Task : 02
  
    //   Object array Empty
    var objectArray={};
    //   Object array with data
    var student={
        firstName : "hafsa",
        lastName  : "Gulzar"
    }



//    Task : 03

var cities = ["Bahawalpur", "Islamabad", "Karachi", "Lahore", "Multan", "Muree"];

//    Task : 04
var number =[1,2,3,4,5,6,7,8,9,10];

//    Task : 05

var boolean =[true,false];

//    Task : 06

var mixedArray=[100,"nahawalpur","banana",900,5];

//    Task : 07

var eduQualification=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
document.write("<br><br>")
document.write("<h1>Qualifications</h1>");

  document.write("<br> 1) " +eduQualification[0]);
  document.write("<br> 2) " +eduQualification[1]);
  document.write("<br> 3) " +eduQualification[2]);
  document.write("<br> 4) " +eduQualification[3]);
  document.write("<br> 5) " +eduQualification[4]);
  document.write("<br> 6) " +eduQualification[5]);
  document.write("<br> 7) " +eduQualification[6]);
  document.write("<br> 8) " +eduQualification[7]);


//    Task : 08
var totalMarks=500;
var studentName=[];
var studentMarks=[];
var studentPercentage=[];
for(var i=0; i<=2 ;i++)
{
    studentName[i]=prompt("Enter student name");
    studentMarks[i]=prompt("Enter student marks");
    studentPercentage[i]= studentMarks[i]/500*100;
}
for(var i=0; i<=2 ;i++){
document.write("<br><br><b>Score of "+studentName[i] +" is " +studentMarks[i] +". Percentage: " +studentPercentage[i] +"%</b>");
}



   Task : 09


var color=["red","blue","black","white","yellow"];
document.write("<br><br>Array of color is : " +color);
// a) add color to the beginning of the array
var newColor=prompt("Which color add to the beginning of the array");
color.unshift(newColor)
document.write("<br>Array of Updated color is : " +color);

// b) Add color to the end of the array
var newColor=prompt("Which color add to the end of the array");
color.push(newColor)
document.write("<br>Array of Updated  color is : " +color);

// c) Add two more color to the beginning of the array
 var newColor=[];
 var n=prompt("How many color you want to add inthe end of the array");
 for(var i=0; i<n ;i++){
    
 newColor[i]=prompt("Which two more color add to the end of the array");
 }
color.unshift(newColor)
document.write("<br>Array of Updated  color is : " +color);

// d) Delete the first color in the array
color.shift();
document.write("<br>Array of Updated color is : " +color);

// e) Delete the last color in the array
color.pop();
document.write("<br>Array of Updated color is : " +color);


// f) which index he/she wants to add a color & color name
var newColor=prompt("Which color add to the end of the array");
var index=prompt("In which index you want to add color");
color.splice(index,0, newColor);
document.write("<br>Array of Updated color is : " +color);

//  g) which index he/she wants to delete color(s) & how many colors he/she wants to delete
var index=prompt("In which index you want to delete color");
var number=prompt("How namny colors you want to delete");
color.splice(index,number);
document.write("<br>Array of Updated color is : " +color);


//    Task : 10

var studentScores=[320,230,480,120];
document.write("<br><br>Sores of Student : " +studentScores);
studentScores.sort();
document.write("<br>OrderedSores of Student : " +studentScores);

//    Task : 11

var cities=["bahawalpur","karachi","muree","islamabad","multan","lahore"];
document.write("<br><br>Cities list: <br>" +cities)
var selCities = cities.slice(2, 4);
document.write("<br>Selected Cities list : <br>"+selCities);


//    Task : 12
 var arr =["This","is","my","cat"];
 var JoinArr= arr.join(" ");
 document.write("<br><h1>Array</h1><br>" +arr);
 document.write("<br><h1>String</h1><br>" +JoinArr);


 //    Task : 13



  //    Task : 14



   //    Task : 15




 //                         Ch#(17-20)  (ARRAYS AND LOOP )
 //  Task : 01
 var multiDimension=[[],[],[],[]];

  //  Task : 02

 var multiDimension=[[1,2,3,],[1,2,3,],[1,2,3]];
 document.write(multiDimension)


 //  Task : 03
 var number=[1,2,3,4,5,6,7,8,9,10]
 for(var i=0;i<10;i++)
 {
     document.write("<br>" +number[i]) ;
 }

//  Task : 04

var table=prompt("Enter a table number you want to write ",);
var length=prompt("Enter a table lenghth  ",);
document.write("<br>Multiplication Table of " +table +"<br>Length of " +length +"<br>");
for(var i=1; i<=length;i++)
{
    document.write("<br>" +table +"*" +i +"=" +(table*i) );
}

//  Task : 05

var fruits=["apple","banana","mango","orange","straberry"];
for(var i=0; i<fruits.length;i++)
{
    document.write("<br>" +fruits[i]);
}
document.write("<br><br>")

for(var i=0; i<fruits.length;i++)
{
    document.write("<br> Element of index " +i +" is " +fruits[i]);
}


//  Task : 06
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

document.write("<br><h1>Counting : </h1><br>")
for(var i=1 ;i<16;i++)
{
    document.write(i +" , ");
}

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write("<br><h1>Reverse Counting : </h1><br>")
for(var i=10 ;i>0;i--)
{
    document.write(i +" , ");
}

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write("<br><h1>Even : </h1><br>")
for(var i=0 ;i<=20;i++)
{
    if(i%2==0)
    {
    document.write(i +" , ");
    }
}

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write("<br><h1>Odd : </h1><br>")
for(var i=0 ;i<=20;i++)
{
    if(i%2!=0)
    {
    document.write(i +" , ");
    }
}

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<br><h1>Series : </h1><br>")
for(var i=1 ;i<=20;i++)
{
    if(i%2==0)
    {
    document.write(i +"K , ");
    }
}


//  Task : 07

var items =["cake","apple pie","cookie","chips","patties"];
var orderItem=prompt("Welcome to Hafsa's Bakery. What do you want to ordr Sir/Ma'am ");

for(var i=0 ; i<items.length ;i++)
{
    if(orderItem == items[i])
    {
        document.write(orderItem +" is available at index " +i +" in our bakery" );
    }
}
document.write("We are Sorry " +orderItem +" is <b> not Available</b> in our bakery.");


//  Task : 08
var array = [24, 53, 78, 91, 12];
var largest = 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}
for (var i = 1; i < array.length; i++) {

    if (array[i] > largest) {
      largest = array[i];
    } 
}
document.write("<br>Array items is: " +array);
document.write("<br>The Largest number is: "+largest);


//  Task : 09
var array = [24, 53, 78, 91, 12];
var smallest = array[0];
for (var i = 0; i < array.length; i++){
    var temp = array[i];
    if (temp < smallest)
    {
        smallest = array[i];
    }
}
document.write("<br>Array items is: " +array);
document.write("<br>The Smallest number is: "+smallest)






//  Task : 10
document.write("<br><br>")
for(var i=1 ;i<=100;i++)
{
    if(i%5==0)
    {
        document.write(+i +" , " );
    }
}