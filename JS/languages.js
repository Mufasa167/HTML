let language=prompt('Name a language:')

switch(language){
    case 'mandarin':
        console.log(`${language} has the most native speakers `)
        break
    case 'spanish':
        console.log(`${language} is the second most spoken language in the world `)
    
        break
    case 'Hindi':
        console.log(`${language} comes in Number 4 `)
        break 
    case 'english':
        console.log(`${language} is in 3rd place `)
        break
    case 'arabic':
        console.log(`${language} is the 5th most spoken language!`)
        break    
    default:
        console.log(`${language} is not in the top 5 spoken languages`)    
}