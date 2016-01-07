var starDate = new Date();

/**
 * Add leading zeros to a string
 * @param  {Integer}
 * @param  {Word}
 * @return {String}
 */
var zeroPad = function(n,w){  
  var pad = new Array(1+w).join('0');
  return (pad+n).slice(-pad.length);
}

var timer = {  
    lapse: function() {
        var differentTime = (new Date()) - starDate;

        var milliseconds = Math.floor(differentTime) % 1000,
            seconds = Math.floor(differentTime / 1000) % 60,
            minutes = Math.floor(differentTime / (1000*60)) % 60,
            hours = Math.floor(differentTime / (1000*60*60));

        var output = hours+':'+zeroPad(minutes,2)+':'+zeroPad(seconds,2)+'.'+zeroPad(-milliseconds,3);
        return output;
    }
}
module.exports = timer;  