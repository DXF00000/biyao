<template></template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      res: [],
    };
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
        console.log(res.data[0]);
      });
    });
  },
};
</script>

<style>
</style>