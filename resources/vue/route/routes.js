// routes.js

var _ = require('lodash');

module.exports = function (crossroads, vue_app) {

	crossroads.addRoute('/', function(){
		// changeView
		// Example:
		/*
		this.mainView = 'page-example';
		 */
	}.bind(vue_app));


	crossroads.routed.add(console.log, console); //log all routes

	return crossroads;
}