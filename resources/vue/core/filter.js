// file: vue/core/filter.js

// doc: http://vuejs.org/api/#Vue-filter
module.exports = function (Vue) {
	// Example: Vue.filter('filterSelectOptions',          require('./filter/filterSelectOptions'));
	Vue.filter('filterGirls',          require('./filter/filterGirls'));

	return Vue;
}