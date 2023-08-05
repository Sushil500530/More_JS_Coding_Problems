const name = "bangladesh";
const age = 15;
const isIndependent = true;
const mobile = [ 'sumsung', 'xiomi', 'samphony', 'itel', 'techno', 'infinix'];
const BrandPhone= {brand:'sumsung', launch:'newYear', price: 19000, place:'dhaka'}
function add(num1, num2){
    return num1 + num2;
}
console.log(typeof name);
console.log(typeof age);
console.log(typeof isIndependent);
// array er type check korar jonno--Array.isArray use korte hoy
console.log(Array.isArray(mobile));

console.log(Array.isArray(age));

console.log(typeof BrandPhone);
console.log(typeof add);

const arrayNumber = [21, 52, 14, 64, 24, 42, 35];
console.log(arrayNumber.indexOf(35))
if(arrayNumber.indexOf(53) !== -1){
   
    return arrayNumber;
}
const oddArray = [54, 45, 85, 52, 80, 87]
const fullArray = arrayNumber.concat(oddArray);
console.log(fullArray)