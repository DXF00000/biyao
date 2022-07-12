<template>
  <div class="box">
    <div class="box1">
      <div class="Img">
        <img
          src="http://static2.biyao.com/pc/common/img/master/logo.png"
          alt=""
        />
      </div>
      <div class="sr">
        <input
          type="text"
          placeholder="请输入要搜索的商品"
          v-model="word"
          @keydown.enter="shousuo"
        />

        <span class="bj" @click="shousuo"></span>
        <ul class="rc">
          <li v-for="item in list" :key="item" @click="tiaozuan(item)">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <ul class="dh">
      <li><router-link to="/index">首页</router-link></li>
      <li><router-link to="/product">每日上新</router-link></li>
      <li>|</li>
      <li><router-link to="">了解必要</router-link></li>
      <li><router-link to="/shopping">购物车</router-link></li>
      <li>|</li>
      <li>
        <router-link to="Login">{{ $store.state.name || name }}</router-link>
        <!-- <router-link to="Login" v-show="!flag">{{ name }}</router-link> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      word: "",
      name: "登录",
      list: [
        "喷雾",
        "枕头",
        "乳液",
        "电动牙刷",
        "耳机",
        "洗发水",
        "粉扑",
        "丝袜",
        "牛仔裤",
        "面膜",
      ],
    };
  },

  methods: {
    shousuo() {
      this.$router.push({
        path: "/search",
        query: {
          word: this.word,
        },
      });
    },
    tiaozuan(item) {
      this.$router.push({
        path: "/search",
        query: {
          word: item,
        },
      });
    },
  },
};
</script>

<style   scoped lang='scss'>
a {
  text-decoration: none;
  cursor: pointer;
  outline: 0;
  color: #333;
}
.box {
  width: 1080px;
  height: 145px;
}
.box1 {
  height: 125px;
}
.dh {
  width: 600px;
  padding: 0;
  border: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  position: relative;
  top: -32px;
}

.Img img {
  width: 129px;
  height: 51px;
  margin-top: 25px;
  float: left;
}
.bj {
  display: inline-block;
  width: 40px;
  height: 38px;
  border: 1px solid #ccc;
  vertical-align: middle;
  border-left: none;
  background: url(http://static3.biyao.com/pc/common/img/master/search.png?v=biyao_2e92562)
    center center no-repeat;

  cursor: pointer;
}
.sr {
  width: 465px;
  height: 115px;
  float: right;
  margin-top: 25px;
}
input {
  width: 400px;
  height: 36px;
  padding-left: 10px;
  border: 1px solid #ccc;
  outline: none;
}
.rc {
  display: flex;
  padding: 0;
  width: 100%;
  font-size: 12px;
  margin: 0;
}
.rc li {
  list-style: none;
  height: 35px;
  padding: 0;
  margin-right: 10px;
  line-height: 35px;
  color: #666;
  cursor: pointer;
}
</style>