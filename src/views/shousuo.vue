<template></template>

<script>
import axios from "axios";
export default {
  beforeRouteEnter(to, from, next) {
    //  打开loading
    axios({
      url: "/api/search",
      params: {
        word: to.query.word,
      },
    }).then((res) => {
      console.log(res);
      //   next((vm) => {});
    });
  },
};
</script>

<style>
</style>