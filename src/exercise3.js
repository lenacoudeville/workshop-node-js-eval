exports.run = function(input) {
  console.log("Exercise #3");

  var res = 0;
  
  input.forEach(function (item){
  	if (item.operator=='add'){
  		res += '+';
  	}
  	if (item.operator=='substract'){
  		res += '-' ;
  	}
  	res += item.value;
  })
  res = Math(res);
  return res;
};
