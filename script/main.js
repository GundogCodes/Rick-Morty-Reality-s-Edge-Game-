console.log('works!!!')
/*---------------------------------------------------------------------- CLASSES ----------------------------------------------------------------------*/ 
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
            
            let timer = setInterval(() =>{
               
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
        let xR = parseInt(this.element.style.left)
        let yB = parseInt(this.element.style.top)

            
        return [xL,xR,yT,yB]
        

    }

    hideVisibility(){
        this.element.style.visibility = 'hidden'
        
    }
    getVisibility(){
        return this.element.style.visibility
    }

    getName(){
        return this.name
    } 
}


class Bullet{
    constructor(){
        const portal = "./images/portal.png"  
        const fart = "./images/fart.png"  
        const pickleRick = "./images/pickleRick.png"  
        this.element = document.createElement('img')
        
        this.element.style.width = '50px'
        this.element.style.height = '50px'
        this.element.style.visibility = 'hidden'
        this.element.style.position = 'absolute'
        this.weaponIndex = 0
        this.ammo = [portal,fart,pickleRick]
        this.element.src = this.ammo[this.weaponIndex]

        document.querySelector('main').appendChild(this.element)
    }

    changeWeapon(){
        
        this.weaponIndex = this.weaponIndex +1
        if(this.weaponIndex > 2){
            this.weaponIndex = 0
        }
        this.element.src = this.ammo[this.weaponIndex]
    }

    moveRight(){
        this.element.style.visibility = 'visible'
        let playerPos = player.getPosition()
       
        let xL = playerPos[0] +105
        let xR = playerPos[1] +240
        let yT = playerPos[2] +50
        let yB = playerPos[3]
        
         
         
         this.element.style.left = xL+'px'
         this.element.style.top = yT+'px'
         this.element.style.right = xR +'px'
         this.element.style.bottom = yB +'px'
         
        xL = parseInt(this.element.style.left)
        xR = parseInt(this.element.style.right)
         
         let timer = setInterval(() =>{
   
             if(xL>1550){
                //this.element.style.visibility = 'hidden'
                 xL = 1550
                 clearInterval(timer)
                }
                xL = xL+20
                xR = xR+20
                this.element.style.left = xL +'px'
                this.element.style.right = xR +'px'
            },10)
            
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

/*---------------------------------------------------------------------- CONSTANTS ----------------------------------------------------------------------*/

//GAME-OBJECTS
const player = new Player()
const bullet = new Bullet()
//BACKGROUND IMGs
const b1 = "https://wallup.net/wp-content/uploads/2017/11/17/271175-Rick_and_Morty.jpg"
const b2 = "https://sm.ign.com/ign_ap/screenshot/default/she-store_z42d.gif"
const b3 = "https://www.pixelstalk.net/wp-content/uploads/images6/Backgrounds-Steven-Universe.gif"
const b4 = "https://cutewallpaper.org/25/anime-raining-wallpaper-gif/serendipity-%E2%80%94-anime-rain.gif"
const b5 = "https://art.ngfiles.com/images/2516000/2516242_vulpsvulps_amphibia.gif?f1652396191"
const b6 = "https://cdna.artstation.com/p/assets/images/images/020/624/916/original/maze-of-pines-portalgif-final.gif?1568543958"
const b7 = "https://i.pinimg.com/originals/71/7a/d9/717ad9268a58b0f92a24f39afb817d98.gif"

const backgroundList = [b1,b2,b3,b4,b5,b6,b7]

/*------------------------------------------------------------------------ MUSIC ------------------------------------------------------------------------*/
const introSong = new Audio("./music/intro.mp3")
const getShwifty = new Audio("./music/getShwifty.mp3")
const goodbyeMoonmen = new Audio("./music/goodByeMoonmen.mp3")
const backgroundSongs = [introSong,getShwifty,goodbyeMoonmen]

const portalGun = new Audio("./music/portalSoundEffect.mp3")
const fart = new Audio("./music/fart.mp3")
const points = new Audio("./music/increasePoints.mp3")
const hurt = new Audio("./music/hurt.mp3")
const outroSadSong = new Audio("./music/introSadSong.mp3")

//morty
const mortyFreakingOut= new Audio("./music/mortyFreakingOut.mp3")
const mortyHeckYa = new Audio("./music/mortyHeckYa.mp3")
const mortyOhGeez = new Audio("./music/mortyOhGeez.mp3")
const mortySounds = [mortyFreakingOut,mortyHeckYa,mortyOhGeez]

//rick
const rickYouBunchOfIdiots = new Audio("./music/rickYouBunchOfidiots.mp3")
const rickWhatAreYouNuts = new Audio("./music/rickWhatAreYouNuts.mp3")
const rickCatchphrase = new Audio("./music/rickCatchphrase.mp3")
const rickTotesMalotesDawg = new Audio("./music/rickTotesMalotesDawg.mp3")
const rickHow = new Audio ("./music/rickHow.mp3")
const rickBye = new Audio("./music/rickBye.mp3")
const rickAreYouHuman = new Audio("./music/rickAreYouPeopleHuman.mp3")
const rickCalmDownJerry = new Audio("./music/rickCalmDownJerry.mp3")
const rickImGonnaKillYou = new Audio("./music/rickImGonnaKillYou.mp3")
const rickSaysGazorp = new Audio("./music/rickSaysGazorpazorp.mp3")
const rickSounds = [rickYouBunchOfIdiots,rickWhatAreYouNuts,rickCatchphrase,rickTotesMalotesDawg,
                    rickHow,rickBye,rickAreYouHuman,
                    rickCalmDownJerry,rickImGonnaKillYou,rickSaysGazorp]

//glomflomite

const glomHAHAHA = new Audio("./music/glomHAHAHA.mp3")
const glomHereIGoKilling = new Audio("./music/glomHereIGoKillingAgain.mp3")
const glomHeyRick = new Audio("./music/glomHeyRick.mp3")
const glomLooksDeadly = new Audio("./music/glomThisLooksDeadly.mp3")
const glomSounds =[glomHAHAHA,glomHereIGoKilling,glomHeyRick,glomLooksDeadly]
for(let glomSound of glomSounds ){
    glomSound.volume =0.5
}

//gazorpazorp
const gazorpazorpIHateVideogames = new Audio("./music/gazorpazorpIHateVideoGames.mp3")
const gazorpazorpIThinkItsTime= new Audio("./music/gazorpazorpIThinkItsTime.mp3")
const gazorpazorpSounds =[gazorpazorpIHateVideogames,gazorpazorpIThinkItsTime]
for(let gSound of gazorpazorpSounds ){
    gSound.volume =0.5
}

//jerry

const jerryName = new Audio("./music/jerryJERRYSMITH.mp3")
const jerryOooh = new Audio("./music/jerryOooh.mp3")
const jerryScrewYou = new Audio("./music/jerryScrewYou.mp3")
const jerryWhatTheHell = new Audio("./music/jerryWhatTheHell.mp3")
const jerryYouGuysSuck = new Audio("./music/jerryYouGuysSuck.mp3")
const jerrySounds =[jerryName,jerryOooh,jerryScrewYou,jerryWhatTheHell,jerryYouGuysSuck]
for(let jerrySound of jerrySounds ){
    jerrySound.volume =0.5
}

//head

const headBoo = new Audio("./music/headBoo.mp3")
const headShowMeWhatYouGot = new Audio("./music/headShowMeWhatYouGot.mp3")
const headShowUsWhatYouGot = new Audio("./music/headShowUsWhatYouGot.mp3")
const headSeason = new Audio("./music/headTheresOneEverySeason.mp3")
const headSounds = [headBoo,headShowMeWhatYouGot,headShowMeWhatYouGot,headShowUsWhatYouGot,headSeason]
for(let hSounds of headSounds ){
    hSounds.volume =0.5
}

/*------------------------------------------------------------------- STATE VARIABLES -------------------------------------------------------------------*/

let playerPoints;
let playerName;
let enemyList;
let movingEnemyIndex 
let movingEnemy 

/*------------------------------------------------------------------- CACHED ElEMENTS -------------------------------------------------------------------*/
//MAIN
const main = document.querySelector('main')
//BUTTONS
const changeBackground = document.getElementById('changeBackground')
const changeWeaponBtn = document.getElementById('changeWeapon')
const musicToggleBtn = document.getElementById('musicToggle')
const pointsCounter = document.getElementById('pointsCounter')
//LIVES
const livesEl1 = document.getElementById('heart1')
const livesEl2 = document.getElementById('heart2')
const livesEl3 = document.getElementById('heart3')
const livesEl4 = document.getElementById('heart4')
const livesEl5 = document.getElementById('heart5')
const heartsList = [livesEl1,livesEl2,livesEl3,livesEl4,livesEl5]

/*------------------------------------------------------------------- EVENT LISTENERS -------------------------------------------------------------------*/
//BACKGROUND
let i = 0
changeBackground.addEventListener('click',function(){
    i++
    if(i===6){
        i=0
    }
    main.style.backgroundImage = `url(${backgroundList[i]})`
    

})

//MOVE PLAYER
window.addEventListener('keydown',function(e){

    if(e.key === 'ArrowLeft'){
        let timer = player.moveLeft()

        window.addEventListener('keyup',function(e){
           
            if(e.key === 'ArrowLeft'){
                player.setPosition(timer)
            }    
        })    
    }    
    
})
window.addEventListener('keydown',function(e){

    if(e.key === 'ArrowRight'){
        let timer = player.moveRight()

        window.addEventListener('keyup',function(e){

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

    if(e.key === 'f'){
        player.shoot()
    } 
    
})

changeWeaponBtn.addEventListener('click', bullet.changeWeapon())

/*--------------------------------------------------------------- FUNCTIONS ---------------------------------------------------------------*/

startScreen()

function init(){
   introSong.pause()
   getShwifty.play()
    enemyList = []
    playerPoints = 0
    player.lives = 5
    heartsList.push(livesEl1)
    heartsList.push(livesEl2)
    heartsList.push(livesEl3)
    heartsList.push(livesEl4)
    heartsList.push(livesEl5)
    
   for(let heart of heartsList){
    heart.style.visibility ='visible'
   }

    runGame()
     
}
    
function runGame(){

    let enemyList  = createEnemies()
     
    moveRandomEnemy(enemyList)

    
    
    
}

function startScreen(){
    introSong.play()
    const startScreen = document.createElement('div')
    startScreen.setAttribute('class','startingPage')
    startScreen.style.width = '1800px'
    startScreen.style.height = '1000px'
    startScreen.style.display = 'flex'
    startScreen.style.flexDirection = 'column'
    startScreen.style.justifyContent = 'center'
    startScreen.style.alignItems = 'center'
    startScreen.style.position = 'absolute'
    startScreen.style.left = '0'
    startScreen.style.borderRadius = '15px'

    startScreen.innerHTML = `<h1 id ='startingHeader'>RICK AND MORTY: REALITY'S EDGE</h1>
    <h2 id = 'choosePlayer'>Choose Your Player</h2>
    <h4>Use Arrow Keys to Move and 'F' Key to Shoot, Goodluck!</h4>
    <img id='startingImg'style = "scale:0.8;"src ="https://png2.cleanpng.com/sh/697e54f06cdac5f9584e1d6b5a0a9bf1/L0KzQYq3VME3N6h1e5H0aYP2gLBuTgNqbJZnhNHwLXPkgsX2jB4ucZ1xjeV9cnH3ebF1Tfh2dZJzRdRuaHH5ebF5TfNpaaNmReRyY3uwcbBrTf1weqVARdh4cj3kPbn8jvRzbZUykddqcoOwebW0kvVidJ1ARd42NXPlRbXshvUzOmJreag3MEG2R4eAUMkyPWY6TKQ7OUe3QYSCWL5xdpg=/kisspng-sideblog-cartoon-illustration-human-behavior-chara-rick-and-morty-for-a-hundred-years-id-really-l-5cb5defe221fa6.0137670915554229741398.png">
    <div id ='buttonBox'>
    <button id ='Rick' >RICK</button>
    <button id = 'Morty' >MORTY</button>
    </div>
    <p id = 'Gunish'>Gunish<p>`

    startScreen.style.color = 'white'
    startScreen.style.backgroundColor = 'blue'
    document.querySelector('body').appendChild(startScreen)

    document.getElementById('buttonBox').addEventListener('click',function(e){
        playerName = e.target.innerText
        console.log('User chooses: ',playerName)
        player.setName(playerName)
        document.querySelector('body').removeChild(startScreen)
        init()
})
    
}

function createEnemies(){
    
    const enemyNames = ['jerry','gromflomite','gazorpazorp','smwygHead']

    for (let i =0; i<1000; i++){

        let randoEnemy = enemyNames[getRandomInt(4)]
        let leftPos = 1600
        let randomTopPos = getRandomInt(500)

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

    let enemyTimer = setInterval(function(){
        
        
        if (player.lives < 0){
            clearInterval(enemyTimer)
        }
        

        
        movingEnemyIndex = getRandomInt(1000) //index of movingEnemy in Enemy Array
        movingEnemy = enemyArr[movingEnemyIndex] // the instance of the Enemy Class that is moving
        
        //console.log(movingEnemy)
        movingEnemy.moveLeft()
        
        //Play sound:
        if(movingEnemy.name ==='glomflomite'){
            let randoNum = getRandomInt(18)
            if(randoNum > glomSounds.length){}else{
                
                glomSounds[randoNum].play()
            }
        }else if(movingEnemy.name === 'jerry'){
            let randoNum = getRandomInt(18)
            if(randoNum>jerrySounds.length){} else{
                
                jerrySounds[randoNum].play()
            }
            
        } else if(movingEnemy.name === 'gazorpazorp'){
            let randoNum = getRandomInt(18)
            if(randoNum>gazorpazorpSounds.length){}else{
                
                gazorpazorpSounds[randoNum].play()
            }
            
        } else if(movingEnemy.name === 'smwygHead'){
            let randoNum = getRandomInt(15)
            if(randoNum>headSounds.length){} else{
                
                headSounds[randoNum].play()
            }
            
        }
        
        checkBulletCollsion(bullet,movingEnemy,movingEnemyIndex,enemyList)
        checkEnemyCollsion(player,movingEnemy,movingEnemyIndex,enemyList)
        
        
    },1000)
        
        
        
}

  //checkEnemyOffScreen(movingEnemy,movingEnemyIndex,enemyArr)

function checkEnemyOffScreen(movingEnemy){
    setInterval(function(){

        let enemyPos = movingEnemy.getPosition()
       //console.log(enemyPos)
        if(enemyPos[0] < -100){

            enemyPos[0] =1800
        }

    },500)
}

function checkBulletCollsion(bulletEl,movingEnemy,movingEnemyIndex,enemyArr){
    
    
    setInterval(function(){
        
           const left =0
           const right = 1
           const top = 2
           const bottom =3
           
           let bulletPos =  bulletEl.getPosition()
           let enemyPos =  movingEnemy.getPosition()
           
           if(enemyPos === undefined){return null} else{
               
               
               if(((enemyPos[left]< bulletPos[right]) && (enemyPos[right]> bulletPos[left]))&&((enemyPos[bottom])>bulletPos[top]) && (bulletPos[top]<enemyPos[bottom]&&(bulletPos[bottom]> enemyPos[top]))){
                   updatePoints(100)
                   
                   enemyArr[movingEnemyIndex].hideVisibility()
                   enemyArr.splice(movingEnemyIndex, 2)
                   console.log('BULLLLLLEEEEEETTTTTT HIIIIIIIIIITTTTTT')
                   points.play()
                   points.volume = 0.5
                   
                } else{console.log()}
                //console.log(enemyArr.length)
           }
     
        },100)
}

function checkEnemyCollsion(playerEl,movingEnemy,movingEnemyIndex,enemyArr){

    setInterval(function(){
    
            
            let enemyVisiblity = movingEnemy.getVisibility()
            
            let playerPos =  playerEl.getPosition()
            let enemyPos =  movingEnemy.getPosition()
            
            if(enemyPos === undefined || enemyVisiblity === undefined){return null} else{
                
                //[xL,xR,yT,yB]
                if((enemyVisiblity === 'visible')&&((enemyPos[0]< playerPos[1]) && (enemyPos[1]> playerPos[0]))&&(enemyPos[3])>playerPos[2] && playerPos[2]<enemyPos[3]){
                    
                    loseLife(heartsList)
                    hurt.play()
                } else{console.log()}
            }
        },200)
  

 
    
}

function updatePoints(incrementVal){
    let  points = parseInt(pointsCounter.innerHTML)
     points = points + incrementVal
     playerPoints = playerPoints + incrementVal
     pointsCounter.innerHTML = points



}

function loseLife(lifeArray){
    
    let lastEl = lifeArray.length -1
  
    lifeArray[lastEl].style.visibility = 'hidden'
    lifeArray.pop()
    
    player.lives = player.lives - 1
   // console.log(lifeArray[lastEl])
    
    checkDead()

}

function checkDead(){
    
    if(player.lives === 0){

      //  console.log('Player Lives: ',player.lives,' : GAMEOVER')
        
        runEndScreen()
        
    }
}

function runEndScreen(){
    enemyList = []
   
    introSong.pause()
    getShwifty.pause()
    outroSadSong.play()
    
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
            outroSadSong.pause()
            startScreen()

        })
}

function getRandomInt(range){
    const randoInt = Math.floor(Math.random(0)*range)
    return randoInt
}