const shopingCard = [
    { name: 'shoe', price: 1200, quantity: 2},
    { name: 'shirt', price: 2200, quantity: 5},
    { name: 'pant', price: 2500, quantity: 4},
    { name: 'belt', price: 600, quantity:3}
];
// function totalCost(products){
//     let sum = 0;
//     for(let i = 0; i < products.length; i++ ) {
//         const index = products[i];
//         // console.log(index)
//         const totalProducts = index.price * index.quantity;
//         sum = sum + totalProducts;
//     }
//     return sum;
// }
// const tatalPrice = totalCost(shopingCard);
//  console.log(tatalPrice)

 function shopingCalculate(price){
    let sum = 0;
    for(let index of shopingCard){
        // const index = indexs;
        const phonePrice = index.price * index.quantity;
        // console.log(index)
        sum = sum + phonePrice;
    }
    return sum;
 }
 const sumOfCard = shopingCalculate(shopingCard);
 console.log(sumOfCard)