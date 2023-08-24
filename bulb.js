Vue.createApp({
    data() {
      return {bulbStatus: true};
      
    },
    methods: {
      toggleBulb(){
        this.bulbStatus = !this.bulbStatus;
      }
    }
  
  }).mount('#bulb');