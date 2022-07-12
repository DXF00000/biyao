<template>
  <div>
    <div class="box">
      <ul class="sa">
        <li v-for="item in arr" :key="item">{{ item }}</li>
      </ul>
      <ul class="xia">
        <li v-for="(item, index) in data" :key="index">
          <div class="a1"><input type="checkbox" /></div>
          <div class="a2">
            <img :src="item.imageUrl" alt="" />
          </div>
          <div class="a3">
            <p>{{ item.addressName }}</p>
          </div>
          <div class="a4">
            <p>￥{{ item.priceStr }}</p>
          </div>
          <div class="fp">
            <button @click="sub(item.Id)">-</button>
            <span>{{ item.count }}</span>
            <button @click="add(item.Id)">+</button>
          </div>
          <div class="a5"><button @click="del(item.Id)">删除</button></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
      arr: ["选择", "商品图片", "商品名称", "单价", "数量", "操作"],
    };
  },
  created() {
    this.get();
  },
  methods: {
    sub(goodId) {
      axios({
        url: "/api/remove",
        params: {
          goodId: goodId,
          token: sessionStorage.token,
        },
      }).then((res) => {
        this.get();
      });
    },
    add(goodId) {
      axios({
        url: "/api/add",
        params: {
          goodId: goodId,
          token: sessionStorage.token,
        },
      }).then((res) => {
        this.get();
      });
    },
    del(goodId) {
      axios({
        url: "/api/del",
        params: {
          token: sessionStorage.token,
          goodId,
        },
      }).then((res) => {
        this.get();
      });
    },
    get() {
      axios({
        url: "/api/shopList",
        params: {
          token: sessionStorage.token,
        },
      }).then((res) => {
        this.data = res.data;
      });
    },
  },
  // beforeRouteUpdate(to, from, next) {
  //   axios({
  //     url: "/api/shopList",
  //     params: {
  //       token: sessionStorage.token,
  //     },
  //   }).then((res) => {
  //     console.log(res.data);
  //     this.data = res.data;
  //   });
  //   next();
  // },
};
</script>

<style  scoped lang='scss'>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.box {
  width: 1080px;
}
.sa {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.sa li {
  width: 180px;
  height: 45px;
  text-align: center;
  background-color: rgb(29, 17, 134);
  color: aliceblue;
  line-height: 45px;
}

.xia li {
  display: flex;
  text-align: center;
  line-height: 100px;
  align-items: center;
}

// 按钮
.fp {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fp button {
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  background-color: black;
  color: aliceblue;
}
.a1,
.a2,
.a3,
.a4,
.fp,
.a5 {
  width: 180px;
  height: 100px;
  border: 1px solid #000;
}
.a2 {
  width: 180px;
  height: 100px;
}
.a2 > img {
  height: 100px;
}
</style>