<template>
  <div>
    <HeaderSection />
    <h1 class="title">Hello User, welcome to Add Restaurant!</h1>
    <form class="add">
      <input type="text" name="name" v-model="restaurant.name" placeholder="Enter name">
      <input type="text" name="contact" v-model="restaurant.contact" placeholder="Enter contact">
      <input type="text" name="address" v-model="restaurant.address" placeholder="Enter address">
      <button type="button" v-on:click="addRestaurant()">Add new restaurant </button>
    </form>
  </div>
</template>

<script>
import HeaderSection from './HeaderSection'
import axios from 'axios';
export default{
  name: "AddRestaurant",
  components:{
    HeaderSection
  },
  data(){
    return {
      restaurant: {
        name: '',
        contact: '', 
        address: '',
      }
    }
  },

  methods:{
    addRestaurant(){
      console.log(this.restaurant);
      const result = axios.post('http://localhost:3000/restaurants', {
        name:this.restaurant.name,
        contact:this.restaurant.contact,
        address:this.restaurant.address,
      });
      if(result.status == 200){
      this.$router.push('/');
      }
    }
  },
  mounted(){
    let user = localStorage.getItem('user-info');
    if(!user){
      this.$router.push('/sign-up');
    }
  }
}
</script>

<style scoped>
.title {
  place-items: center;
  display: grid;
}
.add input {
  width: 300px;
  height: 30px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.add button {
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
</style>


