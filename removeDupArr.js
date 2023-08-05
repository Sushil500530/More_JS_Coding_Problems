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
 