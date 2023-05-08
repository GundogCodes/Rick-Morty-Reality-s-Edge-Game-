console.log('works!!!')
/*---------------------------------------------------------- CLASSES ----------------------------------------------------------*/ 
class Player{

    constructor(){
        
        this.element = document.createElement('img')
        this.element.setAttribute('class','player')
        this.element.style.position = 'absolute'
        this.element.style.transform = 'rotateY(180deg)'
        
        this.lives = 5 
        
    }
    setName(name){
        this.name = name
        if (this.name  === 'RICK'){this.element.src = "https://png2.cleanpng.com/sh/2558c44d627579baf4043caa78d6efea/L0KzQYm3VMA3N5p8iZH0aYP2gLBuTgBweqVmhJ87LYLsc7y0kBFva5lqkp9vdX7uf373jCJ1aZ14Rdt3LXbsc8XwjB4ueppog59qbnSwfbF5lQkuPZJoT6YAMkWzdbfqg8cvPmg1TKU8OEm0RYO6UMA5QGE6SKg6ND7zfri=/kisspng-portal-2-rick-sanchez-funko-portals-in-fiction-rick-and-morty-5ac745250efcc7.6704338915230088050614.png"
        this.element.style.height = '160px'
        this.element.style.width = '135px'
            this.element.style.top = '470px'
            this.element.style.left = '700px'
            rickCatchphrase.play()
            document.querySelector('main').appendChild(this.element)
        }
        
        else if(this.name === 'MORTY') {this.element.src = "https://png2.cleanpng.com/sh/bff19f53056bc21c93f0ba64fa91e93e/L0KzQYm3VsE3N5tqjpH0aYP2gLBuTf1weqVAReV2aYTrPbTvggJia6Vqip9sYYL3f7F1TfZidl5miuY2cnBlf8W0kvlkc15mhtY2bXB1iX68gsI1bmQ9e6NqOUK7SHA7WMg3PGE1S6MAMkm0RIm6UMAyOGkARuJ3Zx==/kisspng-morty-smith-character-cartoon-fan-art-robot-rick-and-mory-5b24f38c1a9288.4886400315291483001089.png"
        this.element.style.height = '160px'
        this.element.style.width = '135px'
        this.element.style.top = '475px'
        this.element.style.left = '700px'
        mortyOhGeez.play()
        document.querySelector('main').appendChild(this.element)
    } 
    }
    jump() {
        if(this.name === "RICK"){

            let y =  parseInt(this.element.style.top)
            
            let timer = setInterval(() => {
                //console.log(y)
                if(y <20){
                    let t2 = setInterval(()=>{
                        y=y+15
                        if(y>500){
                            clearInterval(timer)
                            clearInterval(t2)
                        }
                    },15)
                }
                y = y-20
                this.element.style.top = y + 'px'
            }, 10); 
            
        } else if(this.name === 'MORTY'){
            let y =  parseInt(this.element.style.top)
            
            let timer = setInterval(() => {
                //console.log(y)
                if(y <20 ){
                    let t2 = setInterval(()=>{
                        y= y+15
                        if(y>500){
                            clearInterval(timer)
                            clearInterval(t2)
                        }
                    },10)
                }
                y = y-20
                this.element.style.top = y + 'px'
            }, 10);
        }
    }
      shoot(){
        portalGun.play()
                bullet.moveRight()

 }
    
    moveLeft(){
        if(this.name === 'RICK'){

            let x = parseInt(this.element.style.left)
            let timer = setInterval(() =>{
                //console.log('PLAYER x',x)
                if(x<0){
                    x = 0
                    clearInterval(timer)
                }
                x = x-20
                this.element.style.left = x +'px'
            },10)
            return timer
        } else if (this.name === 'MORTY'){
            let x = parseInt(this.element.style.left)
            let timer = setInterval(() =>{
                //console.log('PLAYER x',x)
                if(x<0){
                    x = 0
                    clearInterval(timer)
                }
                x = x-20
                this.element.style.left = x +'px'
            },10)
            return timer
        }
        
    }

    moveRight(){
        if(this.name === 'RICK'){

            let x = parseInt(this.element.style.left)
            
            let timer = setInterval(() =>{
                if(x>1450){
                    x = 1450
                    clearInterval(timer)
                }
                x = x+20
                this.element.style.left = x +'px'
            },10)
            return timer
        } else if(this.name === 'MORTY'){
            let x = parseInt(this.element.style.left)
            
            let timer = setInterval(() =>{
                if(x>1460){
                    x = 1460
                    clearInterval(timer)
                }
                x = x+20
                this.element.style.left = x +'px'
            },10)
            return timer
        }
    }
    
    setPosition(timer){
        clearInterval(timer)
    }
    
    getPosition(){
        let xL = parseInt(this.element.style.left)
        let yT = parseInt(this.element.style.top)
        if(this.name === 'RICK'){
            let yB = parseInt(this.element.style.top) + 200
            let xR = parseInt(this.element.style.left) + 130
            
            return [xL,xR,yT,yB]
        } else if(this.name === 'MORTY'){
            let yB = parseInt(this.element.style.top) + 160
            let xR = parseInt(this.element.style.left) + 135
            return [xL,xR,yT,yB]

        }
       // console.log('left of Player: ',xL,'right of Player',xR,'top of player',yT,'bottom of player',yB)
    }


    getEl(){
        return this.element
    }
        
    getlives(){
        return this.lives
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
                if(x<-200){
                    x = -200
                    this.element.style.visibility = 'hidden'
                    clearInterval(timer)
                }
                x = x-10
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
        },20)
        return timer

    }

    getPosition(){
        let xL = parseInt(this.element.style.left)
        let yT = parseInt(this.element.style.top)
        if(this.name ==='smwygHead'){
            let xR = parseInt(this.element.style.left) + 99
            let yB = parseInt(this.element.style.top) + 138
            return [xL,xR,yT,yB]
            
        } else if (this.name ='jerry'){
            let xR = parseInt(this.element.style.left) + 102
            let yB = parseInt(this.element.style.top) + 102
            return [xL,xR,yT,yB]

        } else if (this.name ='gazorpazorp'){
            let xR = parseInt(this.element.style.left) + 102
            let yB = parseInt(this.element.style.top) + 102
            return [xL,xR,yT,yB]
        }
        else if (this.name ='gromflomite'){
            let xR = parseInt(this.element.style.left) + 60
            let yB = parseInt(this.element.style.top) + 109
            
            return [xL,xR,yT,yB]
        }
        //console.log('left of Enemy: ',xL,'right of Enemy',xR,'top of Enemy',yT,'bottom of Enemy',yB)
    }

    getName(){
        return this.name
    } 
}


class Bullet{
    constructor(){  
        this.element = document.createElement('img')
        this.element.src = "https://png2.cleanpng.com/sh/6a09d6e41c4cf8e80e2bf8b9cf1810da/L0KzQYm3VsEzN6tBhJH0aYP2gLBuTgJqa5wyi9N3Y3join70jCJ1gV54hdt9aD3pcbA0ggJ1NaVqhNdBaYPsf7A0kBhwf146eqNvN0C8c7LrUPRjOF87SqI9MUa8RYK8Usg4QGg2SKICMEi7PsH1h5==/kisspng-rick-sanchez-morty-smith-fan-art-television-show-5b1f709cad0db0.6204169515287871007088.png"
        this.element.style.width = '50px'
        this.element.style.height = '50px'
        this.element.style.visibility = 'hidden'
        this.element.style.position = 'absolute'
       
        document.querySelector('main').appendChild(this.element)
    }
    moveRight(){
        this.element.style.visibility = 'visible'
        let playerPos = player.getPosition()
        //console.log('playerPos',playerPos)
        let xL = playerPos[0] +105
        let xR = playerPos[1] +240
        let yT = playerPos[2] +50
        let yB = playerPos[3]
        // console.log(xL,xR,yT,yB)
         
         
         this.element.style.left = xL+'px'
         this.element.style.top = yT+'px'
         this.element.style.right = xR +'px'
         this.element.style.bottom = yB +'px'
         
        xL = parseInt(this.element.style.left)
        xR = parseInt(this.element.style.right)
         // console.log(x)
         let timer = setInterval(() =>{
             // console.log('ENEMY x',x)
             if(xL>1550){
                this.element.style.visibility = 'hidden'
                 xL = 1550
                 clearInterval(timer)
                }
                xL = xL+15
                xR = xR+15
                this.element.style.left = xL +'px'
                this.element.style.right = xR +'px'
            },15)
            
        }
        
        
        
        
        getPosition(){
           // let playerPos = player.getPosition()
           // console.log(playerPos)
            let xL = parseInt(this.element.style.left)
            let xR = parseInt(this.element.style.right)
            let yT = parseInt(this.element.style.top)
            let yB = parseInt(this.element.style.bottom)
            
            //console.log('BulletPos',xL,xR,yT,yB)
        
            return [xL,xR,yT,yB]
    }
    
    getEl(){
        return this.element
    }
    

}


/*--------------------------------------------------------------- constants ---------------------------------------------------------------*/

//PLAYER
const player = new Player()
const bullet = new Bullet()

const introSong = new Audio("./music/intro.mp3")
const getShwifty = new Audio("./music/getShwifty.mp3")
const goodbyeMoonmen = new Audio("./music/goodByeMoonmen.mp3")
const outroSadSong = new Audio("./music/introSadSong.mp3")
const mortyFreakingOut= new Audio("./music/mortyFreakingOut.mp3")

const mortyHeckYa = new Audio("./music/mortyHeckYa.mp3")
const mortyOhGeez = new Audio("./music/mortyOhGeez.mp3")
const rickCatchphrase = new Audio("./music/rickCatchphrase.mp3")
const rickTotesMalotesDawg = new Audio("./music/rickTotesMalotesDawg.mp3")

const rickYouBunchOfIdiots = new Audio("./music/rickYouBunchOfidiots.mp3")
const rickWhatAreYouNuts = new Audio("./music/rickWhatAreYouNuts.mp3")
const portalGun = new Audio("./music/portalSoundEffect.mp3")

/*--------------------------------------------------------------- state variables---------------------------------------------------------------*/

let playerPoints;
let playerName;

/*---------------------------------------------------------------cached elements  ---------------------------------------------------------------*/

const characterChangeBtn = document.getElementById('characterChange')
const changeWeaponBtn = document.getElementById('changeWeapon')
const musicToggleBtn = document.getElementById('musicToggle')
const pointsCounter = document.getElementById('pointsCounter')
const livesEl1 = document.getElementById('heart1')
const livesEl2 = document.getElementById('heart2')
const livesEl3 = document.getElementById('heart3')
const livesEl4 = document.getElementById('heart4')
const livesEl5 = document.getElementById('heart5')
const heartsList = [livesEl1,livesEl2,livesEl3,livesEl4,livesEl5]

/*--------------------------------------------------------------- event listeners ---------------------------------------------------------------*/

//MOVE PLAYER

window.addEventListener('keydown',function(e){
   // console.log(e)
    if(e.key === 'ArrowLeft'){
        let timer = player.moveLeft()
        window.addEventListener('keyup',function(e){
            //console.log(e)
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
        player.shoot()

       
    } 
    
})


/*--------------------------------------------------------------- functions ---------------------------------------------------------------*/

init()


function init(){

    playerPoints = 0

    playerName = startScreen()

   // player.setName('MORTY')
   
   
    runGame()
           
    
    }

 
function  runGame(){
    
        let enemyList  = createEnemies()
     moveRandomEnemy(enemyList)

    
}


function startScreen(){
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
    <h4>Use Arrow Keys to Move and 'F' Key to Shoot, Goodluck!</h4>
    <img id='startingImg'style = "scale:0.8;"src ="https://png2.cleanpng.com/sh/697e54f06cdac5f9584e1d6b5a0a9bf1/L0KzQYq3VME3N6h1e5H0aYP2gLBuTgNqbJZnhNHwLXPkgsX2jB4ucZ1xjeV9cnH3ebF1Tfh2dZJzRdRuaHH5ebF5TfNpaaNmReRyY3uwcbBrTf1weqVARdh4cj3kPbn8jvRzbZUykddqcoOwebW0kvVidJ1ARd42NXPlRbXshvUzOmJreag3MEG2R4eAUMkyPWY6TKQ7OUe3QYSCWL5xdpg=/kisspng-sideblog-cartoon-illustration-human-behavior-chara-rick-and-morty-for-a-hundred-years-id-really-l-5cb5defe221fa6.0137670915554229741398.png">
    <div id ='buttonBox'>
    <button id ='Rick' >RICK</button>
    <button id = 'Morty' >MORTY</button>
    </div>
    <p id = 'Gunish'>Gunish<p>`

    x.style.color = 'white'
    x.style.backgroundColor = 'blue'
    document.querySelector('body').appendChild(x)
    document.getElementById('buttonBox').addEventListener('click',function(e){
    playerName = e.target.innerText
    console.log('User chooses: ',playerName)
    player.setName(playerName)
    document.querySelector('body').removeChild(x)
    
    


})
    
      
}

//element,name,top,left


function createEnemies(){
    const enemyNames = ['jerry','gromflomite','gazorpazorp','smwygHead']
    const enemyList =[]
    for (let i =0; i<20; i++){

        let randoEnemy = enemyNames[getRandomInt(4)]
        let randomTopPos =getRandomInt(500)
        let leftPos = 1600

        let newEnemyDiv = document.createElement('img')
        newEnemyDiv.style.height = '100px'
        newEnemyDiv.style.width = '100px'
        newEnemyDiv.style.position = 'absolute'
        newEnemyDiv.left = '1000px'
        if(randoEnemy === ('smwygHead')){
           newEnemyDiv.src = "https://png2.cleanpng.com/sh/af0cc0734be612f642d690288074f98a/L0KzQYm3VcExN5dwj5H0aYP2gLBuTgJqa5wyi9N3Y3join77TgNpcaN5Rd94coT8PcT0igRpNaF0e91udD3wf8P7mgMudZZqRadqZkTpSYa4UvJmP5Y6RqI5NEG0QYi9UcUzPmE1TKI9OUG6SYm1kP5o/kisspng-rick-sanchez-t-shirt-morty-smith-pocket-mortys-mee-5af4f9512be7e5.0041117615260040491798.png"
           newEnemyDiv.style.transform = 'rotateY(180deg)'
        } else if (randoEnemy === 'gazorpazorp'){
            newEnemyDiv.src = "https://png2.cleanpng.com/sh/b0aa5ceeaec8c5c9667ff07228bce0a4/L0KzQYm3VMA1N6N8iZH0aYP2gLBuTfNpaaNmeAZucj32cbB7gb1kdJJ6i59vYX6wccP7TgJqa5wyedDtLX3ygsXCTcVia2U7TadrOUfocYWBTsYxQGE1SKQBMUW1Qom5UMQ1O2c3SqU3cH7q/kisspng-character-santa-claus-fan-art-rick-and-morty-5ac4655b97ea48.6080002615228204436223.png"
        } else if (randoEnemy === 'gromflomite'){
           
            newEnemyDiv.src = "https://static.wikia.nocookie.net/rickandmorty/images/4/47/Micheal.png"
        } else if (randoEnemy === 'jerry'){
            newEnemyDiv.src = "https://png2.cleanpng.com/sh/37411d6f92da59eaee915db2132e2933/L0KzQYm3V8IxN6d4f5H0aYP2gLBuTf1weqVAReV2aYTrPbTvggJia6Vqip9sYYL3f7F1TfZidl5miuY2dnnyfLr1TgJqa5wyedDtLX3ygsXCTcVjPWI8UaY9ZUO3SYW3TsI0PGM3T6g5MUW2QoG9VsEyPmo4SZD5bne=/kisspng-morty-smith-character-cartoon-fan-art-violin-rick-and-morty-5b517944e34940.234227601532066116931.png"
        } 
        document.querySelector('main').appendChild(newEnemyDiv)
        newEnemyDiv.style.visibility = 'hidden'
        let newEnemy = new Enemy(newEnemyDiv,randoEnemy,`${randomTopPos}px`,`${leftPos}px`)
        enemyList.push(newEnemy)

    }
    return enemyList

}

 
function moveRandomEnemy(enemyArr){

    
    setInterval(function(){



        let moveRandoEnemy = getRandomInt(20)
       let  movingEnemy = enemyArr[moveRandoEnemy]
        movingEnemy.moveLeft()

        checkEnemyCollsion(player,movingEnemy)
        
        checkBulletCollsion(bullet,movingEnemy,enemyArr)
      
            
  
        console.log(movingEnemy)
        return movingEnemy
        
    },1000)
}




function checkBulletCollsion(bulletEl,enemyEl){
   
    setInterval(function(){
        const left =0
        const right = 1
        const top = 2
        const bottom =3
        
        let bulletPos =  bulletEl.getPosition()
        let enemyPos =  enemyEl.getPosition()

        if(((enemyPos[left]< bulletPos[right]) && (enemyPos[right]> bulletPos[left]))&&((enemyPos[bottom])>bulletPos[top]) && (bulletPos[top]<enemyPos[bottom]&&(bulletPos[bottom]> enemyPos[top]))){

            console.log('BULLLLLLEEEEEETTTTTT HIIIIIIIIIITTTTTT')
           // loseLife(heartsList)
           updatePoints(100)
    
        } else{console.log()}
    },200)
   
}
    


function checkEnemyCollsion(playerEl,enemyEl){
    setInterval(function(){
        let playerPos =  playerEl.getPosition()

        let enemyPos =  enemyEl.getPosition()
       //  console.log('playerPos [xL,xR,yT,yB]',playerPos,'EnemyPs [xL,xR,yT,yB]',enemyPos)
        if(((enemyPos[0]< playerPos[1]) && (enemyPos[1]> playerPos[0]))&&(enemyPos[3])>playerPos[2] && playerPos[2]<enemyPos[3]){
            //if the left of the enemy 
            console.log('Player Hit')
            loseLife(heartsList)

        } else{console.log()}
    },200)
}


function getRandomInt(range){
    const randoInt = Math.floor(Math.random(0)*range)
    return randoInt
}

function updatePoints(incrementVal){
    let  points = parseInt(pointsCounter.innerHTML)
     points = points + 100
     playerPoints = playerPoints +100
     pointsCounter.innerHTML = points
}

function loseLife(lifeArray){
    let lastEl = lifeArray.length -1
  //  lifeArray[lastEl].style.visibility = 'hidden'
  lifeArray[lastEl].style.visibility = 'hidden'
    lifeArray.pop()
    player.lives = player.lives - 1
    console.log(lifeArray[lastEl])
    checkDead()
}

function checkDead(){
    
    if(player.lives === 0){
        console.log(player.lives,'GAMEOVER')
        runEndScreen()
        
    }
    }
 

function runEndScreen(){
    let endingScreen = document.createElement('div')
        endingScreen.setAttribute('id','endingScreen')
        endingScreen.style.position = 'absolute'
        endingScreen.style.width = '1800px'
        endingScreen.style.height = '1000px'
        endingScreen.style.backgroundColor = 'blue'
        endingScreen.style.color = 'white'
        endingScreen.style.left = '0px'
        endingScreen.style.borderRadius = '15px'
        endingScreen.style.display = 'flex'
        endingScreen.style.flexDirection = 'column'
        endingScreen.style.justifyContent = 'center'
        endingScreen.style.alignItems= 'center'
        endingScreen.innerHTML = `<h1 id ="endingHeader">GAMEOVER</h1>
        <h1 id = "endingPoints">Your Score: ${parseInt(playerPoints)}</h1>
        <img id="endingImg" src="https://png2.cleanpng.com/sh/c4187d48c513cec1a9c625cbb17228ae/L0KzQYm3VsI2N5t5iZH0aYP2gLBuTgJqa5wyi9N3Y3join70jCJ1gV54hdt9aD3meLL5gfN1baMykdHALXvxf8i0lBhifF54RadrM0G2dIm3VcE4bZI1RqM7M0K5Q4mAUcUzQWo6S6gBNEO2Q4m1kP5o/kisspng-rick-sanchez-morty-smith-character-you-know-what-s-5b313d80517ea0.1232638715299536643338.png"> 
        <button id= "playAgain">Play Again?</button>`
        document.querySelector('body').appendChild(endingScreen)

        document.getElementById('playAgain').addEventListener('click',function(){
            document.querySelector('body').removeChild(endingScreen)
            document.getElementById('pointsCounter').innerText ="0"
            init()

        })
}