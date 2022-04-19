const vue_app = Vue.createApp({
  created() {
    fetch("artists.json")
      .then((response) => response.json())
      .then((json) => {
        this.artists = json;
      });
  },
  data() {
    return {
      artists: [],
      title: "Top Favorite Artists ❤"
    };
  },
  methods: {
    posterClick(index) {
      if (
        this.artists[index].posterindex >=
        this.artists[index].posters.length - 1
      ) {
        this.artists[index].posterindex = 0;
      } else {
        this.artists[index].posterindex++;
      }
    },

    timeText(minutes) {
      return Math.trunc(minutes / 60) + " h " + (minutes % 60) + " m";
    }
  }
});

vue_app.mount("#vue_app");
