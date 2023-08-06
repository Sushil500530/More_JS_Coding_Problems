
// feet convert inches 
function feetToInches(feet){
    const inches = 12 * feet;
    return inches;
}
const feetNumber = 8;
const feetCalculate = feetToInches(feetNumber);
console.log(feetNumber, 'feet is convert to ', feetCalculate, 'inches')
// inches convert feet 
function inchesToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const inchesNumber = 152;
const inchesResult = inchesToFeet(inchesNumber);
console.log(inchesNumber,'iches is', inchesResult, 'feet')


// centimeter to meter convert 
function centimeterToMeter(centimeter){
    const meter = centimeter / 100;
    return meter;
}
const cm = 500;
const meterResult = centimeterToMeter(cm);
console.log(cm, 'cm is', meterResult, 'meter')


//  counter paper of some book  page 
function paperRequirments(book1, book2, book3){
    const perBook1 = 100 * book1;
    const perBook2 = 200 * book2;
    const perBook3 = 300 * book3;
    const totalPaper = perBook1 + perBook2 + perBook3;
    return totalPaper
   
}
const totalBookPage =paperRequirments(2, 4, 3) ;
console.log('Total book page is :', totalBookPage)


function bestFriend(friends){
    let bestu ='';
    for(let friend of friends){
        // console.log(friend)
        if(friend.length > bestu.length){
            bestu = friend;
            // console.log(bestu.length);
        }
    }
    return bestu;
}
const friends = ['sajid', 'mamun', 'kamal', 'jubauer bin rased', 'chanku'];
const bestFriendName = bestFriend(friends);
console.log('My Best Friend Name :', bestFriendName)



function removeReverse(numbers){
    for(let reverse of numbers){
        // console.log(reverse)
        if(reverse < -90){
            break;
        }
        console.log(reverse)
    }
}
const numbers = [45, 87, 96, 11, 63, -56, 71, 28];
removeReverse(number);




