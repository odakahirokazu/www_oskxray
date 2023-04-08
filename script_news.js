import { createApp } from 'vue';

const app = createApp({
  data() {
    return {
      news_list: oskxray.news_list,
      home_news_capacity: 0
    };
  },
  mounted() {
    this.home_news_capacity = 8;
  }
});

app.mount("#app-news");
