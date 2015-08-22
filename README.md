#_.apa
## (Underscore Array Prototype Append)

Wrap underscore methods as array methods
for those of us who thinks it is ok to extend the Array.prototype
for sweeter syntax - but with the option to turn this on/off

Thomas Frank 2015, MIT Licensed
[http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)

###Dependencies:
Load underscore.js before this library
[http://underscorejs.org/](http://underscorejs.org/)

###Usage:
Add underscore methods as array methods
```javascript
_.apa.on()
```
Remove underscore methods as array methods:
```javascript
_.apa.off()
```

#####Please Note: On by default after loading this library!

##Examples

Given the array:
```javascript
var stooges = [
  {name: 'moe', age: 40},
  {name: 'larry', age: 50},
  {name: 'curly', age: 60}
];
```
Now you can write
```javascript 
stooges.pluck('name');
``` 
instead of
```javascript  
_.pluck(stooges,'name');
``` 

And
 ```javascript 
stooges.pluck('name').shuffle();
```   
instead of
 ```javascript  
_.chain(stooges).pluck('name').shuffle().value();
``` 
etc.

