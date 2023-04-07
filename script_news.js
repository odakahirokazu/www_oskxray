import { createApp } from "https://unpkg.com/vue@3.2.4/dist/vue.esm-browser.prod.js";

const app = createApp({
  data() {
    return {
      news_list: oskxray.news_list,
      home_news_capacity: 0
    };
  },
  mounted() {
    this.home_news_capacity = 10;
  }
});

app.mount("#app_news");
