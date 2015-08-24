/*

  _.apa

  (Underscore Array Prototype Append)

  Thomas Frank 2015, MIT Licensed
  http://opensource.org/licenses/MIT

  Dependencies: Load underscore.js before this library
  http://underscorejs.org/

  Usage:
  _.apa.on() - add underscore methods as array methods
  _.apa.off() - remove underscore methods as array methods

  Please Note: On by default after loading this library!

  Wraps underscore methods as array methods
  for those of us who think it is ok to extend the Array.prototype
  for sweeter syntax - but with the option to turn this on/off

  EXAMPLES:

  Given the array:

  var stooges = [
    {name: 'moe', age: 40},
    {name: 'larry', age: 50},
    {name: 'curly', age: 60}
  ];

  Now you can write
  stooges.pluck('name');
  instead of
  _.pluck(stooges,'name');

  And
  stooges.pluck('name').shuffle();
  instead of
  _.chain(stooges).pluck('name').shuffle().value();

  etc.

*/

(function(){

  var ap = Array.prototype;

  _.apa = {

    on: function(){
      _.chain(_).functions().each(function(f){
        function func(){
          return _[f].apply(_,[this].concat(_.toArray(arguments)));
        }
        func.apa = true;
        ap[f] = ap[f] || func;
      });
    },

    off: function(){
      for(var i in ap){
        if(ap[i].apa){ delete ap[i]; }
      }
    }

  };
  
})();

_.apa.on();
