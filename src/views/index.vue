<template>
  <div class="box">
    <!-- 轮播图 -->
    <div class="lb">
      <div>
        <img
          src="http://static1.biyao.com/pc/www/img/new_master/banner2.png?v=biyao_ded5987"
          alt=""
        />
        <div class="bt">
          <p>
            <router-link to="/classify?x=咖啡">咖啡</router-link>
            <span>/</span>
            <router-link to="/classify?x=饮食">饮食</router-link>
            <span>/</span>
            <router-link to="/classify?x=正餐">正餐</router-link>
          </p>
          <p>
            <router-link to="/classify?x=男装">男装</router-link>
            <span>/</span>
            <router-link to="/classify?x=女装">女装</router-link>
            <span>/</span>
            <router-link to="/classify?x=鞋靴">鞋靴</router-link>
          </p>
          <p>
            <router-link to="/classify?x=眼睛">眼睛</router-link>
            <span>/</span>
            <router-link to="/classify?x=内衣配饰">内衣配饰</router-link>
            <span>/</span>
            <router-link to="/classify?x=运动">运动</router-link>
          </p>
          <p>
            <router-link to="/classify?x=美妆">美妆</router-link>
            <span>/</span>
            <router-link to="/classify?x=个护">个护</router-link>
            <span>/</span>
            <router-link to="/classify?x=母婴">母婴</router-link>
          </p>
          <p>
            <router-link to="/classify?x=生鲜直供">生鲜直供</router-link>
            <span>/</span>
            <router-link to="/classify?x=餐厨">餐厨</router-link>
            <span>/</span>
            <router-link to="/classify?x=电器">电器</router-link>
          </p>
          <p>
            <router-link to="/classify?x=箱包">箱包</router-link>
            <span>/</span>
            <router-link to="/classify?x=数码办公">数码办公</router-link>
            <span>/</span>
            <router-link to="/classify?x=汽配">汽配</router-link>
          </p>
        </div>

        <div class="tb">
          <dl>
            <dt></dt>
            <dd>大牌品质</dd>
          </dl>
          <dl>
            <dt></dt>
            <dd>工厂价格</dd>
          </dl>
          <dl>
            <dt></dt>
            <dd>分期支付</dd>
          </dl>
          <dl>
            <dt></dt>
            <dd>顺丰包邮</dd>
          </dl>
          <dl>
            <dt></dt>
            <dd>无忧退款</dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="title">
      <h3>热销排行</h3>
    </div>
    <!-- 列表组件 -->
    <div class="tx">
      <liebiao :res="res" @dianji="dianji"></liebiao>
    </div>
  </div>
</template>

<script>
import liebiao from "../components/liebiao.vue";
import axios from "axios";
export default {
  data() {
    return {
      res: [],
      word: "",
      num: 1,
      flag: true,
    };
  },
  methods: {
    fun() {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var wh = window.innerHeight;

      // 返会整个html的高度，随着网页内容的多少变化
      var bh = document.documentElement.scrollHeight;

      // 返回html页面滚动上去的高度值
      var st = document.documentElement.scrollTop;

      // window 高度  + html滚动高度==整个html页面的高度
      if (st + wh >= bh - 200) {
        if (this.flag) {
          this.flag = false;
          this.num++;
          this.get();
          setTimeout(() => {
            this.flag = true;
            console.log(this.flag);
          }, 2000);
        }
      }
    },

    get() {
      axios({
        url: "/api/hotlist",
        params: {
          page: this.num,
        },
      }).then((res) => {
        this.res = [...this.res, ...res.data];
      });
    },
    dianji(goodId) {
      this.$router.push({
        path: "/page",
        query: {
          goodId,
        },
      });
    },
  },
  created() {
    this.get();
  },
  mounted() {
    window.addEventListener("scroll", this.fun);
  },
  components: {
    liebiao,
  },
};
</script>

<style scoped lang='scss'>
.box {
  width: 1080px;
  margin: 0 auto;
}
.tx {
  display: flex;
  justify-content: space-between;
}
.bt {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 200px;
  height: 340px;
  padding: 10px 0;
  background: url(http://static2.biyao.com/pc/common/img/master/category-back.png?v=biyao_c27c88e);
}
.lb {
  position: relative;
}
.lb img {
  width: 1080px;
  height: 360px;
}

.lb span {
  margin: 0 5px;
  font-size: 16px;
  color: #fff;
}
.lb p {
  height: 34px;
  line-height: 34px;
  padding-left: 30px;
}
a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 14px;
}
.tb {
  width: 1020px;
  margin: 0 auto;
  display: flex;
  height: 40px;
  background: #fff;
  justify-content: space-between;
}
.tb dl:nth-child(1) dt {
  background-image: url(http://static4.biyao.com/pc/www/img/new_master/ptzc_character.png?v=biyao_e95bcd0);
}
.tb dl:nth-child(2) dt {
  background-image: url(http://static.biyao.com/pc/www/img/new_master/ptzc_price.png?v=biyao_6786c61);
}
.tb dl:nth-child(3) dt {
  background-image: url(http://static1.biyao.com/pc/www/img/new_master/ptzc_payment.png?v=biyao_75208ed);
}
.tb dl:nth-child(4) dt {
  background-image: url(http://static2.biyao.com/pc/www/img/new_master/ptzc_sf.png?v=biyao_4abee91);
}
.tb dl:nth-child(5) dt {
  background-image: url(http://static3.biyao.com/pc/www/img/new_master/ptzc_refund.png?v=biyao_54de047);
}
.tb dl dt {
  width: 32px;
  height: 40px;
  background-size: 24px 24px;
  background-position: center left;
  background-repeat: no-repeat;
}
dt,
dd {
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  display: block;
}
dd {
  font-size: 14px;
  line-height: 40px;
  color: #9687a4;
}
dl {
  display: flex;
  align-items: center;
}
.title {
  background: #fff;
  height: 80px;
  text-align: center;
}
.title h3 {
  font-size: 18px;
  line-height: 25px;
  margin-top: 20px;
  padding-bottom: 4px;
  border-bottom: 1px solid #bbb;
  display: inline-block;
}
</style>