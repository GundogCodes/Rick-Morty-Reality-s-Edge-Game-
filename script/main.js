
console.log('works!!!')
class Player{
    constructor(){
        this.element = document.getElementById('player')
    
    
    }

    
}

class Enemy{
    constructor(){

    }
}


/*----- constants -----*/

const player =document.getElementById('player')
player.addEventListener('click',player.jump)
console.log('playerr',player)

/*----- state variables -----*/

let gameOn =true

/*----- cached elements  -----*/

/*----- event listeners -----*/

document.body.addEventListener('keydown', function(e){
    console.log(e)
if(e.key === ' '){jump()} 
})


/*----- functions -----*/

function jump() {
    
    console.log('playerCLICKED!')
    player.classList.toggle('jump')

      
    
}