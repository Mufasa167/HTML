




let i=0
function boom(n) {
   for(i=1;i<=n;i++){

    const isSeven=i.toString().includes('7')
    if(isSeven && 0==i%7){console.log('BOOM-BOOM')}
    else if (0==i%7){console.log('BOOM')}
    else {console.log(i)}
   
}
}
let n=prompt('please enter a number')
boom(n);