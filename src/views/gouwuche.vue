<template>
  <div>
    <div class="box">
      <ul class="sa">
        <li v-for="item in arr" :key="item">{{ item }}</li>
      </ul>
      <ul class="xia">
        <li v-for="(item, index) in data" :key="index">
          <div class="a1">
            <input type="checkbox" v-model="xuanze" :value="item" />
          </div>
          <div class="a2">
            <img :src="item.imageUrl" alt="" />
          </div>
          <div class="a3">
            <p>{{ item.addressName }}</p>
          </div>
          <div class="a4">
            <p class="pp">￥{{ item.priceStr * item.count }}</p>
          </div>
          <div class="fp">
            <button @click="sub(item)">-</button>
            <span>{{ item.count }}</span>
            <button @click="add(item.Id)">+</button>
          </div>
          <div class="a5"><button @click="del(item)">删除</button></div>
        </li>
      </ul>
      <div class="quanx">
        <!-- 这个地方只能用chang 事件 -->
        <input type="checkbox" v-model="allflag" @change="qx" />全选
        <p class="pp">
          总价: <span>￥{{ jisuan }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  // 计算属性
  computed: {
    jisuan() {
      let money = 0;
      this.xuanze.forEach((item) => {
        money += item.priceStr * item.count;
      });
      return money;
    },
  },
  data() {
    return {
      data: [],
      arr: ["选择", "商品图片", "商品名称", "单价", "数量", "操作"],
      xuanze: [],
      coot: [],
      allflag: false,
    };
  },
  created() {
    this.get();
  },
  // 单选
  watch: {
    xuanze(newval, oldval) {
      // 如果购物车有长度，在两个数组对比 ，如果没有长度直接false
      this.allflag = newval.length ? newval.length == this.data.length : 0;
    },
    data: {
      handler(newval, oldvals) {
        // 如果购物车有长度，在两个数组对比 ，如果没有长度直接false
        this.allflag = newval.length ? newval.length == this.xuanze.length : 0;
      },
      deep: true,
    },
  },
  methods: {
    // 全选
    qx() {
      this.allflag ? (this.xuanze = [...this.data]) : (this.xuanze = []);
    },
    sub(item) {
      console.log(item.count);
      if (item.count <= 0) {
        return;
      } else {
        axios({
          url: "/api/remove",
          params: {
            goodId: item.Id,
            token: sessionStorage.token,
          },
        }).then((res) => {
          this.get();
        });
      }
    },
    add(goodId) {
      if (this.allflag) {
        axios({
          url: "/api/add",
          params: {
            goodId: goodId,
            token: sessionStorage.token,
          },
        }).then((res) => {
          this.get();
        });
      } else {
        axios({
          url: "/api/add",
          params: {
            goodId: goodId,
            token: sessionStorage.token,
          },
        }).then((res) => {
          this.get();
        });
      }
    },
    del(item) {
      axios({
        url: "/api/del",
        params: {
          token: sessionStorage.token,
          goodId: item.Id,
        },
      }).then((res) => {
        this.xuanze.forEach((it, j) => {
          if (it.title == item.title) {
            this.xuanze.splice(j, 1);
          }
        });
        this.get();
      });
    },
    // 请取数据
    get() {
      axios({
        url: "/api/shopList",
        params: {
          token: sessionStorage.token,
        },
      }).then((res) => {
        this.data = res.data;
        if (this.allflag) {
          this.xuanze = this.data;
        } else {
          this.xuanze.forEach((item, j) => {
            // 数组api  find
            let shopitem = this.data.find((it) => it.title === item.title);
            this.xuanze.splice(j, 1, shopitem);
          });
        }
      });
    },
  },
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
.fp span {
  margin: 0 15px;
  color: red;
}
.fp button {
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  background-color: black;
  color: aliceblue;
}
.pp {
  color: rgb(219, 136, 12);
}

.a3,
.a4,
.fp,
.a5 {
  width: 180px;
  height: 100px;
  border: 1px solid #000;
}
.a1 {
  width: 160px;
  height: 100px;
  border: 1px solid #000;
}

.a2 {
  width: 200px;
  height: 100px;
  border: 1px solid #000;
}
.a2 > img {
  height: 100px;
}
.a5 button {
  width: 100px;
  height: 30px;
  background-color: aqua;
  border: none;
}
</style>