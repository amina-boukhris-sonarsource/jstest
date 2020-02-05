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
 mySet1.add(8);
 mySet1.add(7); // Noncompliant - element is already in the set
var Person = Backbone.Model.extend({
    defaults: {  // Noncompliant; every instance of Person will share the same instance of favoriteColors
        favoriteColors: ["blue","purple","raspberry"]
    }
});

x = 42;
y = x.length;   // Noncompliant, Number type doesn't have "length" property
 mySet1.add(8);
 mySet1.add(7); // Noncompliant - element is already in the set
var Person = Backbone.Model.extend({
    defaults: {  // Noncompliant; every instance of Person will share the same instance of favoriteColors
        favoriteColors: ["blue","purple","raspberry"]
    }
});
say("hello", "world", "!"); // Noncompliant; last argument is not used
 fruits[1] = "banana";
 fruits[1] = "apple";  // Noncompliant - value on index 1 is overwritten
