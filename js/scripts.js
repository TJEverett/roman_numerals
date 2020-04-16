var onesTranslate = function(number){
  var arrayOnes = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  console.log("Starting number: " + number);
  number = parseInt(number) % 10;
  console.log("Ones place: " + number);
  return arrayOnes[number];
};