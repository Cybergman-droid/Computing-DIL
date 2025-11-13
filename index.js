document.getElementById("calculator").addEventListener("click", calculator)
document.getElementById("to-do_list").addEventListener("click", to_do_program)
document.getElementById("ex3").addEventListener("click", ex3)

function calculator(){
    function add(a,b){
        return a+b
    }

    function subtract(a,b){
        return a-b
    }

    function times(a,b){
        return a*b
    }

    function divide(a,b){
        return a/b
    }

    choice = prompt('enter what operation you want to carry out(+ - x /)')
    num1 = prompt('Enter the first number')
    num2 = prompt('Enter the second number')
    let ans
    switch (choice) {
        case '+':
            ans = add(num1,num2)
            alert(ans)
            break;

        case '-':
            ans = subtract(num1,num2)
            alert(ans)
            break;

        case 'x':
            ans = times(num1,num2)
            alert(ans)
            break;

        case '/':
            ans = divide(num1,num2)
            alert(ans)
            break;
    }
}

function to_do_program(){
    let tasks = []
    function addTask(task){
        tasks.splice(tasks.length - 1,0,task)
    }

    function removeTask(taskId){
        let taskIndex = taskId - 1
        tasks.splice(taskIndex,1)
    }

    function displayTasks(){
        console.log(tasks)
    }

    let choice = prompt('Enter your choice 1) Add task 2) Remove task 3) Display tasks')
    switch (choice) {
        case '1':
            let task = prompt('enter what task you want to enter')
            addTask(task)
            break;

        case '2':
            let taskId = prompt('enter the index of the task')
            removeTask(taskId)
        
        case '3':
            displayTasks()
    
        default:
            break;
    }
}