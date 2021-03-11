//PSEUDO CODE
/*--- 
Create a form with inputs

Create radio buttons that determine Fahrenheit or Celsius
    If the user clicks the Fahrenheit button it displays temp in F
    If the user clicks the Celsius button it displays the temp in C

Create an input for the value to be converted

Display the converted temperatures on the page

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

    NEED: 2 Radio Buttons
          Input box
          HTML output
          2 functions to convert temps

---*/ 



let temp = document.getElementById("temp").value;

function convertToCelsius(temp) {
    console.log((temp * 9)/5) + 32;
}

function convertToFahrenheit(temp) {
    console.log((temp - 32) * 5)/9;
}

//Check to see what unit user picked and convert temps
function convertTemp() {
    temp = document.getElementById("temp").value;
    let isChecked = document.getElementById('tempF').checked;
    if (isChecked == true) {
        document.getElementById("convertedTemp").innerHTML = 
        temp + " degrees Fahrenheit is " + convertToCelsius() + " degrees Celsius.";
    } else {
        document.getElementById("convertedTemp").innerHTML = 
        temp + " degrees Celsius is " + convertToFahrenheit() + " degrees Fahrenheit.";
    }
}

