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
       // this.element.classList.add('jump')
        let y =  parseInt(this.element.style.top)

        let timer = setInterval(() => {
            console.log(y)
            if(y <-405){
                let t2 = setInterval(()=>{
                    y=y+20
                    if(y>-5){
                        clearInterval(timer)
                        clearInterval(t2)
                    }
                },10)
            }
            y = y-20
        this.element.style.top = y + 'px'
        }, 10);
   
    }
    shoot(){
        const bullet = document.getElementById('bullet')
        let x = parseInt(this.element.style.left)
        let y =  parseInt(this.element.style.top)
        x =x+180
        y = y + 250
        bullet.style.visibility = 'visible'
        bullet.style.left = x+ 'px'
        bullet.style.top = y+ 'px'
        
        let timer = setInterval(() => {
            x =x+20
            bullet.style.left = x+'px'
        }, 20);
        
    
    }
    
    moveLeft(){

        let x = parseInt(this.element.style.left)

        let timer = setInterval(() =>{
            if(x<-257){
                x = -257
               clearInterval(timer)
            }
            x = x-20
            this.element.style.left = x +'px'
        },10)
        return timer
    }

    moveRight(){

        let x = parseInt(this.element.style.left)

        let timer = setInterval(() =>{
            if(x>1187){
                x = 1187
               clearInterval(timer)
            }
            x = x+20
            this.element.style.left = x +'px'
        },10)
        return timer
    }
    
    setPosition(timer){
        clearInterval(timer)
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
const mainWidth = document.querySelector('main').style.right
console.log(mainWidth)
//PLAYERS

                                   //top, left
let player = new Player('Rick','-40px','450px')



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
    //MOVE PLAYER

window.addEventListener('keydown',function(e){
    console.log(e)
    if(e.key === 'ArrowLeft'){
        let timer = player.moveLeft()
        window.addEventListener('keyup',function(e){
            console.log(e)
            if(e.key === 'ArrowRight'|| e.key === 'ArrowLeft'){
                player.setPosition(timer)
                }    
        })    
    }    

})
window.addEventListener('keydown',function(e){
    console.log(e)
    if(e.key === 'ArrowRight'){
        let timer = player.moveRight()
        window.addEventListener('keyup',function(e){
            console.log(e)
            if(e.key === 'ArrowRight'|| e.key === 'ArrowLeft'){
                player.setPosition(timer)
                }    
        })  

        }    
})



window.addEventListener('keydown',function(e){
    console.log(e)
    if(e.key === ' ' || e.key === 'ArrowUp'){
        player.jump()
        }    
})







window.addEventListener('keydown',function(e){
    console.log(e)
    if(e.key === 'f'){
        player.shoot()
        }    
})
/*--------------------------------------------------------------- functions ---------------------------------------------------------------*/



init()
function init(){
  
    //let mainCharacter = prompt('Which character would you like to play as?')
    
    gromflomite1.getEl().style.visibility = 'hidden'
     smwygHead1.getEl().style.visibility = 'hidden'
     jerry1.getEl().style.visibility = 'hidden'
     gazorpazorp1.getEl().style.visibility = 'hidden'
      
    // smwygHead2.getEl().style.visibility = 'hidden'
    // jerry2.getEl().style.visibility = 'hidden'
    // gazorpazorp2.getEl().style.visibility = 'hidden'
     bullet.style.visibility = 'hidden'
    


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

