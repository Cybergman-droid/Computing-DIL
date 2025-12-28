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

let nameInputFld = document.getElementById('nameInputField')
let priceInputFld = document.getElementById('priceInputField')
let vipCheckbox = document.getElementById('nameInputField')
let submitBtn = document.getElementById('submitBtn')

