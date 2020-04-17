var onesTranslate = function(number){
  var arrayOnes = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  number = parseInt(number) % 10;
  return arrayOnes[number];
};

var tensTranslate = function (number) {
  var arrayTens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  number = parseInt(number / 10) % 10;
  return arrayTens[number];
};

var hundredsTranslate = function (number) {
  var arrayHundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  number = parseInt(number / 100) % 10;
  return arrayHundreds[number];
};

var thousandsTranslate = function (number) {
  var arrayThousands = ["", "M", "MM", "MMM"];
  number = parseInt(number / 1000) % 10;
  return arrayThousands[number];
};

$(document).ready(function(){
  $("form#numeralForm").submit(function(event){
    event.preventDefault();
    var arabic = parseInt($("input#number").val());
    var roman = thousandsTranslate(arabic) + hundredsTranslate(arabic) + tensTranslate(arabic) + onesTranslate(arabic);
    $("#arabic").text(arabic);
    $("#roman").text(roman);
    $("#response").show();
  });
});