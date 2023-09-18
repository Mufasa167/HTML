let grade=50
let charGrade='f'
switch(charGrade){
    case 'f':
        console.log('Your grade range is 0-64')
    break
    
    case 'd':
        console.log('your grade range is 65-69')
    break
    
    case 'c':
        console.log('your grade range is 70-79')
    break
    
    case 'b':
        console.log('your grade range is 80-90')
    break 
    
    case 'a':
        console.log('your grade is 90-100')

     default:
        console.log('sorry the value doesn;t exist')   
}


if(grade<0 && grade>100)
 console.log('Please enter a valid grade number from 0-100')


if(grade>0 & grade<65)
 console.log('your grade is F')

if(grade>64 & grade<70)
 console.log('your grade is D')

if(grade>69 & grade<80)
 console.log('your grade is C')

if(grade>79 & grade<90)
 console.log('your grade is B')

if(grade>89 & grade<101)
 console.log('your grade is A')

