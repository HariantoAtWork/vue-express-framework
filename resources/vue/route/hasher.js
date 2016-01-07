// file: vue/route/hasher.js
module.exports = function (hasher, crossroads) {

	//setup hasher
	var parseHash = function(newHash, oldHash){
		crossroads.parse(newHash);
	};
	
	hasher.initialized.add(parseHash); //parse initial hash
	hasher.changed.add(parseHash); //parse hash changes
	hasher.init(); //start listening for history change
	return hasher;
}