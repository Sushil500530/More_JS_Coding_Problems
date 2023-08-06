/*
const NamesArray = [ 'abul', 'kabul','babul','gabul', 'mobul','mabul','ebul','abul','mobul', 'kabul', 'abul', 'mobul','abul'];
function removeDuplicateArrays(number){
    const unicName = [];
    for(let i =0; i < number.length; i++){
        const name = number[i];
        // console.log(i, name)
        if(unicName.includes(name) === false){
            unicName.push(name)
        }
    }
    return unicName;
}
 const removeValue = removeDuplicateArrays(NamesArray);
 console.log(removeValue)
*/
 function LeapYear(year){
    let correctYear = [ ];
    for(someYear of year){
        if ((someYear % 4 === 0) && (someYear % 100 !== 0) || (someYear % 400 === 0)){
            // console.log(someYear)
            correctYear.push(someYear)
        }
    }
    return correctYear;
 }
 const year = [2012, 2014, 2016, 2015, 2018, 2020, 2022, 2023, 2024, 2026, 2028, 2030];
 const finalLeapYear = LeapYear(year);
 console.log('LeapYear year is:', finalLeapYear)