<template>
  <div class="app">
    <img class="logo" src="../assets/logo.png" />
    <h1 class="title">Sign Up</h1>
    <div class="register">
      <input type="text" v-model="name" placeholder="Enter name" required/>
      <input type="email" v-model="email" placeholder="Enter email" required/>
      <input type="password" v-model="password" placeholder="Enter password" required/>
      <button @click="signUp()">Sign Up</button>
      <p><router-link to="/login">Login</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      if (result.status === 201) {
        localStorage.setItem('user-info', JSON.stringify(result.data));
        this.$router.push('/');
      }
    },
  },
  mounted(){
    let user = localStorage.getItem('user-info');
    if(user){
      this.$router.push('/');
    }
  }
};
</script>
<style scoped>

.app {
  display: block;
  margin: 0 auto;
}
.logo {
  width: 100px;
  display: block;
  margin: auto;
  margin-top: 61px;
  margin-bottom: 30px;
}
.title {
  place-items: center;
  display: grid;
}
.register input {
  width: 300px;
  height: 30px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.register button {
  width: 320px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  background: skyblue;
  border: 1px solid skyblue;
  color: white;
  cursor: pointer;
}
router-link{
  display: block;
  margin: 0 auto;
}
</style>

