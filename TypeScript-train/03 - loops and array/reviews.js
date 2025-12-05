var reviews = [1, 2, 5.6, 7, 8, 10, 15];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log("avg review : ".concat(total / reviews.length));
