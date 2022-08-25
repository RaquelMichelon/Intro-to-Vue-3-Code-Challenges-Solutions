//Code Challenge L3: Attribute Binding
//Add a url to the data object
//Bind the url to an anchor tag’s href attribute

const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            description: 'A photo of green socks',
            // solution
            url: 'https://www.google.com/'
            // solution
        }
    }
})
