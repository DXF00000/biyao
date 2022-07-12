<template>
  <div>
    <div class="main">
      <h4 class="titie">
        <div class="normal-title">
          <p @click="dianji(1)" :class="{ bd: flag }">登录</p>
          <p>.</p>
          <p @click="dianji(0)" :class="{ bd: !flag }">注册</p>
        </div>
      </h4>
      <!-- 登录 -->
      <div class="js-sign-in-container" v-show="flag">
        <div>
          <input type="text" placeholder="手机号或邮箱" v-model="userName" />
        </div>
        <div>
          <input type="password" placeholder="密码" v-model="password" />
        </div>
        <div class="xia">
          <p><input type="checkbox" /><span>记住我</span></p>
          <span>登录遇到问题？</span>
        </div>
        <button class="sign-in-button" @click="dl">登录</button>
      </div>
      <!-- 注册 -->
      <div class="js-sign-in-container" v-show="!flag">
        <div>
          <input type="text" placeholder="你的昵称" v-model="userName" />
        </div>
        <div>
          <input type="text" placeholder="手机" />
        </div>
        <div>
          <input type="password" placeholder="设置密码" v-model="password" />
        </div>
        <button class="sign-in-button" @click="zc">注册</button>
        <div class="xia">
          <p>
            <input type="checkbox" /><span>
              点击 “注册” 即表示您同意并愿意遵守简书</span
            >
          </p>
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
      flag: true,
      userName: "",
      password: "",
    };
  },
  methods: {
    dianji(i) {
      this.flag = i;
    },
    zc() {
      axios({
        url: "/api/register",
        params: {
          userName: this.userName,
          password: this.password,
        },
      }).then((res) => {
        if (res.data.code == 1) {
          alert("注册成功");
        } else {
          alert("账号已被占用");
        }
      });
    },
    dl() {
      axios({
        url: "/api/login",
        params: {
          userName: this.userName,
          password: this.password,
        },
      }).then((res) => {
        if (res.data.code == 1) {
          console.log(res.data);
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("name", this.userName);
          this.$store.commit("settoken",res.data.token)
          this.$store.commit("setname", this.userName)
          alert("登录成功");
          if (this.$route.query.to) {
            this.$router.push({
              path: this.$route.query.to,
            });
          }
        } else {
          alert("用户名或密码错误");
        }
      });
    },
  },
};
</script>

<style scoped lang='scss'>
.normal-title > p {
  margin: 10px;
  border-bottom: 3px solid transparent;
}
.bd {
  border-bottom: 3px solid rgb(113, 212, 19) !important;
}
.sign-in-button {
  margin-top: 20px;
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: #42c02e;
  cursor: pointer;
  outline: none;
  display: block;
  clear: both;
}
.main {
  width: 400px;
  margin: 0 auto;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8pxrgba (0, 0, 0, 0.1);
  vertical-align: middle;
}
.normal-title {
  display: flex;
  justify-content: center;
  padding: 10px;
  font-weight: 400;
  color: #969696;
  font-size: 18px;
}

.js-sign-in-container {
  width: 300px;
  margin: 0 auto;
}
.js-sign-in-container input {
  width: 100%;
  height: 50px;
  outline: none;
  padding-left: 30px;
  font-size: 16px;

  border-radius: 3%;
  border: 1px solid rgb(155, 155, 155);
}
.xia {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 15px;
}
.xia input {
  width: 15px;
  height: 15px;
  text-align: left;
}
.xia span {
  color: #969696;
  margin-left: 5px;
}
.xia p {
  display: flex;
  align-items: center;
}
</style>