console.log('works!!!')
/*---------------------------------------------------------- CLASSES ----------------------------------------------------------*/ 
class Player{

    constructor(name,top,left){
        this.element = document.getElementById('player')
        this.name = name
        this.element.style.top = top
        this.element.style.left = left       
        this.health =100
        this.lives = 3
        
    }
    
    jump() {

     
    }
    shoot(){
        bullet.style.visibility = 'visible'
        bullet.style.left = '-520px'
        bullet.style.bottom = '-250px'
        bullet.classList.add('shoot')
    }
    
    moveLeft(){
    console.log(this.element)
    let x = parseInt(this.element.style.left)
    x = x+300

    this.element.style.left = x +'px'
    
    console.log(this.element.style.left)

    }
    moveRight(){

     
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
                                    //top, left
let player = new Player('Morty','0px','0px')

player.moveLeft()

//ENEMYS                                                                             //top, left
const gromflomite1 =  new Enemy(document.getElementById('gromflomite1'),'gromflomite','0px','0px')
const smwygHead1 = new Enemy(document.getElementById('smwyg1','showMeWhatYouGotHead','0px','0px'))
const jerry1 = new Enemy(document.getElementById('jerry1'),'jerry','0px','0px')
const gazorpazorp1 = new Enemy(document.getElementById('gazorpazorp1'),'gazorpazorp','0px','0px')

const gromflomite2 =  new Enemy(document.getElementById('gromflomite2'),'gromflomite','0px','0px')
const smwygHead2 = new Enemy(document.getElementById('smwyg2','showMeWhatYouGotHead','0px','0px'))
const jerry2 = new Enemy(document.getElementById('jerry2'),'jerry','0px','0px')
const gazorpazorp2 = new Enemy(document.getElementById('gazorpazorp2'),'gazorpazorp','0px','0px')




/*--------------------------------------------------------------- state variables---------------------------------------------------------------*/

let playerPoints = 0


/*---------------------------------------------------------------cached elements  ---------------------------------------------------------------*/

const characterChangeBtn = document.getElementById('characterChange')
const changeWeaponBtn = document.getElementById('changeWeapon')
const musicToggleBtn = document.getElementById('musicToggle')

/*--------------------------------------------------------------- event listeners ---------------------------------------------------------------*/
// let x = 0
// let y = 0 
// let speed =-100
// const windowHeight = window.innerHeight
// let windowWidth = window.innerWidth
// console.log(windowHeight,windowWidth)

// window.addEventListener('keydown', (e) =>{
//     console.log(e)
//     if(e.key === 'ArrowUp'){
//         if((x+100)< windowWidth){
//             x+= speed;
//             player.getEl().left = x + 'px'

//         }
//     }

// })

/*--------------------------------------------------------------- functions ---------------------------------------------------------------*/



init()
function init(){
  
    //let mainCharacter = prompt('Which character would you like to play as?')
    
    // smwygHead1.getEl().style.visibility = 'hidden'
    // jerry1.getEl().style.visibility = 'hidden'
    // gazorpazorp1.getEl().style.visibility = 'hidden'
      
    // smwygHead2.getEl().style.visibility = 'hidden'
    // jerry2.getEl().style.visibility = 'hidden'
    // gazorpazorp2.getEl().style.visibility = 'hidden'
     bullet.style.visibility = 'hidden'
    
     player.moveRight()

    //startting screen to pick main character
    //maybe a countdown
    //play music and sounds when event happen

    runGame()
}

function  runGame(){

    //create enemies randomly and which side they come in 
    randomizeEnemys()


    //check if bullet collides with enemys if so destory enemy
    //check if enemy collides with mainCharacter if so lives -1
    //if lives  === 0 endgame

}


function randomizeEnemys(enemyArr){
    const randoInt =  getRandomInt(2)

}



function getRandomInt(range){
   const randoInt = Math.floor(Math.random(0)*range)
return randoInt
}

