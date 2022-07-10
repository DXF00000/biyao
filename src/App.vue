<template>
  <div class="box">
    <!-- 导航组件 -->
    <div>
      <daohang></daohang>
    </div>
    <router-view></router-view>

    <!-- 底部 -->
    <div class="footer">
      <div class="footer-main clearfix">
        <ul class="footer-detail clearfix">
          <li>
            <div class="gzh"></div>
            <ul class="clearfix">
              <li>扫码关注必要微信公众号</li>
              <li>关注必要微信公众号</li>
              <li>实时了解必要平台政策</li>
              <li>人才招聘信息</li>
            </ul>
          </li>
          <li>
            <div class="app"></div>
            <ul class="clearfix">
              <li>扫码下载必要APP</li>
              <li>随时随地掌握上新信息</li>
              <li>浏览、购买更便捷</li>
              <li>体验更多黑科技</li>
              <li>与必要面对面沟通</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="footer-info">
        <p>
          <span>《用户服务协议》</span>
          <span>|</span>
          <span>《隐私政策》</span>
          <span>|</span>
          <span>知识产权</span>
          <span>|</span>
          <span>平台公示</span>
          <span>|</span>
          <span>规则中心</span>
        </p>
        <p>
          <span>公司地址:珠海市唐家湾镇哈工大路1号1栋E301-15</span>
          <span>公司电话:0756-3635580</span>
        </p>
        <p>
          必要商城提示您，产品“由某制造商出品”仅为陈述制造商既往生产经历，并不意味着相应产品与特定品牌产品相同或近似。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import daohang from "./components/daohang";
export default {
  components: {
    daohang,
  },
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  margin-top: 8px;
  background: #fff;
  box-shadow: 0 -2px 4px rgb(0 0 0 / 5%);
}
.footer > div {
  width: 1080px;
  margin: 0 auto;
  padding-top: 50px;
  text-align: center;
}

.clearfix:after {
  content: ".";
  display: block;
  clear: both;
  visibility: hidden;
  line-height: 0;
  height: 0;
}
.footer-info {
  margin-top: 60px;
  padding-bottom: 10px;
  font-size: 12px;
  color: gray;
}
.footer-detail > li div.gzh {
  background: rgba(0, 0, 0, 0)
    url(http://static3.biyao.com/pc/www/img/footer/public_code.png?v=biyao_4651e82)
    no-repeat scroll center center / 100% 100%;
}
.footer-detail > li div.app {
  background: rgba(0, 0, 0, 0)
    url(http://static4.biyao.com/pc/www/img/footer/app_code.png?v=biyao_975b48e)
    no-repeat scroll center center / 100% 100%;
}
.footer-detail > li ul li:first-child {
  color: #4a4a4a;
}
.footer-detail > li ul li {
  line-height: 24px;
  font-size: 14px;
  color: #bbb;
}
.footer-detail > li:first-child {
  border-right: 2px solid #bbb;
}
.footer-detail > li {
  display: inline-block;
  width: 378px;
  height: 120px;
}
li {
  list-style: none;
}

.footer-detail > li div {
  display: inline-block;
  float: left;
  width: 120px;
  height: 120px;
  margin-left: 50px;
}
.box {
  width: 1080px;
  margin: 0 auto;
}
</style>
