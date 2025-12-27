
document.getElementById("calculator").addEventListener("click", calculator);
document.getElementById("to_do_list").addEventListener("click", to_do_program);
document
    .getElementById("cost_calculator")
    .addEventListener("click", costCalculator);
document.getElementById("oop").addEventListener("click", oop);
document.getElementById("tickets").addEventListener("click", tickets);

function calculator() {
    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function times(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }

    choice = prompt("enter what operation you want to carry out(+ - x /)");
    num1 = prompt("Enter the first number");
    num2 = prompt("Enter the second number");
    let ans;
    switch (choice) {
        case "+":
            ans = add(num1, num2);
            alert(ans);
            break;

        case "-":
            ans = subtract(num1, num2);
            alert(ans);
            break;

        case "x":
            ans = times(num1, num2);
            alert(ans);
            break;

        case "/":
            ans = divide(num1, num2);
            alert(ans);
            break;
    }
}

function to_do_program() {
    let tasks = [];
    function addTask(task) {
        tasks.splice(tasks.length - 1, 0, task);
    }

    function removeTask(taskId) {
        let taskIndex = taskId - 1;
        tasks.splice(taskIndex, 1);
    }

    function displayTasks() {
        console.log(tasks);
    }

    let choice = prompt(
        "Enter your choice 1) Add task 2) Remove task 3) Display tasks"
    );
    switch (choice) {
        case "1":
            let task = prompt("enter what task you want to enter");
            addTask(task);
            break;

        case "2":
            let taskId = prompt("enter the index of the task");
            removeTask(taskId);

        case "3":
            displayTasks();

        default:
            break;
    }
}

function costCalculator() {
    let weight = prompt("Enter the weight");
    let volume = prompt("Enter the volume");
    let cost;
    function getCost(weight, volume) {
        if (volume < 0.3 && weight < 4) {
            cost = 5;
        }

        if (volume > weight) {
            cost = 20 * volume;
        } else {
            cost = 2 * weight;
        }

        console.log(cost);
    }

    getCost(weight, volume);
}
function oop() {
    class Player {
        #health;
        #mana;
        #level;

        constructor(inName) {
            this.name = inName;
            this.#health = 100;
            this.#mana = 60;
            this.#level = 0;
        }

        getHealth() {
            let health = this.#health;
            return health;
        }

        getMana() {
            let mana = this.#mana;
            return mana;
        }

        getLevel() {
            let level = this.#level;
            return level;
        }

        setHealth(inHealth) {
            this.#health = inHealth;
        }

        setMana(inMana) {
            this.#mana = inMana;
        }

        setLevel(inLevel) {
            this.#level = inLevel;
        }
    }

    class BankAccount {
        #balance;
        constructor(inName, inAccNum) {
            this.accNum = inAccNum;
            this.name = inName;
            this.#balance = 0;
        }

        deposit(amount) {
            this.#balance += amount;
        }

        withdraw(amount) {
            if (this.#balance > amount) {
                this.#balance -= amount;
            }
        }

        getBalance() {
            return this.#balance;
        }
    }

    let player1 = new Player("Jason");
    console.log(player1);
    let health = player1.getHealth();
    player1.setMana(500);
    let mana = player1.getMana();
    console.log(health);
    console.log(mana);
}

function bikeHire() {
    class BikeHire {
        #mins;
        constructor(inCostPence) {
            this.costPence = inCostPence;
        }

        getMins() {
            return this.#mins;
        }

        setMins(m) {
            if (m < 0) {
                this.#mins = 0;
            } else {
                this.#mins = m;
            }
        }

        applyDailyCap() {
            if (this.costPence > 1500) {
                this.costPence = 1500;
            }
        }
    }
}

function busPass() {
    class BusPass {
        #balancePence;
        constructor(inZone) {
            this.zone = inZone;
            this.#balancePence = 0;
        }

        getBalance() {
            return this.#balancePence;
        }

        setBalance(p) {
            if (0 <= p <= 10000) {
                this.#balancePence = p;
            }
        }

        tapFare() {
            if (this.#balancePence >= 200) {
                this.#balancePence -= 200;
            }
        }
    }
}

function charityItem() {
    class CharityItem {
        #name;
        #pricePence;
        constructor(inName) {
            this.#name = inName;
            this.#pricePence = 0;
        }

        getName() {
            return this.#name;
        }

        setBalance(p) {
            if (0 <= p <= 50000) {
                this.#pricePence = p;
            }
        }

        discount10() {
            this.#pricePence = Math.floor(this.#pricePence * 0.9);
        }
    }
}

function cafeOrder() {
    class DrinkOrder {
        #size;
        constructor(inDrink) {
            this.drink = inDrink;
        }

        getSize() {
            return this.#size;
        }

        setSize(s) {
            let sizes = ["small", "medium", "large"];
            if (sizes.includes(s)) {
                this.#size = s;
            } else {
                this.#size = "small";
            }
        }

        upgrade() {
            let sizes = ["small", "medium", "large"];
            let index = sizes.indexOf(this.#size);
            if (index != 2) {
                this.#size = sizes[index + 1];
            }
        }
    }
}

function tickets() {
    class Tickets {
        #holder;
        #price;
        constructor(inHolder, inPrice) {
            this.#holder = inHolder;
            this.setPrice(inPrice);
        }

        setPrice(p) {
            if (0 <= p <= 10000) {
                this.#price = p;
            }
        }

        getHolder() {
            return this.#holder;
        }

        applyBookingFee() {
            let newPrice = this.#price + 250;
            if (newPrice <= 10000) {
                this.#price = newPrice;
            }
        }
    }

    class VipTicket extends Tickets {
        #loungeAccess
        constructor(inHolder, inPrice, inLoungeAccess) {
            super(inHolder, inPrice);
            this.#loungeAccess = inLoungeAccess;
        }

        setLoungeAccess(b){
            this.#loungeAccess = b
        }
        getLoungeAccess(){
            return this.#loungeAccess
        }
        toggleLounge(){
            let access = this.#loungeAccess
            this.#loungeAccess = (!access)
        }
    }

    let name = prompt('Enter your name')
    let price = prompt('Enter your ticket price')

    let concert = new Tickets(name,price)
    console.log(concert)

    let vipConcert = new VipTicket(name,price,true)
    console.log(vipConcert)
    vipConcert.toggleLounge()
    console.log(vipConcert)
}
