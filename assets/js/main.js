const { createApp } = Vue

  createApp({
    data() {
      return {
        email: []
      }
    },
    mounted(){
      
    },
    methods:{
      creaEmail(){
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
          this.email.push(response.data.response);
          console.log(this.email)
        })
      }
    }
  }).mount('#app')