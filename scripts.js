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

let vm = new Vue({
    el: '#root',
    data: {
        shoppingCartCounter: 0,
        mealsInCart: [],
        isCartClicked: false,
        totalPrice: 0
    },
    methods: {
        addToCart() {
            this.shoppingCartCounter++;
            var priceWith$ = event.target.parentNode.children[1].innerHTML;
            this.mealsInCart.push({
                Name: event.target.parentNode.children[0].innerHTML, 
                Price: priceWith$
            });
            console.log(this.mealsInCart);
            this.totalPrice = (Number(this.totalPrice) + Number(priceWith$.substring(1))).toFixed(2);
        },
        showCart() {
            this.isCartClicked = true;
        },
        showMenu() {
            this.isCartClicked = false;
        }
    }
});