myCountry={
    country:'Iceland',
    capital:'Rikjavik',
    population:'345789 ',
    language:'Iclandic',
    neighbours:[],
    
    checkIsland(){
        (myCountry.neighbours.length==0)?myCountry.isIsland=true:myCountry.isIsland=false;
    },
    describe(){
        console.log(this.country+" has a population of "+this.population+" people, with it's capital "+this.capital+" and their mother tongue is "+this.language+" and has "+this.neighbours.length+" neighbours ")
    },
    
};

myCountry.describe();

myCountry.checkIsland();
if(myCountry.isIsland==true){
    console.log('The country is an Island')
}
else console.log('The country has borders.')