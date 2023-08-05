const phones = [
    { name: 'Sumsung', camra: 12, storage: '32gb', price: 36000, color: 'silver'},
    { name: 'Walton', camra: 7, storage: '32gb', price: 22000, color: 'silver'},
    { name: 'iphone', camra: 14, storage: '32gb', price: 82000, color: 'golden'},
    { name: 'Xaomi', camra: 10, storage: '32gb', price: 52000, color: 'whiteblue'},
    { name: 'Oppo', camra: 16, storage: '32gb', price: 20000, color: 'black'},
    { name: 'Nokia', camra: 9, storage: '32gb', price: 44000, color: 'silver'},
    { name: 'HTC', camra: 13, storage: '32gb', price: 62000, color: 'silver'}
]
// console.log(phones)
// lowest price check in phones 
function cheapestPhone(taka){
    let cheapest = taka[0];
    for(let i = 0; i <= taka.length-1; i++){
        const phone = taka[i];
        // console.log(Phone)
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const lowestPrice = cheapestPhone(phones);
console.log(lowestPrice);
//  lowest camras px in the phones 
// function cheapestPhone(taka){
//     let cheapest = taka[0];
//     for(let i = 0; i <= taka.length-1; i++){
//         const phone = taka[i];
//         // console.log(Phone)
//         if(phone.camra < cheapest.camra){
//             cheapest = phone;
//         }
//     }
//     return cheapest;
// }
// const lowestPrice = cheapestPhone(phones);
// console.log(lowestPrice);
