<template>
  <div class="box">
    <!-- 导航组件 -->
    <div>
      <daohang></daohang>
    </div>
    <!-- 轮播图 -->
    <div class="lb">
      <div>
        <img
          src="http://static1.biyao.com/pc/www/img/new_master/banner2.png?v=biyao_ded5987"
          alt=""
        />
        <div class="bt">
          <p>
            <router-link to="">咖啡</router-link>
            <span>/</span>
            <router-link to="">饮食</router-link>
            <span>/</span>
            <router-link to="">正餐</router-link>
          </p>
          <p>
            <router-link to="">男装</router-link>
            <span>/</span>
            <router-link to="">女装</router-link>
            <span>/</span>
            <router-link to="">鞋靴</router-link>
          </p>
          <p>
            <router-link to="">眼睛</router-link>
            <span>/</span>
            <router-link to="">内衣配饰</router-link>
            <span>/</span>
            <router-link to="">运动</router-link>
          </p>
          <p>
            <router-link to="">美妆</router-link>
            <span>/</span>
            <router-link to="">个护</router-link>
            <span>/</span>
            <router-link to="">母婴</router-link>
          </p>
          <p>
            <router-link to="">生鲜直供</router-link>
            <span>/</span>
            <router-link to="">餐厨</router-link>
            <span>/</span>
            <router-link to="">电器</router-link>
          </p>
          <p>
            <router-link to="">箱包</router-link>
            <span>/</span>
            <router-link to="">数码办公</router-link>
            <span>/</span>
            <router-link to="">汽配</router-link>
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
      <liebiao :res="res"></liebiao>
    </div>
  </div>
</template>

<script>
import daohang from "../components/daohang";
import liebiao from "../components/liebiao.vue";
import axios from "axios";
export default {
  data() {
    return {
      res: [],
    };
  },
  methods: {
    get() {
      axios({
        url: "/api/hotlist",
        params: {
          page: 1,
        },
      }).then((res) => {
        console.log(res.data);
        this.res = res.data;
      });
    },
  },
  created() {
    this.get();
  },
  components: {
    daohang,
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