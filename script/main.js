console.log('works!!!')
class Player{

    constructor(){
        this.health =100
        this.lives = 3
        this.element = document.getElementById('player')
        
    
        
    }
    
    jump() {
    
        console.log('playerCLICKED!')
        this.element.classList.toggle('jump')
        
    }

    shoot(){
        const bullet = document.getElementById('bullet')
        bullet.style.left = '-600px'
        bullet.style.bottom = '-153px'
        bullet.classList.toggle('shoot')



    }

    getEl(){
        return this.element
    }
    
    getlives(){
        return this.lives
    }

    getHealth(){
        return this.health
    }


    
    
}

class JerryEnemy{
    static numOfEnemies = 0;
    constructor(){  
        this.element = document.getElementById('jerry')
  
        JerryEnemy.numOfEnemies++
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

class GazorpazorpEnemy extends JerryEnemy{
    constructor(){
        super()
        this.element = document.getElementById('gazorpazorp')
       
    }
}

class SMWYGHead extends JerryEnemy{
    constructor(){
        super()
        this.element = document.getElementById('smwyg')
      
    }
}

/*----- constants -----*/


const player = new Player()
const jerry = new JerryEnemy()
const gazorpazorp = new GazorpazorpEnemy()
const smwygHead = new SMWYGHead()
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
jerry.moveX()
player.shoot()
gazorpazorp.moveX()
smwygHead.moveX()