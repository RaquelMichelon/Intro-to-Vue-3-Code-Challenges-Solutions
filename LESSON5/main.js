//Code Challenge L5: List Rendering
//Add an array of sizes to the data object and
//use v-for to display them in a list

const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            description: 'A photo of green socks',
            url: 'https://www.google.com/',
            inStock: true,
            inventory: 8,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 1234, color: 'green'},
                {id: 2235, color: 'blue'}
            ],
            // solution
            sizes: ['XS', 'S', 'M', 'L', 'SL', 'XL'],
            // solution
        }
    }
})
