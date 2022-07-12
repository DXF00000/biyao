<template>
  <div>
    <p class="bread">
      <span>
        <router-link to="/">首页</router-link>
      </span>
      <b>></b>
      <span>全部分类</span>
      <b>></b>
      <span>{{ sang }}</span>
    </p>
    <div class="cateBread">
      根据您搜索的"<span>{{ sang }}</span
      >",为你匹配到以下商品 :
    </div>
    <liLe :res="data" @dianji="dianji"></liLe>
  </div>
</template>

<script>
import axios from "axios";
import liLe from "../components/lie.vue";
export default {
  data() {
    return {
      data: [],
      sang: "",
    };
  },
  components: {
    liLe,
  },
  methods: {
    dianji(goodId) {
      this.$router.push({
        path: "/page",
        query: {
          goodId,
        },
      });
    },
  },

  beforeRouteEnter(to, from, next) {
    axios({
      url: "/api/search",
      params: {
        word: to.query.word,
      },
    }).then((res) => {
      next((vm) => {
        vm.data = res.data;
        vm.sang = to.query.word;
      });
    });
  },
  beforeRouteUpdate(to, from, next) {
    axios({
      url: "/api/search",
      params: {
        word: to.query.word,
      },
    }).then((res) => {
      this.data = res.data;
      this.sang = to.query.word;
    });
    next();
  },
};
</script>

<style  scoped lang='scss'>
.bread {
  width: 1080px;
  margin: 20px auto;
  color: #333;
  font-size: 12px;
}
.bread span {
  color: gray;
}
.bread b {
  margin: 0 8px 0 5px;
}
.cateBread {
  font-size: 12px;
  width: 1060px;
  height: 50px;
  margin: 20px auto 30px;
  padding-left: 20px;
  line-height: 50px;
  color: gray;
}
a {
  color: gray;
  text-decoration: none;
}
</style>