<template>
  <div>
    <p class="bread">
      <span>
        <router-link to="/">首页</router-link>
      </span>
      <b>></b>
      <span>{{ onetext }}</span>
    </p>
    <div class="cateBread">
      <span> {{ onetext }} :</span>
      <ul>
        <li v-for="(item, i) in sangp" :key="i" @click="dianji(i, item)">
          {{ item.type_one }}
        </li>
      </ul>
    </div>
    <div>
      <!-- 渲染分类页面 -->
      <template v-for="item in sangp" :key="item">
        <h2 class="dd" ref="a3">{{ item.type_one }}</h2>

        <lieB :res="item.liebiao"></lieB>
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import lieB from "../components/lie.vue";
export default {
  data() {
    return {
      onetext: "",
      sangp: [],
      biaoti: "",
    };
  },
  components: {
    lieB,
  },
  created() {
    this.get();
  },
  methods: {
  
    get() {
      axios({
        url: "/api/getTypeTwo",
        params: {
          type_one: this.$route.query.x,
        },
      }).then((res) => {
        this.onetext = this.$route.query.x;
        res.data.forEach(async (item) => {
          await this.post(item);
        });
        this.onetext = this.$route.query.x;
      });
    },
    post(item) {
      axios({
        url: "/api/getTypeTwoList",
        params: {
          type_one: this.onetext,
          type_two: item,
        },
      }).then((res) => {
        this.sangp.push({
          type_one: item,
          liebiao: res.data,
        });
      });
    },
    dianji(i) {
      // 每一个页面
      let floors = this.$refs.a3[i];
      var floorTop = floors.offsetTop;
      // 设置页面滚出窗口的高度
      document.documentElement.scrollTop = floorTop;
    },
  },
};
</script>

<style  scoped lang='scss'>
.dd {
  color: #333;
  font-size: 24px;
  text-align: center;
}
a {
  text-decoration: none;
  color: #333;
}
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
  width: 1060px;
  height: 50px;
  margin: 20px auto 30px;
  padding-left: 20px;
  line-height: 50px;
  background: #fff;
  display: flex;
  align-items: center;
}
.cateBread span,
.cateBread li {
  display: inline-block;
  font-size: 16px;
  color: gray;
}
.cateBread li {
  margin-right: 30px;
  cursor: pointer;
}
</style>