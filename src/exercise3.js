exports.run = function(input) {
  console.log("Exercise #3");

  var res = 0;
  
  input.forEach(function (item){
  	if (item.operator=='add'){
  		res.push('+');
  	}
  	if (item.operator=='substract'){
  		res.push('-');
  	}
  	res.push(item.value);
  })

  parseInt(res);
  return res;
};
