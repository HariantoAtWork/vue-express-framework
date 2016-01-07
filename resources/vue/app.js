const  
    Vue = require('./init/Vue'),
    _   = require('lodash');

var root = new Vue({  
    ready: function (argument) {
        console.log("app is ready")
    },

    // element
    el: "#app",
    // data
    data: {
        msg: '',
        girls: [
            { 'name': 'Amber'     , 'age': 16 },
            { 'name': 'Benice'    , 'age': 17 },
            { 'name': 'Cynthia'   , 'age': 18 },
            { 'name': 'Denise'    , 'age': 19 },
            { 'name': 'Eva'       , 'age': 20 },
            { 'name': 'Florence'  , 'age': 21 },
            { 'name': 'Geneve'    , 'age': 22 },
            { 'name': 'Hanna'     , 'age': 23 },
            { 'name': 'Iris'      , 'age': 24 },
            { 'name': 'Jocelyn'   , 'age': 25 },
            { 'name': 'Karen'     , 'age': 26 },
            { 'name': 'Lena'      , 'age': 27 },
            { 'name': 'Marissa'   , 'age': 28 },
            { 'name': 'Nicolette' , 'age': 29 },
            { 'name': 'Olivia'    , 'age': 30 },
            { 'name': 'Patricia'  , 'age': 31 },
            { 'name': 'Quitis'    , 'age': 32 },
            { 'name': 'Rochelle'  , 'age': 33 },
            { 'name': 'Sandy'     , 'age': 34 },
            { 'name': 'Tina'      , 'age': 35 },
            { 'name': 'Uma'       , 'age': 36 },
            { 'name': 'Victoria'  , 'age': 37 },
            { 'name': 'Winry'     , 'age': 38 },
            { 'name': 'Xena'      , 'age': 39 },
            { 'name': 'Yvonne'    , 'age': 40 },
            { 'name': 'Zabora'    , 'age': 41 },
        ]
    },
    // methods
    methods: {

    },
    // computed
    // computed can't pass value in HTML
    computed: {

    }
});

module.exports = root; 