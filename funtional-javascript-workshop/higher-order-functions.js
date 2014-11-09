function repeat(operation, num){
	/*for(var i = 0; i < num; i++){
		operation();	
	}*/
	if (num > 0){
		operation();
		repeat(operation, num -1);
	}
	else return;
}

module.exports = repeat;
