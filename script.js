
// const foods = {
//     plainBurger: {
//         name: "GAMBURGER",
//         price: 10000,
//         amount: 0,
//         kcall: 400,
//         get calcSum() {
//             return this.amount * this.price
//         },
//         get kcallSum() {
//             return this.amount * this.kcall
//         }
//     },

//     freshBurger: {
//         name: "GAMBURGER FRESH",
//         price: 20500,
//         amount: 0,
//         kcall: 600,
//         get calcSum() {
//             return this.amount * this.price
//         },
//         get kcallSum() {
//             return this.amount * this.kcall
//         }
//     },

//     freshCombo: {
//         name: "FRESH COMBO",
//         price: 31900,
//         amount: 0,
//         kcall: 800,
//         get calcSum() {
//             return this.amount * this.price
//         },
//         get kcallSum() {
//             return this.amount * this.kcall
//         }
//     }
// }

// console.log(foods["plainBurger"].amount);

// const btn = [...document.querySelectorAll('.main__product-btn')]

// for (let i = 0; i < btn.length; i++) {
//     // console.log(btn[i]);

//     btn[i].addEventListener('click', function () {
//         // alert('salom')
//         // console.log(this.closest(".main__product"));
//         // console.log(this.closest(".main__product").getAttribute('id'));
//         prepare(this)
//     })

// }

// function prepare(elBtn) {
//     // console.log(elBtn)

//     let parent = elBtn.closest(".main__product")
//     let parentId = parent.getAttribute('id')
//     // console.log(parentId);
//     let num = parent.querySelector(".main__product-num")
//     let price = parent.querySelector('.main__product-price span')
//     let kcall = parent.querySelector('.main__product-kcall span')

//     let sym = elBtn.getAttribute('data-symbol')
//     // console.log(sym);

//     let count = foods[parentId].amount

//     if (sym == "+") {
//         count++
//     } else if (sym = "-" && count > 0) {
//         count--
//     }

//     // ##################################################################################################

//     foods[parentId].amount = count
//     num.innerHtml = count
//     price.innerHtml = foods[parentId].calcSum
//     kcall.innerHtml = foods[parentId].kcallSum
// }

const foods = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kcall: 400,
        get calcSum () {
            return this.amount * this.price
        },
        get kcallSum () {
            return this.amount * this.kcall
        }


        

    },

    freshBurger: {
        name: "GAMBURGER",
        price: 20500,
        amount: 0,
        kcall: 400,
        get calcSum () {
            return this.amount * this.price
        },
        get kcallSum () {
            return this.amount * this.kcall
        }

    },

    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kcall: 800,
        get calcSum () {
            return this.amount * this.price
        },
        get kcallSum () {
            return this.amount * this.kcall
        }

    }
}

    console.log(foods["plainBurger"].amount)
    const btn = [...document.querySelectorAll('.main__product-btn')]

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click',function (){
            prepare(this)
            
        })
    }

        function prepare(elBtn) {
            let parent = elBtn.closest(".main__product")
            let parentId =parent.getAttribute('id')
            let num = parent.querySelector(".main__product-num")
            let price =parent.querySelector('.main__product-price span')
            let kcall =parent.querySelector('.main__product-kcall span')


            let sym  =elBtn.getAttribute('data-symbol')

            let count = foods[parentId].amount
            if (sym == "+") {
                count ++
            }else if (sym == "-" && count > 0){
                count --
            }

            foods[parentId].amount = count
            num.innerHTML =count

            price.innerHTML =foods[parentId].calcSum
            kcall.innerHTML =foods[parentId].kcallSum
        
        
    }




// Homework [1-100 LVL]

let headerTimerExtra = document.querySelector('.header__timer-extra')

function Timer() {
    headerTimerExtra.innerHTML++

    if (headerTimerExtra.innerHTML < 70) {
        setTimeout(() => {
            Timer()
        }, 50);
    } else if (headerTimerExtra.innerHTML >= 70 && headerTimerExtra.innerHTML < 90) {
        setTimeout(() => {
            Timer()
        }, 250);
    } else if (headerTimerExtra.innerHTML >= 90 && headerTimerExtra.innerHTML < 100) {
        setTimeout(() => {
            Timer()
        }, 1000);
    } else if (headerTimerExtra.innerHTML == 100) {
        setInterval(setTimeout)
    }


}
Timer()
