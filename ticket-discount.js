// first 100 => 100tk
// second 101-200 => 90tk
// 200+ => 70tk

function ticketPrice(tickeQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const rest200Rate = 70;
    if(tickeQuantity <= 100){
        const price = tickeQuantity * first100Rate;
        return price;
    }
    else if( tickeQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restQuantity = tickeQuantity - 100;
        const  restQuantityPrice = restQuantity * second100Rate;
        const totalQuantity = first100Price + restQuantityPrice;       
        return totalQuantity;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restQuantityPriceAbov = tickeQuantity - 200;
        const restQuantityTolal = restQuantityPriceAbov * rest200Rate;
        const totalQuantityPrice = restQuantityTolal + first100Price + second100Price;
        return totalQuantityPrice;
    }
}
const totalTicket = ticketPrice(1);
console.log('Price :', totalTicket)
const totalTicket2 = ticketPrice(110);
console.log('Price :', totalTicket2)
const totalTicket3 = ticketPrice(201);
console.log('Price :', totalTicket3)