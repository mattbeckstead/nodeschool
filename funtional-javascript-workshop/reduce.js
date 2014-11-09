function countWords(inputWords){


	return inputWords.reduce(function(previousValue, currentValue, index, array) {
		if( previousValue[currentValue] != null ){
			previousValue[currentValue]++;
		}
		else{
			previousValue[currentValue] = 1;
		}
		return previousValue;
	}, {});


}

module.exports = countWords;
