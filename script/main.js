console.log('works!!!')
/*---------------------------------------------------------- CLASSES ----------------------------------------------------------*/ 
class Player{

    constructor(){
        
        this.element = document.createElement('img')
        this.element.setAttribute('class','player')
        this.element.style.position = 'absolute'
        this.element.style.transform = 'rotateY(180deg)'
        
        this.lives = 3 
        
    }
    setName(name){
        this.name = name
        if (this.name  === 'RICK'){this.element.src = "https://png2.cleanpng.com/sh/d0bbf86ed47622a56b45e1d5c32af94f/L0KzQYm3VMA3N5p8iZH0aYP2gLBuTgBweqVmhJ87LYLsc7y0kBFva5lqkp9vdX7uf373jCJ1aZ14Rdt3LXbsc8XwjB4ueppog59qbnSwfbF5lQkuPZJoT6YAMkWzdbfqg8cvPmg1TKU8OEm0RYO6UMA5QGE6SKg6ND7zfri=/kisspng-portal-2-rick-sanchez-funko-portals-in-fiction-rick-and-morty-5ac745250efcc7.6704338915230088050614.png"
            this.element.style.top = '0px'
            this.element.style.left = '0px'
            this.element.style.height = '200px'
            this.element.style.width = '130px'
            document.querySelector('main').appendChild(this.element)
        }
        
        else if(this.name === 'MORTY') {this.element.src = "https://png2.cleanpng.com/sh/bff19f53056bc21c93f0ba64fa91e93e/L0KzQYm3VsE3N5tqjpH0aYP2gLBuTf1weqVAReV2aYTrPbTvggJia6Vqip9sYYL3f7F1TfZidl5miuY2cnBlf8W0kvlkc15mhtY2bXB1iX68gsI1bmQ9e6NqOUK7SHA7WMg3PGE1S6MAMkm0RIm6UMAyOGkARuJ3Zx==/kisspng-morty-smith-character-cartoon-fan-art-robot-rick-and-mory-5b24f38c1a9288.4886400315291483001089.png"
        this.element.style.height = '160px'
        this.element.style.width = '135px'
        this.element.style.top = '430px'
        this.element.style.left = '700px'
        document.querySelector('main').appendChild(this.element)
    } 
    }
    jump() {
        if(this.name === "RICK"){

            let y =  parseInt(this.element.style.top)
            
            let timer = setInterval(() => {
                //console.log(y)
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
            
        } else if(this.name === 'MORTY'){
            let y =  parseInt(this.element.style.top)
            
            let timer = setInterval(() => {
                //console.log(y)
                if(y <0 ){
                    let t2 = setInterval(()=>{
                        y= y+20
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
        if(this.name === 'RICK'){

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
        } else if (this.name === 'MORTY'){
            const bullet = document.getElementById('bullet')
            let x = parseInt(this.element.style.left)
            let y =  parseInt(this.element.style.top)
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
                if(x>1700){
                    x = 1700
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
        
        let xR = parseInt(this.element.style.left) + 139
        let yT = parseInt(this.element.style.top)
        let yB = parseInt(this.element.style.top) + 216
       // console.log('left of Player: ',xL,'right of Player',xR,'top of player',yT,'bottom of player',yB)
        return [xL,xR,yT,yB]
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
                if(x<10){
                    x = 10
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



/*--------------------------------------------------------------- constants ---------------------------------------------------------------*/

//PLAYER
const player = new Player()

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
const heartsList = [livesEl1,livesEl2,livesEl3]

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
        let timer = player.shoot()
    } 
    
})


/*--------------------------------------------------------------- functions ---------------------------------------------------------------*/

init()


function init(){


     bullet.style.visibility = 'hidden'

    playerPoints = 0

    //playerName = startScreen()

    player.setName('MORTY')
   
   
    runGame()
           

    
    
 
    
    }

 
function  runGame(){
    

        let enemyList  = createEnemies()
        let movingEnemy =  moveRandomEnemy(enemyList)
        checkBulletCollsion()
    
    
    
    
}

function countdown(){
    const cowntdown = document.createElement('div')
    countdown.style.width = '1000px'
    countdown.style.height = '1000px'
    cowntdown.style.backgroundColor = 'pink'
    document.querySelector('main').appendChild(countdown)
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
    <img id='startingImg'style = "scale:0.8;"src ="https://png2.cleanpng.com/sh/595196fd7059950d60ff2e70bd56235d/L0KzQYq3VME3N6h1e5H0aYP2gLBuTgNqbJZnhNHwLXPkgsX2jB4ucZ1xjeV9cnH3ebF1Tfh2dZJzRdRuaHH5ebF5TfNpaaNmReRyY3uwcbBrTf1weqVARdh4cj3kPbn8jvRzbZUykddqcoOwebW0kvVidJ1ARd42NXPlRbXshvUzOmJreag3MEG2R4eAUMkyPWY6TKQ7OUe3QYSCWL5xdpg=/kisspng-sideblog-cartoon-illustration-human-behavior-chara-rick-and-morty-for-a-hundred-years-id-really-l-5cb5defe221fa6.0137670915554229741398.png">
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
        //console.log('rando top pos ',randomTopPos,'left pos ',leftPos,'rando enemy ',randoEnemy)
        let newEnemyDiv = document.createElement('img')
        newEnemyDiv.style.height = '100px'
        newEnemyDiv.style.width = '100px'
        newEnemyDiv.style.position = 'absolute'
        newEnemyDiv.left = '1000px'
        if(randoEnemy === ('smwygHead')){
           newEnemyDiv.src = "https://png2.cleanpng.com/sh/af0cc0734be612f642d690288074f98a/L0KzQYm3VcExN5dwj5H0aYP2gLBuTgJqa5wyi9N3Y3join77TgNpcaN5Rd94coT8PcT0igRpNaF0e91udD3wf8P7mgMudZZqRadqZkTpSYa4UvJmP5Y6RqI5NEG0QYi9UcUzPmE1TKI9OUG6SYm1kP5o/kisspng-rick-sanchez-t-shirt-morty-smith-pocket-mortys-mee-5af4f9512be7e5.0041117615260040491798.png"
        } else if (randoEnemy === 'gazorpazorp'){
            newEnemyDiv.src = "https://png2.cleanpng.com/sh/b0aa5ceeaec8c5c9667ff07228bce0a4/L0KzQYm3VMA1N6N8iZH0aYP2gLBuTfNpaaNmeAZucj32cbB7gb1kdJJ6i59vYX6wccP7TgJqa5wyedDtLX3ygsXCTcVia2U7TadrOUfocYWBTsYxQGE1SKQBMUW1Qom5UMQ1O2c3SqU3cH7q/kisspng-character-santa-claus-fan-art-rick-and-morty-5ac4655b97ea48.6080002615228204436223.png"
        } else if (randoEnemy === 'gromflomite'){
           
            newEnemyDiv.src = "https://static.wikia.nocookie.net/rickandmorty/images/4/47/Micheal.png"
        } else if (randoEnemy === 'jerry'){
            newEnemyDiv.src = "https://png2.cleanpng.com/sh/37411d6f92da59eaee915db2132e2933/L0KzQYm3V8IxN6d4f5H0aYP2gLBuTf1weqVAReV2aYTrPbTvggJia6Vqip9sYYL3f7F1TfZidl5miuY2dnnyfLr1TgJqa5wyedDtLX3ygsXCTcVjPWI8UaY9ZUO3SYW3TsI0PGM3T6g5MUW2QoG9VsEyPmo4SZD5bne=/kisspng-morty-smith-character-cartoon-fan-art-violin-rick-and-morty-5b517944e34940.234227601532066116931.png"
        } 
        document.querySelector('main').appendChild(newEnemyDiv)
        //newEnemyDiv.style.visibility = 'hidden'
        let newEnemy = new Enemy(newEnemyDiv,randoEnemy,`${randomTopPos}px`,`${leftPos}px`)
        enemyList.push(newEnemy)
       // console.log(Enemy.numOfEnemies, enemyList)
    }
    return enemyList

}

 
function moveRandomEnemy(enemyArr){
    let movingEnemy;

        let moveRandoEnemy = getRandomInt(20)
        movingEnemy = enemyArr[1]
        movingEnemy.moveLeft()
        
        checkEnemyCollsion(player,movingEnemy)
        console.log(player.lives)
        //console.log(movingEnemy)
        return movingEnemy
    
}




function checkBulletCollsion(){
    
}

function checkEnemyCollsion(playerEl,enemyEl){
    setInterval(function(){
        let playerPos =  playerEl.getPosition()

        let enemyPos =  enemyEl.getPosition()
        console.log('playerPos [xL,xR,yT,yB]',playerPos,'EnemyPs [xL,xR,yT,yB]',enemyPos)
        if(((enemyPos[0]< playerPos[1]) && (enemyPos[1]> playerPos[0]))&&(enemyPos[3])>playerPos[2] || playerPos[2]<enemyPos[3]){
            //if the left of the enemy 
            console.log('Hit')
            //loseLife(heartsList)

        } else{console.log()}
    },100)
}


function getRandomInt(range){
    const randoInt = Math.floor(Math.random(0)*range)
    return randoInt
}

function updatePoints(incrementVal){
    let  points = parseInt(pointsCounter.innerHTML)
     points = points + 100
     pointsCounter.innerHTML = points
}

function loseLife(lifeArray){
    let lastEl = lifeArray.length -1
    lifeArray[lastEl].style.visibility = 'hidden'
    lifeArray.pop()
    player.lives = player.lives - 1
    console.log(lifeArray[lastEl])
    checkDead()
}

function checkDead(){
    if(player.lives === 0){
        console.log('GAMEOVER')
    }
}
