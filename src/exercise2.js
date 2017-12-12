exports.run = function(input) {
  console.log("Exercise #2");

  var newTable = [];
  var numberArray = input.split("");

  numberArray.forEach(function(element) {
  console.log(element);
  if (element<=6){
  	newTable.push(element);
  }
  });
	
  	newNumber = parseInt(newTable);

	return newNumber;
};


