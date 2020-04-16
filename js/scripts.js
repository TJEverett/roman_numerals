var onesTranslate = function(number){
  var arrayOnes = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  console.log("Starting number: " + number);
  number = parseInt(number) % 10;
  console.log("Ones place: " + number);
  return arrayOnes[number];
};

var tensTranslate = function (number) {
  var arrayTens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  console.log("Starting number: " + number);
  number = parseInt(number / 10) % 10;
  console.log("Tens place: " + number);
  return arrayTens[number];
};

var hundredsTranslate = function (number) {
  var arrayHundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  console.log("Starting number: " + number);
  number = parseInt(number / 100) % 10;
  console.log("Hundreds place: " + number);
  return arrayHundreds[number];
};

var thousandsTranslate = function (number) {
  var arrayThousands = ["", "M", "MM", "MMM"];
  console.log("Starting number: " + number);
  number = parseInt(number / 1000) % 10;
  console.log("Thousands place: " + number);
  return arrayThousands[number];
};