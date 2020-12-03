//PSEUDO CODE
/*--- Create a form with inputs
Create an input that determines if it needs to convert
to Farenheit or Celsius 

Create an input for the value to be converted

Display the value in it's original unit and it in converted unit

Converting Fahrenheit to Celsius
    Get the Fahrenheit value from input box
    Run it through the formula to convert to Celsius    
        (F - 32) × 5/9
    Assign this to the value in Celsius input box.


Converting Celsius to Fahrenheit
    Get the Celsius value from input box
    Run it through the formula to convert to Fahrenheit    
        (C × 9/5) + 32
    Assign this to the value in Fahrenheit input box.

Changing background image to reflect temp
    If Celsius <=32 change to snowy scene
    If Celsius > 32 && <=100 change to green trees
    If Celsius is > 100 change to desert picture
    
---*/

//function to convert Fahrenheit to Celsius
function toCelsius() {
    let fahrenheit = document.getElementById("fahrenheitInput").value;
    console.log(fahrenheit);
    let convertToCelsius = ((fahrenheit - 32) * 5)/9;
    console.log(convertToCelsius);
    document.getElementById("celsiusInput").value = convertToCelsius;
}


//function to convert Celsius to Fahrenheit
function toFahrenheit() {
    let celsius = document.getElementById("celsiusInput").value;
    console.log(celsius);
    let convertToFahrenheit = ((celsius * 9)/5) + 32;
    console.log(convertToFahrenheit);
    let fahrenheitTemp = document.getElementById("fahrenheitInput").value;
    let celsiusTemp = document.getElementById("celsiusInput").value;
    document.getElementById("fahrenheitInput").value = convertToFahrenheit;
    
//change body background to match temperature
if (fahrenheitTemp <= 32 || celsiusTemp <= 0) {
    document.getElementById("bg").style.backgroundImage = "url(images/winter.jpeg)";
} else if (fahrenheitTemp >= 33 && fahrenheitTemp <= 90 && celsiusTemp > 0 && celsiusTemp <= 32.2) {
    document.getElementById("bg").style.backgroundImage = "url(images/misty_woods.jpg)";
} else {
    document.getElementById("bg").style.backgroundImage = "url(images/cacti.jpg)";
}
}

/* --For the temperature lab we’re going to create a temperature converter that:
Uses a form that:
Has an input that decides whether the conversion is Fahrenheit to Celsius or Vice Versa
Has input for the value to be converted
Displays the value in its original units and in the converted units
Has code that is well documented with comments, has good code structure, and follows naming conventions
Optionally: Make the temperature converter do multiple units, convert different types of units (meters to inches etc) and/or make it beautiful using HTML and CSS, or interactive using JavaScript.
Push your code to your repository. ---*/