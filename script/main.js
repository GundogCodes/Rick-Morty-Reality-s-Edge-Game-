
console.log('works!!!')
class Player{

    constructor(){
        this.element = document.getElementById('player')
        this.element.style.bottom = '1010px'
        this.element.style.right = '800px'
        
    }
    
    jump() {
    
        console.log('playerCLICKED!')
        this.element.classList.toggle('jump')
        
    }

    getEl(){
        return this.element
    }
    
    
}

class Enemy{
    constructor(){
        this.element = document.getElementById('enemy')
        this.element.style.bottom = '1260px'
        this.element.style.right = '70px'
    }

    move() {
    this.element.classList.add('move')

    }  
}


/*----- constants -----*/


const player = new Player()
const enemy = new Enemy()
 
/*----- state variables -----*/

let gameOn =true
/*----- cached elements  -----*/

/*----- event listeners -----*/


document.body.addEventListener('keydown', function(e){
    console.log(e)
if(e.key === ' '){player.jump()} 
}) 

player.getEl().addEventListener('click',function(){player.jump()})



/*----- functions -----*/

enemy.move()
