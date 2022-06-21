

//let stringHealth = String(kenobiHealth)
//let boolhealth = Boolean(kenobiHealth)
//console.log(stringHealth)

let theWinnerIs = 'Kenobi is the winner'

theWinnerIs = theWinnerIs.replace('Kenobi', 'Ani')


theWinnerIs = theWinnerIs.toUpperCase()
theWinnerIs = theWinnerIs.split(' ')
theWinnerIs = theWinnerIs.join(' ')
//console.log(theWinnerIs)

let kenobiHealth = 100


function isKenobiAlive(){
    if(kenobiHealth > 0){
        console.log('Obi-Wan is alive')
    } else {
        console.log('RIP Kenobi')
    }
}
//isKenobiAlive()


function surpriseAttack(attack) {
kenobiHealth - attack
isKenobiAlive()
}

let kenobiDefense = 15

function readyAttack(attack) {
kenobiHealth -= (attack - kenobiDefense)
isKenobiAlive()
}

surpriseAttack(20)

readyAttack(30)

console.log(kenobiHealth)

// function helloThere(arg1,arg2){
    
//     console.log(`Hello ${arg2}`)
//     console.log(arg1)
// }

// helloThere('general kenobi', 'There')


// //const greeting = function(person1,person2){
//     return `${person1} greets ${person2}`
// }

const greeting = (person1,person2) => `${person1} greets ${person2}`
console.log(greeting('andy','bob'))