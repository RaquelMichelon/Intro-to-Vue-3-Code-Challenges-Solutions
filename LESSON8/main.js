//Code Challenge L8: Computed Properties
//Add an onSale boolean to the data. Use a computed property to display the string:
// ’brand + ’ ’ product + ’ ’ is on sale’, whenever onSale is true.

const app = Vue.createApp({
    data() {
        return {
            cart:0,
            // solution
            onSale: true,
            // solution
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariand: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariand = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariand].image
        },
        inStock() {
            return this.variants[this.selectedVariand].quantity
        },
        //solution
        showOnSale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale.'
            }
            return ''
        }
        //solution
    }
})


