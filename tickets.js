    class Ticket {
        #holder;
        #price;
        constructor(inHolder, inPrice) {
            this.#holder = inHolder;
            this.setPrice(inPrice);
        }

        setPrice(p) {
            p = Number(p);
            if (Number.isFinite(p) && p >= 0 && p <= 10000) {
                this.#price = p;
            } else {
                console.warn('Invalid price:', p);
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

    class VipTicket extends Ticket {
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

let nameInputFld = document.getElementById('nameInputField')
let priceInputFld = document.getElementById('priceInputField')
let vipCheckbox = document.getElementById('vipCheckbox')
let submitBtn = document.getElementById('submitBtn')


function createTicket(){
    let holderName = nameInputFld.value.trim()
    console.log('holderName:', holderName)
    let price = Number(priceInputFld.value)
    if (!Number.isFinite(price)) {
        console.error('Please enter a valid numeric price');
        return;
    }
    let isVip = vipCheckbox.checked
    let ticketHolder = new VipTicket(holderName, price, isVip)
    console.log(ticketHolder)
}

submitBtn.addEventListener('click', createTicket)
