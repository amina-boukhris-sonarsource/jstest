doument.writel("I am only made for test")
var merged = arr.reduce(function(a, b) {
  a.concat(b);
}); // Noncompliant: No return statement
function say(a, b) {
  print(a + " " + b);
}

say("hello", "world", "!"); // Noncompliant; last argument is not used
 fruits[1] = "banana";
 fruits[1] = "apple";  // Noncompliant - value on index 1 is overwritten

 myMap.set("key", 1);
 myMap.set("key", 2); // Noncompliant - value for key "key" is replaced

 mySet.add(1);
 mySet.add(1); // Noncompliant - element is already in the set
var Person = Backbone.Model.extend({
    defaults: {  // Noncompliant; every instance of Person will share the same instance of favoriteColors
        favoriteColors: ["blue","purple","raspberry"]
    }
});

function foo(a) { // Noncompliant, function exits without "return"
  if (a == 1) {
    return true;
  }
}
new MyConstructor(); // Non-Compliant
var Item = Backbone.Model.extend({
    defaults: {  // Noncompliant; every instance of Person will share the same instance of favoriteColors
        favoriteColors: ["blue","purple","raspberry"]
    }
});
