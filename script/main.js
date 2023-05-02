console.log('works!!!')
/*---------------------------------------------------------- CLASSES ----------------------------------------------------------*/ 
class Player{

    constructor(name,top,left){
        this.name = name
        this.health =100
        this.lives = 3
        this.element = document.getElementById('player')
        this.element.style.top = top
        this.element.style.left = left       
        
    }
    
    jump() {
    
        console.log('playerCLICKED!')
        this.element.classList.add('jump')
        
    }
    shoot(){
        bullet.style.visibility = 'visible'
        bullet.style.left = '-470px'
        bullet.style.bottom = '-270px'
        bullet.classList.add('shoot')
    }
    
    moveLeft(){
    
        this.element.style.left = this.element.style.left-240
    }
    moveRight(){
    
        this.element.style.left = this.element.style.left - parseInt('5px')
    }

    
    getEl(){
        return this.element
    }
    getRightPos(){

        return this.element.style.right
    }
    
    getlives(){
        return this.lives
    }

    getHealth(){
        return this.health
    }


}

class Enemy{
    static numOfEnemies = 0;
    constructor(element,name,top,left){  
        this.element = element
        this.name = name
        this.element.style.top = top
        this.element.style.left = left
        Enemy.numOfEnemies++

    }

    moveLeft() {
        this.element.style.visibility = 'visible'
        this.element.classList.add('moveLeft')
    

    }

    moveRight() {
        this.element.style.visibility = 'visible'
        this.element.classList.add('moveRight')
    

    }

    getEl(){
        return this.element   
    } 
    getName(){
        return this.name
    } 
}



/*--------------------------------------------------------------- constants ---------------------------------------------------------------*/

const enemyList = ['jerry','gazorpazorp','showMeWhatYouGotHead']

//PLAYERS

const bullet = document.getElementById('bullet')
const player = new Player('Morty','260px','0px')

//ENEMYS                                                                             //top, left
const smwygHead2 = new Enemy(document.getElementById('smwyg2','showMeWhatYouGotHead','0px','0px'))
const jerry2 = new Enemy(document.getElementById('jerry2'),'jerry','0px','0px')
const gazorpazorp2 = new Enemy(document.getElementById('gazorpazorp2'),'gazorpazorp','0px','0px')

const smwygHead1 = new Enemy(document.getElementById('smwyg1','showMeWhatYouGotHead','0px','0px'))
const jerry1 = new Enemy(document.getElementById('jerry1'),'jerry','0px','0px')
const gazorpazorp1 = new Enemy(document.getElementById('gazorpazorp1'),'gazorpazorp','0px','0px')


/*--------------------------------------------------------------- state variables---------------------------------------------------------------*/

let playerPoints = 0
console.log('POSITION',typeof(player.getRightPos()))
/*----- cached elements  -----*/

const characterChangeBtn = document.getElementById('characterChange')
const changeWeaponBtn = document.getElementById('changeWeapon')
const musicToggleBtn = document.getElementById('musicToggle')

/*--------------------------------------------------------------- event listeners ---------------------------------------------------------------*/


document.body.addEventListener('keydown', function(e){ 
    console.log(e) 
    if(e.key === ' ' || e.key ==='ArrowUp'){player.jump()} }) 

document.body.addEventListener('keyup', function(e){ 
    console.log(e) 
    if(e.key === ' ' || e.key ==='ArrowUp'){
    setTimeout( function(){player.getEl().classList.remove('jump')},1010)
       
    
    } }) 

window.addEventListener('keydown', function(e){ 
    console.log(e) 
    if(e.key === ' ' || e.key ==='ArrowLeft'){player.moveLeft()} }) 
    
window.addEventListener('keydown', function(e){ 
    console.log(e) 
    if(e.key === ' ' || e.key ==='ArrowRight'){player.moveRight()} }) 
    
document.body.addEventListener('keydown', function(e){
    console.log(e)
    if(e.key === 'f'){player.shoot()} }) 
    document.body.addEventListener('keyup', function(e){
        console.log(e)
        setTimeout(function(){

        if(e.key === 'f'){bullet.classList.remove('shoot')} }) 

        },400)
        
/*--------------------------------------------------------------- functions ---------------------------------------------------------------*/

        let checkPlayerTop = setInterval(function(){
            let playerTop = parseInt(window.getComputedStyle(player.getEl()).getPropertyValue('right'))
      
            console.log('player top (WHY DOES THIS NOT CHANGE??) ',playerTop)
        },1000)




        init()
function init(){
  
    //let mainCharacter = prompt('Which character would you like to play as?')
    smwygHead1.getEl().style.visibility = 'hidden'
    jerry1.getEl().style.visibility = 'hidden'
    gazorpazorp1.getEl().style.visibility = 'hidden'
    
    smwygHead2.getEl().style.visibility = 'hidden'
    jerry2.getEl().style.visibility = 'hidden'
    gazorpazorp2.getEl().style.visibility = 'hidden'
    bullet.style.visibility = 'hidden'
    
  
   
    //startting screen to pick main character
    //maybe a countdown
    //play music and sounds when event happen
    //create enemies randomly and which side they come in 
    //check if bullet collides with enemys if so destory enemy
    //check if enemy collides with mainCharacter if so lives -1
    //if lives  === 0 endgame
    runGame()
}

function  runGame(){
    randomizeEnemys()
    
    jerry1.moveRight()
    gazorpazorp1.moveRight()
    smwygHead1.moveRight()

    jerry2.moveLeft()
    gazorpazorp2.moveLeft()
    smwygHead2.moveLeft()
}


function randomizeEnemys(enemyArr){
    const randoInt =  getRandomInt(2)

}

let numOfEnemies = 0
while(numOfEnemies !== 20){
    let randoInt = Math.floor(Math.random(0)*3)
   // console.log('randoInt',randoInt)
     for(let enemy of enemyList){
       // console.log('enemy',enemy)
    
     }
    numOfEnemies++
}

function getRandomInt(range){
   const randoInt = Math.floor(Math.random(0)*range)
return randoInt
}