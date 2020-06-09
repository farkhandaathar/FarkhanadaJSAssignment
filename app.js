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
var username, age, job_title;
//question#2
//legal
var username, age12, job_title, MyName, _result;
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


//5th chapter

//1st & 2nd question

var fnum = 3;
var snum = 5;
var sum = fnum + snum;
var mul = fnum * snum;
var div = fnum / snum;
var mod = fnum % snum;
var sub = fnum - snum;
document.write("Sum of " + fnum +" and " + snum + " is " + sum);
document.write("<br> Multiplication of " + fnum +" and " + snum + " is " + mul );
document.write("<br> Subtraction of " + fnum +" and " + snum + " is " + sub );
document.write("<br> Division of " + fnum +" and " + snum + " is " + div );
document.write("<br> Modulus of " + fnum +" and " + snum + " is " + mod + "<br><br>" );

//3rd question
var declareVar ;
document.write("<br> The value of variable after declaration is: " + declareVar);
 var num = 5;
 document.write("<br> Initial value is : " + num);
 num = num++;
 document.write("<br> Value after increment is : " + num);
 num = num +7;
 document.write("<br> The value after adding 7 is :" + num);
 num = num--;
 document.write ("<br> Tha value after decrementing is : " + num);
 num = num % 3;
 document.write("<br> The remainder is: " + num + "<br><br>");

 //4th question
 var ticketCost = 600;
 ticketCost = 600 * 5;
 document.write("<br> Total cost of buying the 5 tickets to a movie is :" + ticketCost + "PKR.");

 //5th question
 document.write("<br><br> Table of 4");
 var i;
 for(i=1; i<=10; i++ )
 {
       document.write("<br> 4 * " + i + "=" + 4*i);
 }

 //6th question
 var C = 25;
 F = (C*9/5) + 32;
 document.write("<br><br>" + C + "C is" + F + "F" );
 var F = 70;
 C = (F-32) * 5/9;
 document.write( "<br>"+ F + "F is" + C + "C" );

 //7th question
 document.write("Shopping Cart" .bold());
 var priceItem1 = 650;
document.write("<br><br> Price of item 1 is" + priceItem1);
 var quantityItem1 = 3;
 document.write("<br> Quantity of item 1 is" + quantityItem1);
 var priceItem2 = 100;
 document.write("<br> Price of item 2 is" + priceItem2);
 var quantityItem2 = 7;
 document.write("<br> Quantity of item 2 is" + quantityItem2);
 var shippingCharges = 100;
 document.write("<br> Shipping Charges are" + shippingCharges);
 var totalCharges = priceItem1 * quantityItem1 + priceItem2 * quantityItem2 + shippingCharges;
 document.write("<br>Total cost of your order is : " + totalCharges);


//8th question

document.write("<br><br> Marks Sheet".bold());

var totalMarks = +prompt("Enter total marks", "Total marks are :");
var obtainMarks = +prompt("Enter marks obtained", "Marks obtained are: ");
var percentage = (obtainMarks/totalMarks)*100;
document.write("<br>Total Marks are" + totalMarks);
document.write("<br>Marks obtained are" + obtainMarks);
document.write("<br>Percentage is: " + percentage);

//9th question

var usDollars = 10;
var saudiCurrency = 25;
var totalCurrency = usDollars* 104.80 + saudiCurrency*28 ;
document.write("<br><br> Total currency in PKR : " + totalCurrency);

//10th question
var number = 5;
number = ((number + 5 )* 10) /2;
document.write("<br><br> Final number is : " + number);

//11th question
document.write("<br><br> Age Calculator" .bold());
var currentYear = +prompt("Enter the current year" + "Current year is : ");
var birthYear = +prompt ("Enter the birth year" + "Birth year is : ");
var age =  currentYear - birthYear;
document.write("<br> Current year is : " + currentYear);
document.write("<br> Birth year is : " + birthYear);
document.write("<br> Your age is " + age );


//12th question

document.write("<br><br> The Geometrizer".bold());
var radius = +prompt("Enter the radius of circle", "The radius of circle is : ");
document.write("<br> The radus is: " + radius);
var circum = 2 * 3.14 * radius;
document.write("<br> The circumference of circle is : " + circum);
var area = 3.14 * radius * radius;
document.write("<br> The area of circle is : " + area);


//13th 
document.write("<br><br> The Lifetime Supply Calculator".bold());
var snack = +prompt("Enter you favorite snack" , "Your favorite snack is ");
var currentAge = +prompt("Enter you current age" , "Your age  is ");
var estimatedAge = +prompt("Enter your estimated age" , "Your estimated age is");
var snackPerDay = +prompt("Enter amount of snack per day" , "The amount of snack per day is");
var age= estimatedAge - currentAge;
var totalSnack = age * 3;
document.write("<br>Favorite snack: " + snack);
document.write("<br>Current Age: " + currentAge);
document.write("<br> EstimatedAge" + estimatedAge);
document.write("<br>Amount of snack per day : " + snackPerDay);
document.write("<br> You will need "+ totalSnack + " " + snack + " to last you until the age of ripe old age of " + estimatedAge);


             // Chapt 6-9

//question#1
document.write("<br> Result".bold());
var a = 10;
document.write("<br> The value of a is : " + a);
document.write("<br><br> ........................");

document.write("<br><br> The value of a after ++a is : " + ++a);
document.write("<br> Now thw value of a is : "+ a);

document.write("<br><br> The value of a++ is : " + a++);
document.write("<br> Now thw value of a is : " + a);

document.write("<br><br> The value of --a is : " + --a);
document.write("<br> Now thw value of a is : " +a);

document.write("<br><br> The value of a-- is : " + a--);
document.write("<br> Now thw value of a is : " +a);

//Question #2 
var a = 2;
var b =1;
document.write("<br><br> The value of a is : " +a);
document.write("<br> The value of b is : " + b );
var Result = --a;
document.write("<br> Now the value is : " + Result);
Result = --a - --b;
document.write("<br> Now the value is : " + Result);
Result = --a - --b + ++b;
document.write("<br> Now the value is : " + Result);
Result = --a - --b + ++b + b--;
document.write("<br> Result is : " + Result);


var user = prompt ("Enter you name", "The user name is : ");
document.write("<br><br> Hello " + user + " Good to see you!");

//question 5
var table=0; 
table = +prompt(" Enter the number to print table:");
document.write("<br><br> The table is of : " + table);
if (table== 0)
{
      table = 5;
}
for(i=1; i<=10; i++) 
{
      document.write("<br>" + table + "*" + i + "=" + table * i); 
}


//question #7
var fisrtSubject = prompt("Enter first subject", "First subject is ");
var secondSubject = prompt("Enter second subject", "Second subject is ");
var thirdSubject = prompt("Enter third subject", "Third subject is ");
var totalMarks = 100;
var totalAll = 300;
var firstSubjectMarks = +prompt("Enter marks of first subject", "First subject marks is:");
var secondSubjectMarks = +prompt("Enter marks of second subject", "Second subject marks is:");
var thirdSubjectMarks = +prompt("Enter marks of second subject", "Third subject marks is:");
var obtainMarks = firstSubjectMarks + secondSubjectMarks + thirdSubjectMarks;
var percentage = (obtainMarks /totalAll) * 100;
var percentage1 = (firstSubjectMarks /totalMarks) * 100;
var percentage2 = (secondSubjectMarks /totalMarks) * 100;
var percentage3 = (thirdSubjectMarks /totalMarks) * 100;

document.write("<br><br>");
document.write("<table>");
      document.write("<tr>");
            document.write("<th>");
            document.write("Subjects");
            document.write("</th>");

            document.write("<th>");
            document.write("Total Marks");
            document.write("</th>");

            document.write("<th>");
            document.write("Obtained Marks");
            document.write("</th>");

            document.write("<th>");
            document.write("Percentage");
            document.write("</th>");
      document.write("</tr>");

      document.write("<tr>");
            document.write("<td>");
            document.write(fisrtSubject);
            document.write("</td>");

            document.write("<td>");
            document.write(totalMarks);
            document.write("</td>");

            document.write("<td>");
            document.write(firstSubjectMarks);
            document.write("</td>");

            document.write("<td>");
            document.write(percentage1 + "%");
            document.write("</td>");
      document.write("</tr>");

      document.write("<tr>");
            document.write("<td>");
            document.write(secondSubject);
            document.write("</td>");

            document.write("<td>");
            document.write(totalMarks);
            document.write("</td>");

            document.write("<td>");
            document.write(secondSubjectMarks);
            document.write("</td>");

            document.write("<td>");
            document.write(percentage2 + "%");
            document.write("</td>");
      document.write("</tr>");

      document.write("<tr>");
            document.write("<td>");
            document.write(thirdSubject);
            document.write("</td>");

            document.write("<td>");
            document.write(totalMarks);
            document.write("</td>");

            document.write("<td>");
            document.write(thirdSubjectMarks);
            document.write("</td>");

            document.write("<td>");
            document.write(percentage3+ "%");
            document.write("</td>");
      document.write("</tr>"); 

      document.write("<tr>");
            document.write("<td>");
            
            document.write("</td>");

            document.write("<td>");
            document.write("        " +totalAll);
            document.write("</td>");

            document.write("<td>");
            document.write("        " + obtainMarks);
            document.write("</td>");

            document.write("<td>");
            document.write("       " + percentage +"%");
            document.write("</td>");
      document.write("</tr>"); 


//chapter 9-11
//question 1 
 var city = prompt("ENter the city name", "The city name is : ");
 if (city == "Karachi" || city == "karachi")
 {
      alert("Welcome to city of lights!")
 }

 //question 2 
 var gender = prompt("Enter the gender", "The gender is");
 if (gender=="Male" || gender=="male")
 {
      document.write("<br><br> Good Morning Sir!");
 }
 if(gender == "Female" || gender== "female")
 {
       document.write("<br><br> Good Morning Ma'am");
 }
      

//question #3
var light = prompt("ENter the taffic light color");
if(light=="red" || light=="Red")
{
      document.write("<br><br> Must stop!");
}
if(light=="Yellow" || light=="yellow")
{
      document.write("<br><br> Ready to move!");
}
if(light=="green" || light=="Green")
{
      document.write("<br><br> Move now!");
}


//question #4
var fuel = +prompt("Enter the fuel quantity");
if(fuel < 0.25)
{
      document.write("<br><br> Please refill the fuel in your car");
}

//question # 5
var a =4;
if(++a === 5 )
{
      alert("Given condition for a variable is true");
}

var b =82;
if(b++ === 83 )
{
      alert("Given condition for b variable is true");
}


var c = 12; 
if (c++ === 13)
{ 
      alert("condition 1 is true");
 } 
 if (c === 13)
 {
        alert("condition 2 is true");
       } 
if (++c < 14)
{ 
      alert("condition 3 is true");
 } 
 if(c === 14)
 { 
       alert("condition 4 is true"); 
      }

var materialCost = 20000;
 var laborCost = 2000; 
 var totalCost = materialCost + laborCost;
  if (totalCost === laborCost + materialCost)
  { 
      alert("The cost equals");
 }
 
if (true)
{
      alert("True");
} 
if (false)
{ 
      alert("False");
}

if("car" < "cat")
{ 
      alert("car is smaller than cat");
 }
 
var totalMarks = +prompt("ENter the total marks of three subjects");
var subject1 = +prompt("Enter marks of firts subject");
var subject2 = +prompt("Enter marks of second subject");
var subject3 = +prompt("Enter marks of third subject");
var obtainMarks = subject1 + subject2 + subject3;
var percentage = (obtainMarks/totalMarks) *100;
if(percentage >= 80)
{
      document.write("<br><br> Total Marks" + totalMarks);
      document.write("<br> Marks ontain" + obtainMarks);
      document.write("<br> Percentage : " + percentage);
      document.write("<br> A-one");
      document.write("<br> Remarks: Excellent");
}
if(percentage >= 70 && percentage <80)
{
      document.write("<br><br> Total Marks" + totalMarks);
      document.write("<br> Marks ontain" + obtainMarks);
      document.write("<br> Percentage : " + percentage);
      document.write("<br> Grade: A");
      document.write("<br> Remarks : Good");
}
if(percentage >= 60 && percentage < 70)
{
      document.write("<br><br> Total Marks" + totalMarks);
      document.write("<br> Marks ontain" + obtainMarks);
      document.write("<br> Percentage : " + percentage);
      document.write("<br> Grade: B");
      document.write("<br> Remarks: You need to improve");
}
if(percentage < 60)
{
      document.write("<br><br> Total Marks" + totalMarks);
      document.write("<br> Marks ontain" + obtainMarks);
      document.write("<br> Percentage : " + percentage);
      document.write("<br> Grade :Fail");
      document.write("<br> Remarks : sorry");
}

//Question # 7
var secretNo = 7;
var num = +prompt("Enter number to guess the secret number ");
if ( num == 7)
{
      document.write("<br> Bingo! Corret Answer");
}
if ( num + 1 == 7)
{
      document.write("You are close enough to guess the number");
}
else{
      document.write("Wrong answer");
}

//question # 8
var num = +prompt("ENter a number");
if ( num % 3 == 0)
{
      document.write("<br><br> The number is divisible by 3 ");

}
if ( num % 3 != 0)
{
      document.write("<br><br> The number is not divisible by 3 ");

}

var num = +prompt("ENter a number");
if ( num % 2 == 0)
{
      document.write("<br><br> The number is even ");

}
if ( num % 2 != 0)
{
      document.write("<br><br> The number is odd ");

}

//question # 10
var temp = +prompt("ENter temprature");
if ( temp > 40)
{
      document.write("<br><br> The temprature is too hot ");

}
if ( temp > 30 && temp < 40)
{
      document.write("<br><br> The weather is normal ");

}
if ( temp > 20  && temp < 30)
{
      document.write("<br><br> Today! weather is cool ");

}
if ( temp > 12 && temp < 20)
{
      document.write("<br><br> OMG! weather is too much cool ");

}

//question # 11
var num1 = +prompt("Enter the first number");
var num2 = +prompt("Enter the second number");
var operator = prompt("Enter the oprator");
var Result;
if(operator === "+")
{
      Result= num1 + num2;     
      document.write("<br> Result is : " + num1  + "+" + num2 + "=" + Result);
}
if(operator === "-")
{
      Result= num1 - num2; 
      document.write("<br> Result is : " + num1 + "-" + num2 + "=" + Result);
}
if(operator === "%")
{
      Result= num1 % num2; 
      document.write("<br> Result is : " + num1 + "%" + num2 + "=" + Result);
}
if(operator === "/")
{
      Result= num1 / num2; 
      document.write("<br> Result is : " + num1 + "/" + num2 + "="  + Result);
}
if(operator === "*")
{
      Result= num1 * num2; 
      document.write("<br> Result is : " + num1 + "*" + num2 + "="  + Result);
}


// Chapter 12-13
//question # 1
var char = +prompt("Enter a charcter or number (48-57 for 0-9 numbers, 65 to 90 for Uppercase letter , 97 to 122 for lowercase");
if(char>=48 && char<57)
{
    alert("Its number " );
}
else
if(char>=65 && char<90 )
{
    alert("Upercase leter" );
}
else
if(char>=97 && char<122 )
{
    alert("Lowercase leter" );
}

//Question # 2
var num1 = +prompt("Enter first number");
var num2 = + prompt("Enter second number");
if(num1 > num2 ){
      document.write("<br> num1 is greater than num2");
}
if(num2 > num1 )
{
      document.write("<br> Num2 is greater than num1");
}
if( num1 == num2 )
{
      document.write("<br> Both numbers are equal");
}

//Question #3
var num = +prompt("ENter a number");
if (num > 0)
{
      document.write("<br> The number is positive");
}
if(num < 0)
{e
      document.write("<br> The number is negative");
}
if (num == 0)
{
      document.write("<br> The number is 0");
}

//question # 5
var enterPassword =  prompt("ENter your password");
var reenterPassword = prompt("ReENter your password");
if (enterPassword == 0 )
{
      alert("Please enter your password");
      var enterPassword = prompt("Enter your password");
}
if (enterPassword == reenterPassword)
{
      alert("Great! you password matches");
}
else {
      alert("Incorrect password");
}

//question # 6
var greeting;
var hours = 13
if(hours < 18)
{
      greeting = "Good Day";
    document.write("<br>" + greeting);
}
else
{
      greeting =" Good Evening";
      document.write("<br>" + greeting);
}

//question # 4 
var char = prompt("ENter a character");
if( char=="A"  || char=="a" || char=="E" || char=="e" || char== "I" || char=="i" || char=="O" || char=="o" || char=="U" || char=="u")
{
      alert("true");
}
else
{
      alert("False");
}

//question # 7 

var time = +prompt("Enter the time in 24hours clock format");
if (time >= 0000 && time <= 1200)
{
       alert("Good Morning!");
}
else if (time >= 1200 && time < 1700)
{
      alert("Good afternoon");
}
else if (time >= 1700 && time < 2100)
{
      alert("Good Evening");
}
else(time>= 2100 && time <= 2359)
{
      alert("Good night");
}

//chp 14-16 Arrays
//question #1
var literalArray = [];
//array with data
var literalArray = ["Farkhanda", "Tabinaa"];
//Question#2 
var studentName = {};
var studentName = {
      firstName: "Farkhanda",
      lastName : "Tabinda"};

//Question # 3
var countries = ["Pakistan", "India", "USA", "UAE", "Turkey"];
//Question # 4
var number = [1, 2, 3, 4, 5, 6];
//Question # 5
var boolean = [true, false];
//Question # 6
var mixedArray = [200, "Bahawalput", "Pakistan", true, 12, "USA"];


//Question # 7 
var education = ["SSC", "HSC" , "BCS", "BS" , "BCOM", "MS", "M.Phil", "PHD"];
document.write("<br><br> Qualification".bold());
for (var i =0; i<education.length; i++)
{
      document.write("<br>"  + (i+1) +")" + education[i]  );
}

//Question # 8
var totalMarks= +prompt("Enter total marks");
var studentName =[];
var studentMarks =[];
var studentPercentage=[];

for (var i=0; i<=2; i++)
{
      
       studentName[i] = prompt("Enter student Name");
       studentMarks[i] = prompt("Enter student marks");
       studentPercentage[i] = studentMarks[i] / totalMarks * 100;
       document.write("<br> Score of " + studentName[i] + " is " + studentMarks[i] + ". Percentage : " + studentPercentage[i] + "%");
}


//Question # 9
var array =["Red", "Green", "White", "Blue", "Black", "Orange"];
document.write("<br><br> Array of color is : " );
for(var i=0; i<array.length; i++)
{
      document.write("<br>" + array[i]);
}

//a part
var newColor = prompt("ENter the color name you want to add at the begining");
array.unshift(newColor);
document.write("<br>The new array is ");
for(var i=0; i<array.length; i++)
{
document.write("<br> " + array[i]);
}
//b part
var endColor = prompt("ENter the color name you want to add at the end");
array.push(endColor);
document.write("<br>The new array is ");
for(var i=0; i<array.length; i++)
{
document.write("<br> " + array[i]);
}
//c part
var colors= [];
var n = +prompt ("How many colors you want to add");
for ( var i =1; i<=n; i++)
{
      colors[i] = prompt("Enter the " + i + "color name");
}
array.unshift(colors);
document.write("<br><br> Now array is : " + array);

//d part
array.shift();
document.write("<br><br> Now thw array values is : " + array);

//e part
array.pop();
document.write("<br><br> Now thw array value is: " + array);

// f part 
var newColor = prompt("ENter the color name");
var index = prompt("Enter index");
array.splice(index, 0, newColor);
document.write("<br><br> Now the array is : " + array);

// g part
var number = prompt("How many numbers you want to delete");
var index = prompt("Enter index");
array.splice(index, number);
document.write("<br><br> Now the array is : " + array);

//Question # 10
var studentScore = [320, 230, 480, 120];
document.write("<br><br> Score of student is : " + studentScore);
studentScore.sort();
document.write("<br> Student score after sorting is : " + studentScore);

//Question # 11 
var cities = ["Karachi", "Lahore", "bahawallpur", "Multan", "Queta"];
document.write("<br><br> The cities select is : " + cities);
var selectedCities = cities.slice(2, 4);
document.write("<br> Selected cities are : " + selectedCities);

//Question # 12
var array = ["This", "is", "my", "cat"];
var arrayJoin = array.join("  ");
document.write("<br><br> Array: <br>".bold() + array);
document.write("<br><br> String :  <br> " .bold() + arrayJoin);

//Question # 13;
var devices = ["keyboard" , "mouse", "printer", "moniter"];
document.write("<br><br> Devices: <br> ".bold() + devices + "<br><br>");

for (var i=0; i< devices.length; i++)
{
          document.write("<br> Out: ".bold() + "<br>" + devices[i]);
}

//question # 14 
var devices = ["keyboard" , "mouse", "printer", "moniter"];
document.write("<br><br> Devices: <br> ".bold() + devices + "<br><br>");

for (var i=devices.length-1; i>=0; i--)
{
          document.write("<br> Out: ".bold() + "<br>" + devices[i]);
}

//Question # 15
var phones =["Apple", "Samsung", "Motrola", "Nokia", "Sony", "Haier"]
for(var i=0; i< phones.length; i++)
{
      document.write("<br>" + phones[i]);
}


//Chpater 17-20
//Question # 1
var arrarMulti = [[], [], [], []];
//Question # 2
var arrayMulti = [
      [0, 1, 2, 3],
      [1,0, 1, 2],
      [2, 1,0,1]];

for (var i =0; i< 3; i++)
{
      for(var j=0; j<4; j++)
      {
            document.write( arrayMulti[i][j]);
      }
      document.write("<br>")
}

//Question # 3
var counting = [1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9, 10];
for( var i=0; i< 10; i++)
{
      document.write("<br>" + counting[i]);
}

//Question # 4
var tableNo = +prompt("Enter the table number");
var tableLength = + prompt("Enter teh table length");
for (var i=1; i<=tableLength; i++)
{
      document.write("<br>" +tableNo + " x " + i + " = " + tableNo*i );
}

//Question # 5
var fruits=["apple","banana","mango","orange","straberry"];

for (var i=0; i<fruits.length; i++)
{
      
      document.write("<br> " + fruits[i]);
}
document.write("<br><br>");
for( var i=0; i<fruits.length; i++)
{
      document.write("<br> Element at index " + i + "  is " + fruits[i]);
}

//Question # 6
document.write("<br> Counting: ".bold() + "<br>");
for( var i=1; i<=15; i++)
{
      document.write (i + ",  ");
}

document.write("<br> Reverse Counting: ".bold() + "<br>");
for( var i=10; i>=1; i--)
{
      document.write (i + ",  ");
}

document.write("<br> Even: ".bold() + "<br>");
for( var i=0; i<=20; i++)
{
      if (i%2==0)
      {
            document.write (i + ",  ");
      }
      
}
document.write("<br> Odd: ".bold() + "<br>");
for( var i=0; i<=20; i++)
{
      if (i%2!=0)
      {
            document.write (i + ",  ");
      }
      
}
document.write("<br> Even: ".bold() + "<br>");
for( var i=2; i<=20; i++)
{
      if (i%2==0)
      {
            document.write (i + "K,   ");
      }
      
}

//Question # 7
var array = ["Apple", "Apple pie", "Cookies", "Chips", "Patties"];
var order = prompt("Welcome to Our Store. What you want to order ");
for (var i=0; i<array.length; i++)
{
      if (order== array[i])
      {
            document.write("<br>" + order + " is Available at index " + i + "in our bakery");
            break;
      }
      if (order!= array[i])
      {
      document.write("<br> We are sorry " + order + "is not available at our store");
      break;
      }
}

//Question # 8

var array =[24, 53, 78, 91, 12 ];
document.write("<br> Array items are : " + array);
var largest= 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}
document.write("<br> The largest number is " .bold() + largest);

//Question # 9
var array =[24, 53, 78, 91, 12 ];
document.write("<br> Array items are : " + array);
var smallest= array[0];

for (i=0; i< array.length ;i++){
      var temp = array[i]
      if ( temp < smallest) {
         smallest = array[i];
    }
}
document.write("<br> The smallest number is " .bold() + smallest);


//Question # 10


document.write("<br><br>");
for ( var i=1; i<=100; i++)
{
      if(i % 5 == 0)
      {
            document.write( i + ",  ");
      }
}






