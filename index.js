document.getElementById("calculator").addEventListener("click", calculator)
document.getElementById("to_do_list").addEventListener("click", to_do_program)
document.getElementById("cost_calculator").addEventListener("click", costCalculator)

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

function costCalculator(){
    let weight  = prompt('Enter the weight')
    let volume  = prompt('Enter the volume')
    let cost 
    function getCost(weight,volume){
        if(volume < 0.3 && weight < 4){
            cost = 5
        }

        if(volume > weight){
            cost = 20 * volume
        } else {
            cost = 2 * weight
        }
        
        console.log(cost)
    }

    getCost(weight,volume)

}