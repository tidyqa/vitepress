---
layout: doc
title: Conversion and Calculation - JavaScript Snippets
description: Useful for unit conversions and basic calculations.
head:
  - ['meta', {property: 'og:title', content:  'Conversion and Calculation - JavaScript Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/javascript/conversion-and-calculation/' }] 
  - ['meta', {name: 'twitter:title', content: 'Conversion and Calculation - JavaScript Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/javascript/conversion-and-calculation/'}]
---

# Conversion and Calculation

## Temperature Conversion (Celsius to Fahrenheit)

This function converts a temperature from Celsius to Fahrenheit using the formula `(C * 9/5) + 32`.

```javascript
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(25)); // Output: 77
```

## Distance Conversion (Kilometers to Miles)

Convert a distance from kilometers to miles using the conversion factor 0.621371.

```javascript
function kilometersToMiles(kilometers) {
  return kilometers * 0.621371;
}
console.log(kilometersToMiles(10)); // Output: 6.21371
```

## Currency Conversion (USD to EUR)

Convert an amount from US Dollars (USD) to Euros (EUR) using the given exchange rate.

```javascript
function usdToEur(usd, exchangeRate) {
  return usd * exchangeRate;
}
console.log(usdToEur(100, 0.85)); // Output: 85
```

## Time Conversion (Seconds to Time)

Convert time in seconds to hours, minutes, and remaining seconds.

```javascript
function secondsToTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return { hours, minutes, seconds: remainingSeconds };
}
console.log(secondsToTime(7265)); // Output: { hours: 2, minutes: 1, seconds: 5 }
```

## Area Calculation (Rectangle Area)

Calculate the area of a rectangle given its width and height.

```javascript
function calculateRectangleArea(width, height) {
  return width * height;
}
console.log(calculateRectangleArea(5, 8)); // Output: 40
```

## Volume Conversion (Cubic Meters to Cubic Feet)

Convert volume from cubic meters to cubic feet using the conversion factor 35.3147.

```javascript
function cubicMetersToCubicFeet(cubicMeters) {
  return cubicMeters * 35.3147;
}
console.log(cubicMetersToCubicFeet(2)); // Output: 70.6294
```

## Speed Conversion (KPH to MPH)

Convert speed from kilometers per hour to miles per hour using the conversion factor 0.621371.

```javascript
function kphToMph(kph) {
  return kph * 0.621371;
}
console.log(kphToMph(100)); // Output: 62.1371
```

## Weight Conversion (Kilograms to Pounds)

Convert weight from kilograms to pounds using the conversion factor 2.20462.

```javascript
function kgToLbs(kilograms) {
  return kilograms * 2.20462;
}
console.log(kgToLbs(50)); // Output: 110.231
```

## Age Calculation

Calculate a person's age based on their birth year and the current year.

```javascript
function calculateAge(birthYear, currentYear) {
  return currentYear - birthYear;
}
console.log(calculateAge(1990, 2023)); // Output: 33
```

## Percentage Calculation

Calculate the percentage of a value relative to a total.

```javascript
function calculatePercentage(value, total) {
  return (value / total) * 100;
}
console.log(calculatePercentage(25, 100)); // Output: 25
```

## Binary to Decimal Conversion

Convert a binary number to decimal.

```javascript
function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}
console.log(binaryToDecimal('1010')); // Output: 10
```

## Decimal to Binary Conversion

Convert a decimal number to binary.

```javascript
function decimalToBinary(decimal) {
  return (decimal >>> 0).toString(2);
}
console.log(decimalToBinary(10)); // Output: '1010'
```

## Time Difference Calculation

Calculate the time difference between two timestamps in milliseconds.

```javascript
function calculateTimeDifference(start, end) {
  return new Date(end) - new Date(start);
}
console.log(calculateTimeDifference('2023-08-01', '2023-08-10')); // Output: 777600000
```

## Age in Days Calculation

Calculate a person's age in days based on their birthdate and the current date.

```javascript
function calculateAgeInDays(birthdate) {
  const birthDate = new Date(birthdate);
  const currentDate = new Date();
  const ageInMilliseconds = currentDate - birthDate;
  return ageInMilliseconds / (1000 * 60 * 60 * 24);
}
console.log(calculateAgeInDays('1990-01-01')); // Output: (approximate value based on current date)
```

## Unit Conversion

Convert a value from one unit to another based on conversion factors.

```javascript
function convertUnit(value, fromUnit, toUnit) {
  const unitConversions = {
    meter: 1,
    feet: 3.28084,
    gallon: 0.264172,
    liter: 1,
  };
  return (value * unitConversions[fromUnit]) / unitConversions[toUnit];
}
console.log(convertUnit(5, 'feet', 'meter')); // Output: 1.524
```

## BMI Calculation

Calculate the Body Mass Index (BMI) based on weight (kg) and height (m).

```javascript
function calculateBMI(weight, height) {
  return weight / (height * height);
}
console.log(calculateBMI(70, 1.75)); // Output: 22.857
```

## Fuel Efficiency Calculation

Calculate fuel efficiency in miles per gallon (MPG) based on distance and fuel consumed.

```javascript
function calculateMPG(distanceMiles, fuelGallons) {
  return distanceMiles / fuelGallons;
}
console.log(calculateMPG(350, 12)); // Output: 29.166666666666668
```

## Time to Travel Calculation

Calculate the time it takes to travel a distance at a certain speed.

```javascript
function calculateTravelTime(distance, speed) {
  return distance / speed;
}
console.log(calculateTravelTime(200, 60)); // Output: 3.3333333333333335
```

## Area of a Circle Calculation

Calculate the area of a circle based on its radius.

```javascript
function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}
console.log(calculateCircleArea(5)); // Output: 78.53981633974483
```

## Fuel Efficiency Calculation (Liters per 100 Kilometers to Miles per Gallon)

Convert fuel efficiency from liters per 100 kilometers (L/100km) to miles per gallon (MPG) using the conversion factor 235.214583.

```js
function l100kmToMpg(litersPer100km) {
  const mpg = 235.214583 / litersPer100km;
  return mpg.toFixed(2);
}
console.log(l100kmToMpg(7.5)); // Output: 31.36
```