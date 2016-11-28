  var number1 = "";
  
  number1 = prompt("Insert a number to turn to binary:")

 function BinaryTranslation(number1){

  var number2 = 2;
  var stringremain = "";
  
  while (number1 > 0){
   var division = number1 / number2;
   var remainder = number1 % number2;
   number1 = Math.floor(division);
      console.log(division, remainder);
	  stringremain = stringremain.concat(remainder.toString());
  }
    var binarystring = ReturnCorrectWay(stringremain) 
	return binarystring;
  }
  
  function ReturnCorrectWay(remainder){
     var flipped = "";
	 for (var i = remainder.length - 1; i >= 0; i--)
	  flipped += remainder[i];
	 return flipped;
	
  }
 
document.writeln ("<hr>");
document.writeln (BinaryTranslation(number1));