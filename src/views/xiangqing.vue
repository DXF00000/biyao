<template>
  <div>
    <div class="bread">
      <router-link to="/">首页</router-link>
      <span>></span>
      <span>{{ res.title }}</span>
    </div>
    <div class="box">
      <div></div>
      <div class="editor-picture left">
        <div class="p1">
          <img :src="img[num]" alt="" />

          <div class="p2">
            <span>7天无忧退货</span>
            <span>先行赔付</span>
            <span>超时赔偿</span>
            <span>顺丰包邮</span>
          </div>
        </div>
        <ul class="picture">
          <li v-for="(item, i) in img" :key="i" @click="qiehuan(i)">
            <img :src="item" alt="" />
          </li>
        </ul>
      </div>
      <!-- 右边 -->
      <div class="right editor-panel right">
        <div class="panel-top">
          <h1>{{ res.title }}</h1>
          <p>{{ res.salePoint }}</p>
          <span class="manufacturer">
            <i></i>
            {{ res.supplier }}
          </span>
        </div>

        <ul class="panel-main">
          <li class="panel-press">
            <span>售价：</span>
            <div>
              <span class="panel-maney"
                >￥
                <i>{{ res.priceStr * 1 }}</i>
              </span>
              <span class="panel-duration">
                生产周期:
                <span>{{ res.leadTime }}天</span>
              </span>
            </div>
          </li>
          <li class="specs-dimension">
            <span>规格：</span>
            <span v-for="item in gui" :key="item" class="ss1"
              >{{ item }}
              <em></em>
            </span>
          </li>
        </ul>
        <div>
          <div class="panel-bottom">微信扫码购买</div>
          <div class="panel-bottom" @click="jiaru">加入购物车</div>
        </div>
      </div>
    </div>
    <!-- 详情 -->
    <div class="section-view">
      <div class="view-retract">
        <p class="a1">
          <span></span> <i>{{ res.addressName }}</i>
        </p>
        <p class="a2">商品信息</p>
        <p class="a2">评论</p>
      </div>
      <div class="bottom">
        <div class="x-left">
          <div class="supplier-info">
            <img :src="res.addressLogo" alt="" />
            <div class="supplier-other">
              <p><span>商品质量:</span> <span class="s1">5.0</span></p>
              <p><span>服务态度:</span> <span class="s1">5.0</span></p>
            </div>
          </div>
          <!-- 如果想用 -->

          <div class="supplier-into" @click="zhuanfa">进店看看</div>
          <!-- 列表 -->
          <div class="supplier-recommen">
            <div
              v-for="(item, i) in Images"
              :key="i"
              @click="tiaozhuan(item.Id)"
              class="supplier-a"
            >
              <img :src="item.imageUrl" alt="" />
              <div class="wb">
                <h6 class="title">{{ item.title }}</h6>
                <p class="ps1">
                  <span>￥</span><span>{{ item.priceStr * 1 }}</span>
                </p>
                <p class="p4">
                  <span>{{ item.evaluate }}</span> <span>条好评</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="x-right">
          <div class="txq_item">
            <dl v-for="item in jiesao" :key="item">
              <dt>{{ item.title }}</dt>
              <dd>{{ item.text }}</dd>
            </dl>
          </div>
          <div class="txq_details">
            <p v-for="item in Image" :key="item">
              <img :src="item" alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      res: [],
      img: [],
      gui: [],
      jiesao: [],
      Image: [],
      Images: [],
      num: 0,
      id: "",
    };
  },

  mounted() {
    this.lie();
    this.guige();
    this.get();
  },

  methods: {
    jiaru() {
      axios({
        url: "/api/add",
        params: {
          goodId: this.id,
          token: sessionStorage.token,
        },
      }).then((res) => {
        console.log(res);
      });
    },
    zhuanfa() {
      this.$router.push({
        path: "/storeto",
        query: {
          supplier: this.res.supplier,
          log: this.res.addressLogo,
        },
      });
    },
    qiehuan(i) {
      this.num = i;
    },
    tiaozhuan(goodId) {
      this.$router.push({
        path: "/page",
        query: {
          goodId,
        },
      });
    },
    get() {
      axios({
        url: "/api/sameList",
        params: {
          supplier: this.res.supplier,
        },
      }).then((res) => {
        this.Images = res.data;
      });
    },
    guige() {
      this.gui = JSON.parse(this.res.sizeList);
      JSON.parse(this.res.description).forEach((item) => {
        this.jiesao.push({
          text: item.text.split("\n")[1].split("\n")[0],
          title: item.title.split("\n")[1].split("\n")[0],
        });
      });
      this.Image = JSON.parse(this.res.descriptionImage);
    },
    lie() {
      this.img = JSON.parse(this.res.imgs);
      this.img.splice(0, 1);
    },
  },
  beforeRouteUpdate(to, from, next) {
    axios({
      url: "/api/detail",
      params: {
        goodId: to.query.goodId,
      },
    }).then((res) => {
      this.res = res.data[0];
      this.lie();
    });
    next();
  },
  beforeRouteEnter(to, from, next) {
    axios({
      url: "/api/detail",
      params: {
        goodId: to.query.goodId,
      },
    }).then((res) => {
      next((vm) => {
        vm.res = res.data[0];
        vm.id = res.data[0].Id;
      });
    });
  },
};
</script>

<style  scoped lang='scss'>
.bread {
  width: 1080px;
  margin: 20px auto;
  color: #333;
  font-size: 12px;
  padding-left: 30px;
}
.ps1 {
  font-size: 14px;
  //   line-height: 25px;
  //   height: 25px;
  color: #4a4a4a;
  margin-top: 5px;
  display: flex;
  align-items: center;
}
.ps1 span:nth-child(1) {
  color: #f7a701;
  font-size: 10px;
  padding-left: 2px;
}
.ps1 span:nth-child(2) {
  font-size: 18px;
  color: #f7a701;
}
.p4 {
  color: #4a4a4a;
}

p {
  margin: 0;
  padding: 0;
}

// 详情
.title {
  font-size: 14px;
  line-height: 19px;
  color: #4a4a4a;
  margin-top: 5px;
}
.supplier-a {
  width: 200px;
  height: 313px;
}
.supplier-recommen {
  margin-top: 50px;
}
.supplier-recommen img {
  width: 200px;
}
.txq_details img {
  width: 800px;
}
.x-right {
  width: 800px;
  padding: 40px 0 0 38px;
}
.txq_item dl {
  line-height: 32px;
  border-bottom: 2px dotted #cecece;
  font-size: 16px;
  color: #333;
}
dl dt {
  display: inline-block;
  width: 160px;
  font-size: 16px;
  color: #666;
  vertical-align: top;
}
dl dd {
  display: inline-block;
  width: 630px;
  font-size: 16px;
  color: #333;
}
.txq_item {
  margin-bottom: 20px;
}
.bottom {
  display: flex;
}
.supplier-into {
  display: block;
  width: 200px;
  height: 40px;
  margin-top: 20px;
  line-height: 40px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  background: #f7b200;
  cursor: pointer;
}
.supplier-info {
  display: flex;
  align-items: center;
}
.supplier-other > p > span {
  font-size: 12px;
}
.s1 {
  color: #f7b200;
  margin-left: 10px;
}
.supplier-info > img {
  width: 76px;
  height: 76px;
}
.supplier-other {
  margin-left: 30px;
}
.x-left {
  width: 200px;
  border: 1px solid #ccc;
  border-top: 0;
  padding: 20px;
}
a {
  color: #666;
  text-decoration: none;
  font-size: 12px;
}
.view-retract {
  display: flex;
  width: 1080px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  align-items: center;
  background-color: #eeecef;
}
.a1 {
  width: 241px;
  height: 60px;
  border-right: 1px solid #ccc;
  text-align: center;
  color: #333;
  font-size: 16px;
  line-height: 60px;
}
.a2 {
  line-height: 60px;
  width: 181px;
  height: 60px;
  border-right: 1px solid #ccc;
  text-align: center;
  color: #333;
  font-size: 16px;
}
.section-view {
  position: relative;
  margin-top: 40px;
  padding-top: 60px;
}
.view-retract {
  position: sticky;
  top: 0;
}
.a1 span {
  display: inline-block;
  width: 20px;
  height: 60px;
  margin: 0 12px;
  background: url(http://static2.biyao.com/pc/common/img/master/supplier-icon.png?v=biyao_c57f462)
    center no-repeat;
  vertical-align: middle;
}

// 向上是详情
.panel-bottom {
  display: inline-block;
  width: 180px;
  height: 40px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  background: #523669;
  cursor: pointer;
  margin: 30px 20px;
  line-height: 40px;
}
.specs-dimension {
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
}
.specs-dimension .ss1 {
  height: 33px;
  line-height: 33px;
  padding: 0 23px;
  font-size: 14px;
  border: 1px solid #ccc;
  cursor: pointer;
  position: relative;
}
.specs-dimension span:nth-child(1) {
  display: inline-block;
  width: 65px;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  color: #666;
}
em {
  position: absolute;
  bottom: 0px;

  width: 22px;
  height: 22px;
  background: url(http://static1.biyao.com/pc/common/img/master/specs-active.png?v=biyao_99d793b)
    no-repeat;
}

.panel-press > div > span {
  display: inline-block;
  height: 35px;
  font-size: 14px;
}
.panel-press > span {
  color: #666;
}
.panel-duration {
  margin-left: 40px;
  line-height: 35px;
  vertical-align: 1px;
  color: #666;
}

.panel-maney i {
  display: inline-block;
  height: 35px;
  vertical-align: -3px;
  font-size: 28px;
}

.panel-maney {
  color: #f85453;
}
.panel-main > li {
  overflow: hidden;
  margin-top: 15px;
  display: flex;
  align-items: center;
}
.panel-top h1 {
  font-size: 20px;
  font-weight: 400;
  color: #333;
  margin-bottom: 14px;
  font-weight: 400px;
}
.panel-top p {
  font-size: 14px;
  color: #999;
  margin-bottom: 14px;
}
.manufacturer {
  position: relative;
  display: inline-block;
  height: 24px;
  padding: 0 10px;
  margin-bottom: 10px;
  border-radius: 2px;
  background-color: #f7f1e8;
  font-size: 12px;
  line-height: 24px;
  color: #bf9e6b;
  cursor: pointer;
}

.box {
  width: 1080px;
  display: flex;
  justify-content: space-between;
}
.left {
  width: 562px;
  height: 462px;
  display: flex;
  justify-content: space-between;
}
.right {
  width: 465px;
}
.panel-top {
  border-bottom: 1px solid rgb(170, 168, 168);
}
.p2 span {
  padding-left: 20px;
  color: #333;
  background: url(http://static3.biyao.com/pc/common/img/master/policy-icon.png?v=biyao_238b758)
    left center no-repeat;
  font-size: 12px;
  margin-right: 10px;
}

.manufacturer i {
  display: inline-block;
  width: 12px;
  height: 24px;
  vertical-align: text-top;
  background: url(http://static3.biyao.com/pc/www/img/product/icon_manufacturer_location_nomal12.png?v=biyao_c974916)
    no-repeat 0 1px;
}
i,
li {
  font-style: normal;
  list-style: none;
}
* {
  margin: 0;
  padding: 0;
  word-break: break-all;
}
.p1 img {
  height: 460px;
}
.picture {
  width: 80px;
  height: 462px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
.picture li {
  width: 80px;
  height: 80px;
}
.picture li img {
  max-width: 100%;
  max-height: 100%;
}
</style>