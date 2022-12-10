// 4 carrer aspect's data
let playerPosition = ["Forward","Midfilder","Defender","GoalKeeper"]
let careerStats = { 
    goals: Math.floor(Math.random()*1000),
    assists: Math.floor(Math.random()*500),
    cleanSheets: Math.floor(Math.random()*600)
}
let nickName = ["Goal-Machine","Flop","THE GOAT","Over-rated","Magician","Bottler","GOD of Football"]
let DefenderNickName = ["THE GOAT","Over-rated","Bottler","GOD of Football","Tank","Harry Maguire"]
let GoalKeeperNickName = ["Flop","THE GOAT","Bottler","GOD of Football","The Wall"]

//  playerPosition & nickName random index generators
const randPosindx = playerPosition[Math.floor(Math.random()*4)]
const randNickNameindx = nickName[Math.floor(Math.random()*7)]
const randDefNickNameindx = DefenderNickName[Math.floor(Math.random()*6)]
const randGoalieNickNameindx = GoalKeeperNickName[Math.floor(Math.random()*5)]

// Career generator function
const positionGen = ()=>{      
    return `Player Position: ${randPosindx}`
}
const jerseyNumGen = ()=>{

    const randJerNum = Math.floor(Math.random()*50+1)
    return `Jersey Number: ${randJerNum}`
}
const statsGen = ()=>{
    if(randPosindx === "GoalKeeper"){
        if(careerStats.cleanSheets > 501){
            return `Career Stats: ${careerStats.cleanSheets} clean sheets (you retired with the most clean sheets, surpasing Gianluigi Buffon's 501 record)`
        }else{
            return `Career Stats: ${careerStats.cleanSheets} clean sheets`
        }
    } else if(careerStats.goals > 819){
        return `Career Stats: ${careerStats.goals} goals & ${careerStats.assists} assists (you retired with the most goals, surpasing Cristiano Ronaldo's 819 record)`
    } else if(careerStats.assists > 385){
        return `Career Stats: ${careerStats.goals} goals & ${careerStats.assists} assists (you retired with the most assists, surpasing Lionel Messi's 385 record)`
    } else {
        return `Career Stats: ${careerStats.goals} goals & ${careerStats.assists} assists`
    }   
}
const nickNameGen = ()=>{
    if(randPosindx === "Forward"){
        return `Nick name: ${randNickNameindx}`
    } else if(randPosindx === "Midfilder"){
        return `Nick name: ${randNickNameindx}`
    } else if(randPosindx === "Defender"){
        return `Nick name: ${randDefNickNameindx}`
    } else if(randPosindx === "GoalKeeper"){
        return `Nick name: ${randGoalieNickNameindx}`
    }
}

console.log("You retired as a Proffesional Football Player")
console.log("")
console.log(positionGen())
console.log(jerseyNumGen())
console.log(statsGen())
console.log(nickNameGen())
