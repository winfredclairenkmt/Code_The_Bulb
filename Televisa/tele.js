const app = Vue.createApp({
    data() {
      return {
        tvStatus: "Turn it on to see magic",
        isTvOn: false,
        powerBtn: "media/off.png",
        programCounter: 1,
        programs: [
          {
            id: "1",
            title: "Animationi",
            url: "media/pjt-Mavka.mp4",
          },
          {
            id: "2",
            title: "Songs",
            url: "media/pjt-halle.mp4",
          },
          {
            id: "3",
            title: "news",
            url: "media/pjt-news.mp4",
          },
        ],
      };
    },
  
    methods: {
      togglePower() {
        this.isTvOn = !this.isTvOn;
        this.tvStatus = this.isTvOn ? "Tv is on" : "Turn on to see magic";
        if (this.isTvOn) {
          this.powerBtn = "media/on.jpeg";
        } else {
          this.powerBtn = "media/off.png";
        }
      },
  
      forward() {
        this.programCounter++;
        if (this.programCounter > this.programs.length) {
          this.programCounter = 1;
        }
      },
  
      backward() {
        this.programCounter--;
        if (this.programCounter < this.programs[0].id) {
          this.programCounter = this.programs.length;
        }
      },
    },
  });
  
  app.mount("#tele");