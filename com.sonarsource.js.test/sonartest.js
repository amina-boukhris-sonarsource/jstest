doument.writel("I am only made for test")
var merged = arr.reduce(function(a, b) {
  a.concat(b);
}); // Noncompliant: No return statement
function say(a, b) {
  print(a + " " + b);
}

say("hello", "world", "!"); // Noncompliant; last argument is not used
