<template>
  <div class="box">
    <div v-for="(item, i) in res" :key="i">
      <img :src="item.imageUrl" alt="" />
      <div class="wb">
        <p class="p1">
          <span>{{ fun(item.priceStr) }}</span>
          <span v-for="t in JSON.parse(item.labels)" :key="t">
            {{ t.content }}
          </span>
        </p>
        <p class="p2">{{ item.salePoint }}</p>
        <h6 class="p3">{{ item.title }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["res"],
  methods: {
    fun(i) {
      return "￥" + i * 1;
    },
  },
};
</script>

<style  scoped lang='scss'>
.box {
  width: 1080px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.box > div {
  width: 530px;
  box-sizing: border-box;
}
.box img {
  width: 530px;
}
.wb {
  padding: 0 0 0 20px;
  height: 103px;
  width: 530px;
}
.wb span {
  font-size: 10px;
  border-radius: 2px;
  color: #fff;
  padding: 0 2px;
  height: 16px;
  line-height: 13px;
  display: inline-block;
  margin-left: 5px;
  border: 1px solid #fff;
  box-sizing: border-box;
}
.p1 {
  display: flex;
}
.p1 span:nth-child(1) {
  color: #f7a701;
  font-size: 10px;
  padding-left: 2px;
}
.p1 span:nth-child(2) {
  color: #ffffff;
  background: #ab7fd1;
  border-color: #ab7fd1;
}
.p1 span:nth-child(3) {
  color: #fb4c81;
  background: #ffffff;
  border-color: #fb4c81;
}
.p2 {
  font-size: 12px;
  line-height: 18px;
  color: #bf9e6b;
  margin-top: 6px;
}
.p3 {
  font-size: 14px;
  color: #4a4a4a;
  line-height: 20px;
  margin-top: 8px;
  font-weight: 400;
}
</style>