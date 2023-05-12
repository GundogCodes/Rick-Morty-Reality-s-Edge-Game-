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
        if (this.name  === 'RICK'){this.element.src = "./images/rick.png"
        this.element.style.height = '160px'
        this.element.style.width = '135px'
            this.element.style.top = '470px'
            this.element.style.left = '700px'
            rickCatchphrase.play()
            rickCatchphrase.volume = 0.5
            document.querySelector('main').appendChild(this.element)
        }
        
        else if(this.name === 'MORTY') {this.element.src = "./images/morty.png"
        this.element.style.height = '160px'
        this.element.style.width = '135px'
        this.element.style.top = '475px'
        this.element.style.left = '700px'
        mortyOhGeez.play()
        mortyOhGeez.volume = 0.5
        document.querySelector('main').appendChild(this.element)
    } 
    }
    jump() { // Link(1)
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
        bullet.moveRight()
        if(bullet.name === 'portal'){
            portalGun.play()
        } else if (bullet.name === 'fart'){
            fart.play()
        } else if (bullet.name === 'pickleRick'){
            pickleRick.play()
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
        this.element.setAttribute('class','enemy') 
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
        this.element.setAttribute('class','bullet') 
        this.element.style.width = '50px'
        this.element.style.height = '50px'
        this.element.style.visibility = 'hidden'
        this.element.style.position = 'absolute'
        this.weaponIndex = 0
        this.nameIndex = 0
        this.ammo = [portal,fart,pickleRick]
        this.names = ['portal','fart','pickleRick']
        this.element.src = this.ammo[this.weaponIndex]
        this.name = this.names[this.nameIndex]

        document.querySelector('main').appendChild(this.element)
    }

    changeWeapon(){
        
        this.weaponIndex = this.weaponIndex +1
        this.nameIndex = this.nameIndex +1
        if(this.weaponIndex > 2|| this.nameIndex >2){
            this.weaponIndex = 0
            this.nameIndex = 0
        }
        this.element.src = this.ammo[this.weaponIndex]
        this.name= this.names[this.nameIndex]
        
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
                this.element.style.visibility = 'hidden'
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
const backgroundMusic = new Audio("./music/backgroundMusic.mp3")

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
const pickleRick = new Audio("./music/rickPickleRick.mp3")
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
let movingEnemyIndex;
let movingEnemy;

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
const heartsList = []

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
//WEAPON
changeWeaponBtn.addEventListener('click', function(){
    bullet.changeWeapon()
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



/*--------------------------------------------------------------- FUNCTIONS ---------------------------------------------------------------*/

startScreen()

function init(){
   introSong.pause()
   backgroundMusic.play()
   backgroundMusic.volume = 0.4
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
    console.log(enemyList)
    console.log('moving Enemy and index os the function',movingEnemy,movingEnemyIndex)
    

   
     
}

function startScreen(){
    introSong.play()
    introSong.volume = 0.5
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

        let newEnemyImg = document.createElement('img')

        newEnemyImg.style.height = '100px'
        newEnemyImg.style.width = '100px'
        newEnemyImg.style.position = 'absolute'
        newEnemyImg.left = '1000px'

        if(randoEnemy === ('smwygHead')){
           newEnemyImg.src = "./images/head.png"
           newEnemyImg.style.transform = 'rotateY(180deg)'
        } else if (randoEnemy === 'gazorpazorp'){
            newEnemyImg.src = "./images/gazorpazorp.png"
            newEnemyImg.style.transform = 'rotateY(180deg)'
        } else if (randoEnemy === 'gromflomite'){
           
            newEnemyImg.src = "./images/glomflomite.png"
        } else if (randoEnemy === 'jerry'){
            newEnemyImg.src = "./images/jerry.png"
        } 
        document.querySelector('main').appendChild(newEnemyImg)
        newEnemyImg.style.visibility = 'hidden'
        let newEnemy = new Enemy(newEnemyImg,randoEnemy,`${randomTopPos}px`,`${leftPos}px`)
        enemyList.push(newEnemy)

    }
    return enemyList

}
 
function moveRandomEnemy(enemyArr){

   // movingEnemyIndex = getRandomInt(1000) //index of movingEnemy in Enemy Array
   // movingEnemy = enemyArr[movingEnemyIndex] // the instance of the Enemy Class that is moving
    console.log('movingENEMY and Index os the MOVERANDOMENEMY INTERVAL',movingEnemy,' , ',movingEnemyIndex)
    let enemyTimer = setInterval(function(){
        
        
        if (player.lives < 0){
            clearInterval(enemyTimer)
        }
        

        
        movingEnemyIndex = getRandomInt(1000) //index of movingEnemy in Enemy Array
        movingEnemy = enemyArr[movingEnemyIndex] // the instance of the Enemy Class that is moving
        console.log('movingEnemy & index in the MOVE ENEMYFUNCTION function',movingEnemy,' , ',movingEnemyIndex)
        //console.log(movingEnemy)
        movingEnemy.moveLeft()

        
        
        //Play sound:
        if(movingEnemy.name ==='glomflomite'){
            let randoNum = getRandomInt(18)
            if(randoNum >= glomSounds.length){}else{
                
                let a = glomSounds[randoNum].play()
                a.volume = 0.5
            }
        }else if(movingEnemy.name === 'jerry'){
            let randoNum = getRandomInt(18)
            if(randoNum>=jerrySounds.length){} else{
                
               let a = jerrySounds[randoNum].play()
                a.volume = 0.5
            }
            
        } else if(movingEnemy.name === 'gazorpazorp'){
            let randoNum = getRandomInt(18)
            if(randoNum>=gazorpazorpSounds.length){}else{
                
               let a = gazorpazorpSounds[randoNum].play()
                a.volume = 0.5
            }
            
        } else if(movingEnemy.name === 'smwygHead'){
            let randoNum = getRandomInt(15)
            if(randoNum>=headSounds.length){} else{
                
                let a = headSounds[randoNum].play()
                a.volume =0.5
            }
            
        }
        checkBulletCollsion(bullet,movingEnemy,movingEnemyIndex,enemyList)
    checkEnemyCollsion(player,movingEnemy,movingEnemyIndex,enemylist)
        
        
        
        
    },1000)
    return enemyTimer
    
    
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

function checkBulletCollsion(bulletEl,movingEnemy,movingEnemyIndex,enemyArr,checkPlayerCollison){
    
    
    let bulletTimer = setInterval(function(){
        
        const left =0
        const right = 1
        const top = 2
        const bottom =3
        
        let bulletPos =  bulletEl.getPosition()
        let enemyPos =  movingEnemy.getPosition()
        console.log('moving Enemy and Index in Bullet collison',movingEnemy,' , ',movingEnemyIndex)
        if(enemyPos === undefined){return null} else{
            
            
            if(((enemyPos[left]< bulletPos[right]) && (enemyPos[right]> bulletPos[left]))&&((enemyPos[bottom])>bulletPos[top]) && (bulletPos[top]<enemyPos[bottom]&&(bulletPos[bottom]> enemyPos[top]))){
                updatePoints(1)
                
                enemyArr[movingEnemyIndex].hideVisibility()
                enemyArr.splice(movingEnemyIndex, 2)
                console.log('BULLLLLLEEEEEETTTTTT HIIIIIIIIIITTTTTT')
                points.play()
                points.volume = 0.5
                
            } else{console.log()}
            //console.log(enemyArr.length)
        }
        
    },200)
    
    checkEnemyCollsion(player,movingEnemy,movingEnemyIndex,enemyList)
    return bulletTimer
}

function checkEnemyCollsion(playerEl,movingEnemy,movingEnemyIndex,enemyArr){
    
    let playerTimer = setInterval(function(){
    
            console.log('moving Enemy and Index in player collison',movingEnemy,' , ',movingEnemyIndex)
            let enemyVisiblity = movingEnemy.getVisibility()
            
            let playerPos =  playerEl.getPosition()
            let enemyPos =  movingEnemy.getPosition()
            
            if(enemyPos === undefined || enemyVisiblity === undefined){return null} else{
                
                //[xL,xR,yT,yB]
                if((enemyVisiblity === 'visible')&&((enemyPos[0]< playerPos[1]) && (enemyPos[1]> playerPos[0]))&&(enemyPos[3])>playerPos[2] && playerPos[2]<enemyPos[3]){
                    playerHurt = 'yes'
                    hurt.play()
                    console.log(playerHurt)
                    loseLife(heartsList)
                } else{console.log()}
            }
        },100)
      
  
        return playerTimer
 
    
}

function updatePoints(incrementVal){
    let  points = parseInt(pointsCounter.innerHTML)
     points = points + incrementVal
     playerPoints = playerPoints + incrementVal
     pointsCounter.innerHTML = points



}

function loseLife(lifeArray){

   // console.log(lifeArray)
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
        // clearInterval(enemyTimer)
        // clearInterval(bulletTimer)
        // clearInterval(playerTimer)
        runEndScreen()
        
    }
}

function runEndScreen(){
    enemyList = []
   
    introSong.pause()
    backgroundMusic.pause()
    outroSadSong.play()
    outroSadSong.volume =0.5
    
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