` Implement a program that takes a list of temperatures in Celsius as input from the
 user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 
 and store the converted temperatures in an array. Use a for loop to perform the 
 conversion for each temperature.`;

 function celciusToFahrenHeit(celciusTempratures:number[]){
  let fahrenheitItTempratures:number[]=[]
  for(let i = 0; i < celciusTempratures.length;i++){
    let fahrenheit = (celciusTempratures[i] * 9/5) +32
    fahrenheitItTempratures.push(fahrenheit)
  }
  return fahrenheitItTempratures
 }
 let tempratures:number[]=[10,20,17,15]
 let fahrenheitItTempratures:number[]=celciusToFahrenHeit(tempratures)
 
 console.log(`Celcius Temprature:`,tempratures)
 console.log(`Celcius Convertd to Fahrenheit Temprature:`,fahrenheitItTempratures)

 

