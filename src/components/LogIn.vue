<template>
    <div class="app">
    <img class="logo" src="../assets/logo.png" />
    <h1 class="title">Login</h1>
    <div class="login">
      <input type="email" v-model="email" placeholder="Enter email" required/>
      <input type="password" v-model="password" placeholder="Enter password" required/>
      <button v-on:click="logIn()" type="button">Login</button>
      <p><router-link class="signupbtn" to="/sign-up">Sign Up</router-link></p>
    </div>
  </div> 
</template>
    
<script>
import axios from 'axios';
export default{
    name: "LogIn",
    data(){
      return {
        email: '',
        password: ''
      }
    },
    methods: {

        async logIn(){
          let result = await axios.get("http://localhost:3000/users?email={this.email}&password={password}");
          if (result.status == 200 && result.data.length>0 ) {
            localStorage.setItem('user-info', JSON.stringify(result.data[0]));
            this.$router.push('/');
          }        
        }

    },
    mounted(){
    let user = localStorage.getItem('user-info');
    if(user){
      this.$router.push('/');
    }
  }
}
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
.login input {
  width: 300px;
  height: 30px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.login button {
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
.signupbtn{
  width: 320px;
  height: 40px;
  margin: auto;
  display: block;
  cursor: pointer;
}
</style>


