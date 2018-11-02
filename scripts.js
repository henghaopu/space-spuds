let vm = new Vue({
    el: '#root',
    data: {
        shoppingCartCounter: 0,
        mealCounters: { "Plutine": 0, "Astrotots": 0, "Meateor": 0, "Spudnik": 0, "Solo Mission": 0, "Rocket Fuel": 0 },
        mealsInCart: [],
        isCartClicked: false,
        totalPrice: 0,
        soloMission: {
            price: '(select a scale)',
            base: '',
            debris: [],
            blast: []
        },
        fuel: ''
    },
    methods: {
        addToCart() {
            var mealName = event.target.parentNode.children[0].innerHTML;
            var mealPrice = event.target.parentNode.children[1].innerHTML.substring(1);
            
            this.shoppingCartCounter++;
            this.mealCounters[mealName]++;

            if (this.mealCounters[mealName] === 1) {
                // item that added in the first time
                this.mealsInCart.push({
                    name: mealName, 
                    quantity: this.mealCounters[mealName],
                    price: mealPrice
                });
            } else {
                // change values of an object that inside an array
                for (var i in this.mealsInCart) {
                    if (this.mealsInCart[i].name === mealName) {
                        this.mealsInCart[i].quantity++;
                        this.mealsInCart[i].price = (Number(this.mealsInCart[i].price) + Number(mealPrice)).toFixed(2);
                        break;
                    }
                }
            }
            
            this.totalPrice = (Number(this.totalPrice) + Number(mealPrice)).toFixed(2);
        },
        showCart() {
            this.isCartClicked = true;
        },
        showMenu() {
            this.isCartClicked = false;
        }
    }
});

(function () {
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }
})();