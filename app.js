const app = Vue.createApp({
    data(){
        return{
            switchOnBulb : false
        }
    },

    methods: {
        toggleState(){
            this.switchOnBulb = !this.switchOnBulb
        },
    }

})

app.mount("#app")
