console.log('works!!!')
/*---------------------------------------------------------- CLASSES ----------------------------------------------------------*/ 
class Player{

    constructor(name,top,left){
        this.element = document.getElementById('player')
        this.name = name
        if (this.name  === 'RICK'){this.element.innerHTML = `<img style ='scale:0.2'src = "https://png2.cleanpng.com/sh/d0bbf86ed47622a56b45e1d5c32af94f/L0KzQYm3VMA3N5p8iZH0aYP2gLBuTgBweqVmhJ87LYLsc7y0kBFva5lqkp9vdX7uf373jCJ1aZ14Rdt3LXbsc8XwjB4ueppog59qbnSwfbF5lQkuPZJoT6YAMkWzdbfqg8cvPmg1TKU8OEm0RYO6UMA5QGE6SKg6ND7zfri=/kisspng-portal-2-rick-sanchez-funko-portals-in-fiction-rick-and-morty-5ac745250efcc7.6704338915230088050614.png">`
            this.element.style.top = '-40px'
            this.element.style.left = '450px'} 
        else if(this.name === 'MORTY') {this.element.innerHTML = `<img style ='scale:0.3'src = "https://png2.cleanpng.com/sh/bff19f53056bc21c93f0ba64fa91e93e/L0KzQYm3VsE3N5tqjpH0aYP2gLBuTf1weqVAReV2aYTrPbTvggJia6Vqip9sYYL3f7F1TfZidl5miuY2cnBlf8W0kvlkc15mhtY2bXB1iX68gsI1bmQ9e6NqOUK7SHA7WMg3PGE1S6MAMkm0RIm6UMAyOGkARuJ3Zx==/kisspng-morty-smith-character-cartoon-fan-art-robot-rick-and-mory-5b24f38c1a9288.4886400315291483001089.png">`
        this.element.style.top = '275px'
        this.element.style.left = '550px'} 
    
    
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
            if(x>1300){
                clearInterval(timer)
            }
            x =x+15
            bullet.style.left = x+'px'
        }, 5);
        return timer
    
    }
    
    moveLeft(){

        let x = parseInt(this.element.style.left)
        let timer = setInterval(() =>{
            console.log('PLAYER x',x)
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
    
    getWidth(){
        console.log('Width of player',this.element.clientWidth)
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

class Enemy{
    static numOfEnemies = 0;
    constructor(element,name,top,left){  
        this.element = element
        this.name = name
        this.element.style.top = top
        this.element.style.left = left
        Enemy.numOfEnemies++

    }
    getEl(){
        return this.element   
    } 

    moveLeft() {
        this.element.style.visibility = 'visible'
        let x = parseInt(this.element.style.left)
       // console.log(x)
        let timer = setInterval(() =>{
           // console.log('ENEMY x',x)
            if(x<-257){
                x = -257
               clearInterval(timer)
            }
            x = x-20
            this.element.style.left = x +'px'
        },10)


    }


    moveRight() {
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

    getName(){
        return this.name
    } 
}



/*--------------------------------------------------------------- constants ---------------------------------------------------------------*/


const mainWidth = document.querySelector('main').style.right
console.log(mainWidth)
//PLAYERS

//top, left




//ENEMYS                                                                             //top, left
// const gromflomite1 =  new Enemy(document.getElementById('gromflomite1'),'gromflomite','0px','0px')
// const smwygHead1 = new Enemy(document.getElementById('smwyg1','showMeWhatYouGotHead','0px','0px'))
// const jerry1 = new Enemy(document.getElementById('jerry1'),'jerry','0px','0px')
// const gazorpazorp1 = new Enemy(document.getElementById('gazorpazorp1'),'gazorpazorp','0px','0px')

const gromflomite2 =  new Enemy(document.getElementById('gromflomite2'),'gromflomite','150px','1635px')

//const smwygHead2 = new Enemy(document.getElementById('smwyg2','showMeWhatYouGotHead','300px','115px'))
const jerry2 = new Enemy(document.getElementById('jerry2'),'jerry','250px','1500px')
const gazorpazorp2 = new Enemy(document.getElementById('gazorpazorp2'),'gazorpazorp','450px','1500px')




/*--------------------------------------------------------------- state variables---------------------------------------------------------------*/

let playerPoints = 0
let playerName = null

/*---------------------------------------------------------------cached elements  ---------------------------------------------------------------*/

const characterChangeBtn = document.getElementById('characterChange')
const changeWeaponBtn = document.getElementById('changeWeapon')
const musicToggleBtn = document.getElementById('musicToggle')

/*--------------------------------------------------------------- event listeners ---------------------------------------------------------------*/
//MOVE PLAYER

window.addEventListener('keydown',function(e){
   // console.log(e)
    if(e.key === 'ArrowLeft'){
        let timer = player.moveLeft()
        window.addEventListener('keyup',function(e){
            console.log(e)
            if(e.key === 'ArrowLeft'){
                player.setPosition(timer)
            }    
        })    
    }    
    
})
window.addEventListener('keydown',function(e){
   // console.log(e)
    if(e.key === 'ArrowRight'){
        let timer = player.moveRight()
        window.addEventListener('keyup',function(e){
          //  console.log(e)
            if(e.key === 'ArrowRight'){
                player.setPosition(timer)
            }    
        })  
        
    }    
})



window.addEventListener('keydown',function(e){
   // console.log(e)
    if(e.key === ' ' || e.key === 'ArrowUp'){
        let timer = player.jump()
    }
    
    
})


window.addEventListener('keydown',function(e){
   // console.log(e)
    if(e.key === 'f'){
        let timer = player.shoot()
    } 
    
})



/*--------------------------------------------------------------- functions ---------------------------------------------------------------*/



let getName = init()
function init(){
    jerry2.getEl().style.visibility = 'hidden'
    gazorpazorp2.getEl().style.visibility = 'hidden'
    bullet.style.visibility = 'hidden'
    gromflomite2.getEl().style.visibility = 'hidden'


        const x = document.createElement('div')
        x.setAttribute('class','startingPage')
        x.style.width = '1800px'
        x.style.height = '1000px'
        x.style.display = 'flex'
        x.style.flexDirection = 'column'
        x.style.justifyContent = 'center'
        x.style.alignItems = 'center'
        x.style.position = 'absolute'
        x.style.left = '0'
        x.style.borderRadius = '15px'
        x.innerHTML = `<h1 id ='startingHeader'>RICK AND MORTY: REALITY'S EDGE</h1>
        <h2 id = 'choosePlayer'>Choose Your Player</h2>
        <img style = "scale:0.6;"src ="https://png2.cleanpng.com/sh/595196fd7059950d60ff2e70bd56235d/L0KzQYq3VME3N6h1e5H0aYP2gLBuTgNqbJZnhNHwLXPkgsX2jB4ucZ1xjeV9cnH3ebF1Tfh2dZJzRdRuaHH5ebF5TfNpaaNmReRyY3uwcbBrTf1weqVARdh4cj3kPbn8jvRzbZUykddqcoOwebW0kvVidJ1ARd42NXPlRbXshvUzOmJreag3MEG2R4eAUMkyPWY6TKQ7OUe3QYSCWL5xdpg=/kisspng-sideblog-cartoon-illustration-human-behavior-chara-rick-and-morty-for-a-hundred-years-id-really-l-5cb5defe221fa6.0137670915554229741398.png">
        <img src"">
        <div id ='buttonBox'>
        <button id ='Rick' >RICK</button>
        <button id = 'Morty' >MORTY</button>
        </div>
        <p id = 'Gunish'>Gunish<p>
    `
        x.style.color = 'white'
        x.style.backgroundColor = 'blue'
       document.querySelector('body').appendChild(x)
       document.getElementById('buttonBox').addEventListener('click',function(e){
        playerName = e.target.innerText
        document.querySelector('body').removeChild(x)
        
        console.log('got playerName by clicking button',playerName)
        return playerName
    })
    
    }

const player = new Player(playerName)
    //let mainCharacter = prompt('Which character would you like to play as?')
    


    
    //startting screen to pick main character
    //maybe a countdown
    //play music and sounds when event happen
    


function  runGame(){
   
    //create enemies randomly and which side they come in 
    randomizeEnemys()
    checkBulletCollsion()
    checkEnemyCollsion()
}

    
    
    //check if bullet collides with enemys if so destory enemy
    //check if enemy collides with mainCharacter if so lives -1
    //if lives  === 0 endgame
    



function randomizeEnemys(){
    const randoInt =  getRandomInt(3)
    const enemyList = [jerry2,gromflomite2,gazorpazorp2]
    console.log(randoInt)
    setTimeout(function(){

        enemyList[2].moveLeft()
    },1000)
    
}

function checkBulletCollsion(){

}

function checkEnemyCollsion(playerEl,EnemyEl){

}


function getRandomInt(range){
    const randoInt = Math.floor(Math.random(0)*range)
    return randoInt
}

