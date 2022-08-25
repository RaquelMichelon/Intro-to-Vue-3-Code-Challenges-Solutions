//Code Challenge L2: Creating the vue app
//Add a product description to the data object
//Display the description using an expression in a p tag


//heart of a vue app
//as argument of creatApp we pass an Options Object
const app = Vue.createApp({
    //data: function() {
    data() {
        return {
            product: 'Socks',
            // Solution
            description: 'A fancy pair of socks to warm your feet.' 
            // Solution
        }
    }
})