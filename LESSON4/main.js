//Code Challenge L4: Conditional Rendering
//Add an onSale boolean to the data obj and
//use that to conditionally render a p tag that says "on Sale" whenever the onSale is true

const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            description: 'A photo of green socks',
            url: 'https://www.google.com/',
            inStock: true,
            inventory: 8,
            // solution
            onSale: true,
            // solution
        }
    }
})
