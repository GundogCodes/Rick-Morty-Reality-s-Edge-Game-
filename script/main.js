console.log('works!!!')
/*---------------------------------------------------------- CLASSES ----------------------------------------------------------*/ 
class Player{

    constructor(){
        
        this.element = document.getElementById('player')
        this.lives = 3 
        
    }
    setName(name){
        this.name = name
        if (this.name  === 'RICK'){this.element.innerHTML = `<img style ='scale:0.2'src = "https://png2.cleanpng.com/sh/d0bbf86ed47622a56b45e1d5c32af94f/L0KzQYm3VMA3N5p8iZH0aYP2gLBuTgBweqVmhJ87LYLsc7y0kBFva5lqkp9vdX7uf373jCJ1aZ14Rdt3LXbsc8XwjB4ueppog59qbnSwfbF5lQkuPZJoT6YAMkWzdbfqg8cvPmg1TKU8OEm0RYO6UMA5QGE6SKg6ND7zfri=/kisspng-portal-2-rick-sanchez-funko-portals-in-fiction-rick-and-morty-5ac745250efcc7.6704338915230088050614.png">`
            this.element.style.top = '-40px'
            this.element.style.left = '450px'} 
        else if(this.name === 'MORTY') {this.element.innerHTML = `<img style ='scale:0.3'src = "https://png2.cleanpng.com/sh/bff19f53056bc21c93f0ba64fa91e93e/L0KzQYm3VsE3N5tqjpH0aYP2gLBuTf1weqVAReV2aYTrPbTvggJia6Vqip9sYYL3f7F1TfZidl5miuY2cnBlf8W0kvlkc15mhtY2bXB1iX68gsI1bmQ9e6NqOUK7SHA7WMg3PGE1S6MAMkm0RIm6UMAyOGkARuJ3Zx==/kisspng-morty-smith-character-cartoon-fan-art-robot-rick-and-mory-5b24f38c1a9288.4886400315291483001089.png">`
        this.element.style.top = '275px'
        this.element.style.left = '550px'} 
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
                if(y <-150){
                    let t2 = setInterval(()=>{
                        y=y+20
                        if(y>300){
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
                if(x<-257){
                    x = -257
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
                if(x<-200){
                    x = -200
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
                if(x>1187){
                    x = 1187
                    clearInterval(timer)
                }
                x = x+20
                this.element.style.left = x +'px'
            },10)
            return timer
        } else if(this.name === 'MORTY'){
            let x = parseInt(this.element.style.left)
            
            let timer = setInterval(() =>{
                if(x>1300){
                    x = 1300
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
    


    getEl(){
        return this.element
    }
        
    getlives(){
        return this.lives
    }

    getPosition(){
        
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
        if(this.name === 'gromflomite'){
            this.element.style.visibility = 'visible'
        let x = parseInt(this.element.style.left)
       // console.log(x)
        let timer = setInterval(() =>{
           // console.log('ENEMY x',x)
            if(x<-60){
                x = -60
               clearInterval(timer)
            }
            x = x-20
            this.element.style.left = x +'px'
        },10)
        } else {

            this.element.style.visibility = 'visible'
            let x = parseInt(this.element.style.left)
            // console.log(x)
            let timer = setInterval(() =>{
                // console.log('ENEMY x',x)
                if(x<-200){
                    x = -200
                    clearInterval(timer)
                }
                x = x-20
                this.element.style.left = x +'px'
            },10)
            
        }

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

//PLAYERS

//top, left
const player = new Player()




//ENEMYS                                                                             //top, left
// const gromflomite1 =  new Enemy(document.getElementById('gromflomite1'),'gromflomite','0px','0px')
// const smwygHead1 = new Enemy(document.getElementById('smwyg1','showMeWhatYouGotHead','0px','0px'))
// const jerry1 = new Enemy(document.getElementById('jerry1'),'jerry','0px','0px')
// const gazorpazorp1 = new Enemy(document.getElementById('gazorpazorp1'),'gazorpazorp','0px','0px')

//const smwygHead2 = new Enemy(document.getElementById('smwyg2','showMeWhatYouGotHead','300px','115px'))





/*--------------------------------------------------------------- state variables---------------------------------------------------------------*/

let playerPoints;
let playerName;

/*---------------------------------------------------------------cached elements  ---------------------------------------------------------------*/

const characterChangeBtn = document.getElementById('characterChange')
const changeWeaponBtn = document.getElementById('changeWeapon')
const musicToggleBtn = document.getElementById('musicToggle')
const pointsCounter = document.getElementById('pointsCounter')



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


//let mainCharacter = prompt('Which character would you like to play as?')
//startting screen to pick main character
//maybe a countdown
//play music and sounds when event happen





init()


function init(){
    // jerry2.getEl().style.visibility = 'hidden'
    // gazorpazorp2.getEl().style.visibility = 'hidden'
     bullet.style.visibility = 'hidden'
    // gromflomite2.getEl().style.visibility = 'hidden'
    playerPoints = 0

    //playerName = startScreen()
    
    player.setName('RICK')
   

    runGame()
    
    }

 
function  runGame(){
    let enemyList  = createEnemies()
            randomizeEnemies(enemyList)
            checkBulletCollsion()
            checkEnemyCollsion()
    
    
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
    for (let i =0; i<50; i++){

        let randoEnemy = enemyNames[getRandomInt(4)]
        let randomTopPos =getRandomInt(210)
        let leftPos = 1400
        //console.log('rando top pos ',randomTopPos,'left pos ',leftPos,'rando enemy ',randoEnemy)
        let newEnemyDiv = document.createElement('div')
        newEnemyDiv.style.height = '200px'
        newEnemyDiv.style.width = '200px'
        newEnemyDiv.style.position = 'absolute'
        newEnemyDiv.left = '1000px'
        if(randoEnemy === ('smwygHead')){
            newEnemyDiv.innerHTML = `<img style= "scale:0.2;"src = "https://png2.cleanpng.com/sh/af0cc0734be612f642d690288074f98a/L0KzQYm3VcExN5dwj5H0aYP2gLBuTgJqa5wyi9N3Y3join77TgNpcaN5Rd94coT8PcT0igRpNaF0e91udD3wf8P7mgMudZZqRadqZkTpSYa4UvJmP5Y6RqI5NEG0QYi9UcUzPmE1TKI9OUG6SYm1kP5o/kisspng-rick-sanchez-t-shirt-morty-smith-pocket-mortys-mee-5af4f9512be7e5.0041117615260040491798.png">`
        } else if (randoEnemy === 'gazorpazorp'){
            newEnemyDiv.innerHTML = `<img  style="scale: 0.2;"  src = "https://png2.cleanpng.com/sh/b0aa5ceeaec8c5c9667ff07228bce0a4/L0KzQYm3VMA1N6N8iZH0aYP2gLBuTfNpaaNmeAZucj32cbB7gb1kdJJ6i59vYX6wccP7TgJqa5wyedDtLX3ygsXCTcVia2U7TadrOUfocYWBTsYxQGE1SKQBMUW1Qom5UMQ1O2c3SqU3cH7q/kisspng-character-santa-claus-fan-art-rick-and-morty-5ac4655b97ea48.6080002615228204436223.png">`
        } else if (randoEnemy === 'gromflomite'){
            leftPos = 1550
            newEnemyDiv.innerHTML = ` <img style="scale: 0.3;"  src = "https://static.wikia.nocookie.net/rickandmorty/images/4/47/Micheal.png">`
        } else if (randoEnemy === 'jerry'){
            newEnemyDiv.innerHTML = ` <img style="scale: 0.2;"  src = "https://png2.cleanpng.com/sh/37411d6f92da59eaee915db2132e2933/L0KzQYm3V8IxN6d4f5H0aYP2gLBuTf1weqVAReV2aYTrPbTvggJia6Vqip9sYYL3f7F1TfZidl5miuY2dnnyfLr1TgJqa5wyedDtLX3ygsXCTcVjPWI8UaY9ZUO3SYW3TsI0PGM3T6g5MUW2QoG9VsEyPmo4SZD5bne=/kisspng-morty-smith-character-cartoon-fan-art-violin-rick-and-morty-5b517944e34940.234227601532066116931.png">`
        } 
        document.querySelector('main').appendChild(newEnemyDiv)
        let newEnemy = new Enemy(newEnemyDiv,randoEnemy,`${randomTopPos}px`,`${leftPos}px`)
        enemyList.push(newEnemy)
       // console.log(Enemy.numOfEnemies, enemyList)
    }
    return enemyList

}


function randomizeEnemies(enemyArr){
    setInterval(function(){
        let moveRandoEnemy = getRandomInt(50)
        console.log(moveRandoEnemy)
        enemyArr[moveRandoEnemy].moveLeft()

    },10)
    
}




function checkBulletCollsion(){
    
}

function checkEnemyCollsion(playerEl,EnemyEl){

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
