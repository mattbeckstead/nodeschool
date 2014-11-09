var checksUsersValid = function(goodUsers) {
	
	// console.log("goodUsers = : " + JSON.stringify(goodUsers, null, ' '));

	return function(submittedUsers){
		// console.log("submittedUsers = : " + JSON.stringify(submittedUsers, null, ' '));
		return submittedUsers.every(function(subUser){
			// console.log("users = : " + JSON.stringify(subUser, ' '));		
			return goodUsers.some(function(goodUser){
				return subUser.id == goodUser.id;
			});
		});
	};
};

module.exports = checksUsersValid;