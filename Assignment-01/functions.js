//=================================================================================
//====================== Function Exercise in JavaScript ===========================
//=================================================================================

console.log("----- Task 3: Function Exercise -----");
console.log("------------------------------");


// 1. Convert Celsius to Fahrenheit
console.log("1. Function to Convert Celsius to Fahrenheit:");

function celsiusToFahrenheit(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit.toFixed(2);
}

console.log("Celsius: ", 0);
console.log("Fahrenheit: ", celsiusToFahrenheit(0));

console.log("Celsius: ", 36);
console.log("Fahrenheit: ", celsiusToFahrenheit(36));

console.log("------------------------------");


// 2. Calculate BMI
console.log("2. Function to Calculate BMI:");

function calculateBMI(weight, height){
    let bmi = weight / (height * height);
    return bmi.toFixed(2);
}

console.log("Weight: 70 kg");
console.log("Height: 1.75 m");
console.log("BMI: ", calculateBMI(70, 1.75));

console.log("------------------------------");


// 3. Generate Username
console.log("3. Function to Generate Username:");

function generateUsername(name, year){
    let username = name.toLowerCase() + year;
    return username;
}

console.log("Name: Alice");
console.log("Year: 2004");
console.log("Generated Username: ", generateUsername("Alice", 2001));

console.log("Name: XYZ");
console.log("Year: 1994");
console.log("Generated Username: ", generateUsername("XYZ", 1994));

console.log("------------------------------");


// 4. Calculate Tax Based on Income
console.log("4. Function to Calculate Tax:");

function calculateTax(income){
    let tax = 0;

    if(income <= 20000){
        tax = 0;
    }
    else if(income <= 50000){
        tax = income * 0.1;
    }
    else{
        tax = income * 0.2;
    }

    return tax;
}

console.log("Income: 18000");
console.log("Tax: ", calculateTax(18000));

console.log("Income: 40000");
console.log("Tax: ", calculateTax(40000));

console.log("Income: 80000");
console.log("Tax: ", calculateTax(80000));

console.log("------------------------------");


// 5. Validate Password
console.log("5. Function to Validate Password:");

function validatePassword(password){
    if(password.length >= 8){
        console.log("Password is valid.");
    }
    else{
        console.log("Password is too short. Minimum 8 characters required.");
    }
}

console.log("Password: 'abc123'");
validatePassword("abc123");

console.log("Password: 'abc12345'");
validatePassword("abc12345");

console.log("------------------------------");
console.log("----- End of Function Exercise -----");
