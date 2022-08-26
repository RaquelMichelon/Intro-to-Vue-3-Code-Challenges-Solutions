//Create a new component called 'product-details', which receives 
//the details through a prop called details

//solution
app.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <ul>
        <li v-for="detail in details">{{ detail }}</li>
    </ul>
    ` 
})
//solution