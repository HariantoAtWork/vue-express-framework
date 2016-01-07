// file: bootstrap.vue.js

const
	vue_app      = require('./app');

global.crossroads = require('crossroads');
global.hasher     = require('hasher');

// initialize crossroads + hasher configs
require('./route/routes')(crossroads, vue_app);
require('./route/hasher')(hasher, crossroads);
