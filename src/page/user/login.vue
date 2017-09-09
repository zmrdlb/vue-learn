<template>
  <div>
    <div>
      <label>用户名：</label><input type="text" v-model="username" autocomplete="off" placeholder="请输入用户名" />
    </div>
    <div>
      <label>密码：</label><input type="password" v-model="password" autocomplete="off" placeholder="请输入密码" />
    </div>
    <div>
      <button @click="loginHandle">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return {
      username: '',
      password: ''
    }
  },
  mounted(){
    console.log('login mounted');
  },
  methods: {
    loginHandle(){
      sessionStorage.setItem('userinfo',JSON.stringify({
        username: this.username,
        password: this.password
      }));
      this.$router.replace(this.$route.query.redirect);
    }
  }
}
</script>
