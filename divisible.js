//kono songkha ke prothome 3 diye jodi vag jay tahle 'foo' dekhabe
// r jody 5 diye vag joy tahle "ber dekhabe"
//jodi 3 and 5 diye vag jay tahle "foobar" lekha t dekhabe

for(let i = 1; i <= 50; i++){
    // console.log(i)
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i,'-','foobar')
    }
    else if(i % 3 ===0){
        console.log(i,'-','foo')
    }
    else if(i % 5 === 0){
        console.log(i,'-', 'bar')
    }
    else{
        console.log(i)
    }
}
// if