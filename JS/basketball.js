const john=[89,120,103]
const mike=[116,94,123]

let avg1=0
let avg2=0
let sum1=0
let sum2=0

for(i=0;i<john.length;i++)
{
sum1=sum1+john[i]
sum2+=mike[i]
}

avg1=sum1/john.length
avg2=sum2/mike.length

if(avg1==avg2){
console.log('Its a draw');}

else if(avg1>avg2){
consol.log(`John is the winner with and average point tally of ${avg1} points per game`);}

else{console.log(`Mike is the winner with and average point tally of ${avg2} points per game`)}

