<template>
  <h2>购物车</h2>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.get();
    console.log(sessionStorage.token);
  },
  methods: {
    get() {
      axios({
        url: "/api/shopList",
        params: {
          token: sessionStorage.token,
        },
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
</style>