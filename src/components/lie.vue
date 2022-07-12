<template>
  <div class="box">
    <div v-for="(item, i) in res" :key="i" @click="tiaozhuan(item.Id)">
      <img :src="item.imageUrl" alt="" />
      <div class="wb">
        <p class="p2">{{ item.supplier }}</p>
        <h6 class="p3">{{ item.title }}</h6>
        <p class="p1">
          <span>￥</span><span>{{ item.priceStr }}</span>
          <span v-for="t in JSON.parse(item.labels)" :key="t">
            {{ t.content }}
          </span>
        </p>
        <p class="p4">
          <span>{{ item.evaluate }}</span> <span>条好评</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["res"],
  emits: ["dianji"],
  mounted() {},
  methods: {
    tiaozhuan(Id) {
      this.$router.push({
        path: "/page",
        query: {
          goodId: Id,
        },
      });
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
  width: 255px;
  box-sizing: border-box;
}
.box img {
  width: 255px;
  height: 255px;
  transition: transform 0.5s ease-in-out 0s;
}
.wb {
  padding: 0 0 0 20px;
  height: 103px;
  width: 530px;
}

.p4 {
  font-size: 12px;
  line-height: 17px;
  color: #bbb;
  margin-top: 8px;
}
.p1 {
  font-size: 14px;
  //   line-height: 25px;
  //   height: 25px;
  color: #4a4a4a;
  margin-top: 5px;
  display: flex;
  align-items: center;
}
.p1 span:nth-child(1) {
  color: #f7a701;
  font-size: 10px;
  padding-left: 2px;
}
.p1 span:nth-child(2) {
  font-size: 18px;
  color: #f7a701;
}
.p1 span:nth-child(3) {
  color: #ffffff;
  background: #ab7fd1;
  border-color: #ab7fd1;
}
.p1 span:nth-child(4) {
  color: #fb4c81;
  background: #ffffff;
  border-color: #fb4c81;
}
.p2 {
  font-size: 12px;
  //   line-height: 18px;
  color: #bf9e6b;
  margin-top: 5px;
}
p {
  margin: 0;
  padding: 0;
}
.p3 {
  font-size: 14px;
  color: #4a4a4a;
  margin-top: 10px;
  margin-bottom: 0;
  font-weight: 400;
  padding: 0;
}
</style>