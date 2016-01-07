// file: filter/filterGirls.js

var filterGirls = function (list, searchQuery) {
    if (searchQuery == '')  return list;

    return list.filter(function(item){
        return item.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
    }.bind(this))
}

module.exports = filterGirls;