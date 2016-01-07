var component = {  
    attached: function () {
        console.log(' attached example');

    },
    props: ['msg', 'list'],
    template: require('./index.html'),
    data: function() {
        return {
            filterQuery: ''
        }
    },
    methods: {

    }
}
module.exports = component;  