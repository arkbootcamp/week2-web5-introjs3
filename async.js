// sincronous

// function task1() {
//     console.log("task 1")
// }
// function task2() {
//     console.log("task 2")
// }
// function task3() {
//     console.log("task 3")
// }
// function task4() {
//     console.log("task 4")
// }


// task1()
// task2()
// task3()
// task4()

// async

function task1() {
    console.log("task 1")
}
function task2() {
    setTimeout(()=>{
        console.log("task 2")
    },3000)
}
function task3() {
    console.log("task 3")
}
function task4() {
    console.log("task 4")
}


task1()
task2()
task3()
task4()