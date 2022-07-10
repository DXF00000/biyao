<template>
  <div>
    <div class="newProduct">
      <p>每日新品</p>
      <b>2022-07-09</b>
    </div>

    <div
      v-for="item in data"
      :key="item"
      class="box1"
      @click="tiaozhuan(item.Id)"
    >
      <div class="words">
        <p class="mack">{{ json(item.labels) }}</p>

        <p class="title">
          {{ item.title }}
        </p>
        <p class="price">
          {{ fun(item.priceStr) }}
        </p>
        <p class="salePoint">
          {{ item.salePoint }}
        </p>
      </div>
      <div class="newProduct1">
        <img :src="item.imageUrl" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
    };
  },

  methods: {
    fun(i) {
      return "￥" + i * 1;
    },
    json(i) {
      return JSON.parse(i)[0].content;
    },
    tiaozhuan(goodId) {
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
      url: "/api/newlist",
      params: {
        page: 1,
        type_one: "",
      },
    }).then((res) => {
      next((vm) => {
        vm.data = res.data;
      });
    });
  },
};
</script>

<style scoped lang='scss'>
.newProduct {
  margin-bottom: 20px;
}
.newProduct p {
  margin: 10px 0 20px;
  color: #333;
  font-size: 24px;
  text-align: center;
}
.newProduct b {
  text-align: center;
  top: -18px;
  display: block;
  padding: 0 20px;
  font-weight: 400;
  font-size: 24px;
  color: gray;
  background: #f9f9f9;
}
.box1 {
  display: flex;
  margin-bottom: 20px;
}
.words {
  width: 430px;
  height: 335px;
  background: #fff;
  overflow: hidden;
}
.title {
  font-size: 18px;
  color: #4a4a4a;
  margin-top: 22px;
  line-height: 25px;
  text-align: center;
}
.price {
  height: 33px;
  line-height: 33px;
  margin-top: 15px;
  font-size: 22px;
  color: #f7a701;
  width: 260px;
  text-align: center;
  margin-left: 85px;
  padding-bottom: 15px;
  border-bottom: 2px solid #f2f2f2;
}
.salePoint {
  font-size: 16px;
  color: gray;
  margin-top: 28px;
  line-height: 22px;
  width: 288px;
  margin-left: 71px;
}
.newProduct1 img {
  float: left;
  width: 650px;
  height: 335px;
}

.mack {
  font-size: 10px;
  border-radius: 2px;
  color: #fb4c81;
  padding: 0 2px;
  height: 16px;
  line-height: 13px;
  display: inline-block;
  margin-left: 5px;
  border: 1px solid #fff;
  border-color: #fb4c81;
  box-sizing: border-box;
}
</style>