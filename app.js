// synchronize = > java script is a synchronize language, where all our
//  codes will run line by line.

// example # 1
// console.log("start group")

// let data = "raghunathji"

// setTimeout(function(){

//     console.log(data)

// }, 1000)

// console.log("jay sia raam")


// example -2

// console.log("start")

// function breakfast(){
//     setTimeout( function(){
//         console.log("breakfast start")
//     },100)
// }


// function morning(){
//     console.log("breakfas complete")
//     breakfast()
// }
// morning()

// console.log("end")


// call back function => when we call one task, as soon as it finish, 
// it start another task (call)

// function printGreeing(msg, alertGreet){
//     if(msg === 'evening'){
//         evening(alertGreet)
//     }
// else if(msg === 'morning'){
//     morning(alertGreet)}
//     else {
//         night(alertGreet)

// }}

// function morning(alertGreet){
//     alert("Good morning");
//     alertGreet("hello world")
// }

// function evening(alertGreet){
//     alert("Good Morning");
//     alertGreet("hello world")
// }


// function night(alertGreet){
//     alert("Good night");
//     alertGreet("hello world")
// }



// printGreeing("hello world", alertGreet)


// promise 

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("new Promise")
//         resolve()
//     },1000)
// })
// promise.then(function () {
//     console.log("promise resolve")
// }
// )

// promise example - 2

function success(){
    console.log("success")
}

function failure(){
    console.log("failure")
}

function chkUserPromise(userInput, success, failure) {
    userInput === true ? success() : failure()
}

chkUserPromise(false, success, failure)