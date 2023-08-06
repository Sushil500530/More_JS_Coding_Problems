function add(num1, num2){
    // kono karore jodi number ta string er vitore diye dei tahle seti k handle kora kothin hoye Poer ,,, ata k handle korar jnno ata user kora jete pare 
    if(typeof num1 !=='number' || typeof num2 !== 'number'){
        return "Please enter a number!"
    }
    return num1 + num2;
}
const result = add(12, 56);
console.log(result)


// debugger
function multiply(number1, number2){
    return number1 * number2;
}
const output = multiply(16+4,4);
console.log(output)