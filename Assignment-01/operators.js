//=================================================================================
//====================== Operators Exercise in JavaScript ===========================
//=================================================================================


console.log("----- Task 2: Operator Exercise -----");

//1.1 Addition 

console.log("1.1 Addition of Two Numbers:");
let a = 10;
let b = 5;
let sum = a+b;
console.log("First Number: " , a)
console.log("Second Number: " , b)
console.log("Addition of Two Numbers: " , sum);

console.log("------------------------------");

//1.2 Subtraction

console.log("1.2 Subtraction of Two Numbers:");

let sub = a-b;
console.log("First Number: " , a)
console.log("Second Number: " , b)
console.log("Subtraction of Two Numbers: " , sub);

console.log("------------------------------");

//1.3 Multiplication

console.log("1.3 Multiplication of Two Numbers:");  

let mul = a*b;
console.log("First Number: " , a)
console.log("Second Number: " , b)
console.log("Multiplication of Two Numbers: " , mul);

console.log("------------------------------");

//1.4 Division  

console.log("1.4 Division of Two Numbers:");

let div = a/b;
console.log("First Number: " , a)
console.log("Second Number: " , b)
console.log("Division of Two Numbers: " , div);

console.log("------------------------------");

//1.5 Modulus

console.log("1.5 Modulus of Two Numbers:");

let mod = a%b;
console.log("First Number: " , a)
console.log("Second Number: " , b)
console.log("Modulus of Two Numbers: " , mod);

console.log("------------------------------");

//2. Power

console.log("2. Power of a Number:");

let base = 2;
let exponent = 3;
let power = base ** exponent;
console.log("Base: " , base)
console.log("Exponent: " , exponent)
console.log("Power: " , power);

console.log("------------------------------");

 //3.1 Compare two numbers

console.log("3.1 Compare Two Numbers:");

let num1= 14;
let num2=20;
let isGreater = num1>num2;
console.log("First Number: " , num1)
console.log("Second Number: " , num2)
console.log("Is First Number Greater than Second Number? : " , isGreater);
if(isGreater){
    console.log(num1 , " is greater than " , num2);
}
else{
    console.log(num2 , " is greater than " , num1);
}

console.log("------------------------------");

//3.2 Check equality of two numbers

console.log("3.2 Check Equality of Two Numbers:");

let Num1= 20;
let Num2=20;
let isEqual = Num1===Num2;
console.log("First Number: " , Num1)
console.log("Second Number: " , Num2)
console.log("Are Both Numbers Equal? : " , isEqual);
console.log("----- End of Operator Exercise -----");
console.log("------------------------------");

//=================================================================================
//=================================================================================
//=================================================================================


//Example function to create

console.log("Example Function to Create:");
console.log("------------------------------");

// Function to add two numbers
console.log("Function to Add Two Numbers:");
function add(a,b){
    return a+b;
}

console.log("Addition of " ,5 , " and " , 10 , " is: " , add(5,10));
console.log("Addition of " ,20 , " and " , 10 , " is: " , add(20,10));
console.log("Addition of " ,30 , " and " , 10 , " is: " , add(30,10));
console.log("------------------------------");


//Function to find greater number
console.log("Function to Find Greater Number:");
function isgreater(nums1,nums2){
    if(nums1>nums2){
        return nums1;
    }
    else 
        return nums2 ;
}

console.log("Between " , 20 , "and" , 10 , "Greater is: ", isgreater(20,10));
console.log("Between " , 5 , "and" , 15 , "Greater is: ", isgreater(5,15));
console.log("Between " , 30 , "and" , 25 , "Greater is: ", isgreater(30,25));
console.log("------------------------------");

//Can Vote ??

console.log("Function to Check Voting Eligibility:");

function canvote(age,iscitizen){
    if(age>=18 && iscitizen===true){
        console.log("Yes, You are eligible to vote.");
    }
    else 
        console.log("No, You are not eligible to vote.");
}

function nameAgecitizen(name,age,iscitizen){
    console.log("My name is " , name);
    console.log("My age is " , age);
    canvote(age,iscitizen);
}

nameAgecitizen("Alice",20,true);
nameAgecitizen("BOB",17,true);
nameAgecitizen("Ofear",23,true);
console.log("------------------------------");

//calculate Discount 

console.log("Function to Calculate Discount:");

function discount(total, ismember){
    if(ismember===true && total>=100){
        let discount = total*0.1;
        const payment = total-discount;
        console.log("Congratulations! You got a discount.\nNow You have to pay only", payment , "taka.");
    }
    else if(ismember===true && total<100) {
        console.log("OoPS, You are our member but you purchased less than 100 taka");
    }
    else
        console.log("No Discount for you, Become our member and take discount");
}

console.log("A member purchasing 200 Taka");
discount(200,true);

console.log("A member purchasing 70 Taka");
discount(70,true);

console.log("A non-member purchasing 500 Taka");
discount(500,false);

console.log("----- End of Function Example Exercise -----")
console.log("------------------------------");


