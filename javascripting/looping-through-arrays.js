var pets = ['cat', 'dog', 'rat'];


var pluralize = function(arr) {
	for(var i = 0; i < arr.length; i++){
		arr[i] = arr[i].concat('s');
	}	
}

pluralize(pets);

console.log(pets);