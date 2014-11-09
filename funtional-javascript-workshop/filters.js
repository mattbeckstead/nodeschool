/*var lessThan50Chars = function(msg){
	return msg.length < 50;
}

var arrayFromObject = function(object){
	return object.message;
}

function getShortMessages(messages){
	var filtered = messages.map(arrayFromObject).filter(lessThan50Chars);
	
	return filtered;								   
								   
}*/




module.exports = function getShortMessages(messages){
	return messages.filter(function(item){
		return item.message.length < 50;
	}).map(function(item){
			return item.message;
	});
	
};