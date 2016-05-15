array = [5,6,50];

array.forEach(item => console.log(`forEach*205 = ${item*205}`));

var MMMMMMMMAP = array.map(item=>item*205);
console.log(`MAP*205 = ${MMMMMMMMAP}`);

var listtttttt = array.map(item=>(`<li>${item}</li>`));
console.log(listtttttt);
