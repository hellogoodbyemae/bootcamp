
// node parametercheck.js 5 9  
console.log(process.argv[2]);
console.log(process.argv[3]);

// if process.argv 2 & 3 are equal
if (process.argv[2] === process.argv[3]) {
  console.log("Equal");
}
else {
  console.log("Not equal");
}
// log "Equal"
// else
// log "not equal"

// Solution 1 - More Obvious
var a = process.argv[2];
var b = process.argv[3];

if (a === b) {
  console.log(true);
}
else {
  console.log(false);
}


// Solution 2 - Simplified (Re-factored)
console.log(process.argv[2] === process.argv[3]);
