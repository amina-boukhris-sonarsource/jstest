say("hello", "world", "!"); // Noncompliant; last argument is not used
 fruits[1] = "banana";
 fruits[1] = "apple";  // Noncompliant - value on index 1 is overwritten

 myMap.set("key", 1);
myCollection.set("hbd" , 1);
 myMap.set("key", 2); // Noncompliant - value for key "key" is replaced

 mySet.add(1);
 mySet.add(1); // Noncompliant - element is already in the set
var Person = Backbone.Model.extend({
    defaults: {  // Noncompliant; every instance of Person will share the same instance of favoriteColors
        favoriteColors: ["blue","purple","raspberry"]
    }
});
for (;;) {  // Noncompliant; end condition omitted
  // ...
}

var j = 0;
while (true) { // Noncompliant; constant end condition
  j++;
}
var myNumber = 010;   // Noncompliant. myNumber will hold 8, not 10 - was this really expected?

var k;
var mdrr ;

var b = true;
while (b) { // Noncompliant; constant end condition
  k++;
}
function say(a, b) {
  print(a + " " + b);
}

say("hello", "world", "!"); // Noncompliant; last argument is not used
