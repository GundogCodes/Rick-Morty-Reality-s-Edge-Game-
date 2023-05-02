console.log('works!!!')
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
        bullet.style.left = '-555px'
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
    constructor(element,name,top){  
        this.element = element
        this.name = name
        this.element.style.top = top
        Enemy.numOfEnemies++

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





/*----- constants -----*/
const enemyList = ['jerry','gazorpazorp','showMeWhatYouGotHead']

const bullet = document.getElementById('bullet')
const player = new Player('Morty','275px','5px')

const jerry = new Enemy(document.getElementById('jerry'),'jerry','150px')
const gazorpazorp = new Enemy(document.getElementById('gazorpazorp','gazorpazorp','150px'))
const smwygHead = new Enemy(document.getElementById('smwyg','showMeWhatYouGotHead','50px'))


/*----- state variables -----*/

let playerPoints = 0
console.log('POSITION',typeof(player.getRightPos()))
/*----- cached elements  -----*/

const characterChangeBtn = document.getElementById('characterChange')
const changeWeaponBtn = document.getElementById('changeWeapon')
const musicToggleBtn = document.getElementById('musicToggle')

/*----- event listeners -----*/


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
   // console.log('randoInt',randoInt)
     for(let enemy of enemyList){
       // console.log('enemy',enemy)
    
     }
    numOfEnemies++
}

