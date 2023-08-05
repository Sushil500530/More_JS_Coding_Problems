const friends = [12, 15, 14, 18, 20, 64, 40, 32, 22, 45];
// const partial = friends.slice(2, 5);
const partial1 = friends.splice(2, 5, 24,28,99);
// console.log(partial)
console.log(friends)
console.log(partial1)
console.log(friends)