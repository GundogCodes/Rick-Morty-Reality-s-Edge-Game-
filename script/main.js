
console.log('works!!!')
class Player{

    constructor(){
        this.element = document.getElementById('player')
        this.element.style.bottom = '-170px'
        this.element.style.left ='-250px'
        
    }
    
    jump() {
    
        console.log('playerCLICKED!')
        this.element.classList.toggle('jump')
        
    }

    shoot(){
        const bullet = document.getElementById('bullet')
        bullet.style.left = '-1320px'
        bullet.style.bottom = '-153px'
        bullet.classList.toggle('shoot')
        


    }

    getEl(){
        return this.element
    }


    
    
}

class Enemy{
    constructor(){  
        this.element = document.getElementById('enemy')
        this.element.style.bottom = '-210px'
        this.element.style.right = '-80px'
 
    }

    moveX() {
        const randoInt = Math.floor(Math.random(0)*100)
        console.log(randoInt)
        if(randoInt%2 === 0){

            this.element.classList.add('move')
        }

    }
    getEl(){
        return this.element
    }  
}


/*----- constants -----*/


const player = new Player()
const enemy = new Enemy()
 
/*----- state variables -----*/

let gameOn =false
/*----- cached elements  -----*/

/*----- event listeners -----*/


document.body.addEventListener('keydown', function(e){
    console.log(e)
if(e.key === ' '){player.jump()} 
}) 

player.getEl().addEventListener('click',function(){player.jump()})

document.body.addEventListener('keydown', function(e){
    console.log(e)
if(e.key === 'q'){player.shoot()} 
}) 

/*----- functions -----*/
enemy.moveX()
player.shoot()