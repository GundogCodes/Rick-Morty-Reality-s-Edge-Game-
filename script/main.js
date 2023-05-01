console.log('works!!!')
class Player{

    constructor(){
        this.health =100
        this.lives = 3
        this.element = document.getElementById('player')
        this.top = this.element.offsetTop 
        console.log('PLAYER TOP',this.top) 
        
    }
    
    jump() {
    
        console.log('playerCLICKED!')
        this.element.classList.toggle('jump')
       
        
    }

    shoot(){
        bullet.style.visibility = 'visible'
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
        this.name = 'jerry'
        JerryEnemy.numOfEnemies++
        this.top = this.element.offsetTop 
        console.log(`${this.name} TOP`,this.top) 
    }

    moveX() {
        const randoInt = Math.floor(Math.random(0)*100)
        console.log(randoInt)
        if(randoInt%2 === 0){
            this.element.style.visibility = 'visible'
            this.element.classList.add('move')
        }

    }
    getEl(){
        return this.element
    } 
    getName(){
        return this.name
    } 
}

class GazorpazorpEnemy extends JerryEnemy{
    constructor(){
        super()
        this.name = 'gazorpazorp'
        console.log(`${this.name} TOP`,this.top) 
        this.element = document.getElementById('gazorpazorp')
       
    }
}

class SMWYGHead extends JerryEnemy{
    constructor(){
        super()
        this.name  = 'showMeWhatYouGotHead'
        console.log(`${this.name} TOP`,this.top) 
        this.element = document.getElementById('smwyg')
      
    }
}

/*----- constants -----*/
const enemyList = ['jerry','gazorpazorp','showMeWhatYouGotHead']
const bullet = document.getElementById('bullet')
const player = new Player()
const jerry = new JerryEnemy()
const gazorpazorp = new GazorpazorpEnemy()
const smwygHead = new SMWYGHead()
/*----- state variables -----*/


/*----- cached elements  -----*/

/*----- event listeners -----*/


document.body.addEventListener('keydown', function(e){
    console.log(e)
if(e.key === ' '){player.jump()} 
}) 

player.getEl().addEventListener('click',function(){player.jump()})

document.body.addEventListener('keydown', function(e){
    console.log(e)
    if(e.key === 'f'){player.shoot()} 
   

}) 

/*----- functions -----*/
init()
function init(){
    //let mainCharacter = prompt('Which character would you like to play as?')
    smwygHead.getEl().style.visibility = 'hidden'
    jerry.getEl().style.visibility = 'hidden'
    gazorpazorp.getEl().style.visibility = 'hidden'
    bullet.style.visibility = 'hidden'
    jerry.moveX()

    gazorpazorp.moveX()
    smwygHead.moveX()
   
    //startting screen to pick main character
    //maybe a countdown
    //play music and sounds when event happen
    //create enemies randomly and which side they come in 
    //check if bullet collides with enemys if so destory enemy
    //check if enemy collides with mainCharacter if so lives -1
    //if lives  === 0 endgame
    
}

let numOfEnemies = 0
while(numOfEnemies !== 20){
    let randoInt = Math.floor(Math.random(0)*3)
    console.log('randoInt',randoInt)
     for(let enemy of enemyList){
        console.log('enemy',enemy)
    
     }
    numOfEnemies++
}

