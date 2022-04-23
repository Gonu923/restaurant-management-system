<template>
  <div>
    <HeaderSection />
    <h1 class="title">Hello User, welcome to Update Restaurant!</h1>
    <form class="update">
      <input type="text" v-model="restaurant.name" name="name" placeholder="Enter name">
      <input type="text" v-model="restaurant.contact" name="contact" placeholder="Enter contact">
      <input type="text" v-model="restaurant.address" name="address" placeholder="Enter address">
      <button type="button" v-on:click="updateRestaurant">Update restaurant </button>
    </form>
  </div>
</template>

<script>
import HeaderSection from './HeaderSection';
import axios from 'axios';
export default{
  name: "UpdateRestaurant",
  components:{
    HeaderSection
  },
  data(){
    return {
      restaurant:{
        name: '',
        contact: '',
        address: '',
      }
    }
  },
  methods:{
    updateRestaurant(){
      console.log(this.restaurant);
      const result = axios.put('http://localhost:3000/restaurants/'+this.$route.params.id, {
        name:this.restaurant.name,
        contact:this.restaurant.contact,
        address:this.restaurant.address,
      });
      this.$router.push('/');
      console.log(result);
    }
  },
  async mounted(){
    let user = localStorage.getItem('user-info');
    if(!user){
      this.$router.push('/sign-up');
    }
    let result = await axios.get('http://localhost:3000/restaurants/'+this.$route.params.id);
    console.log(result)
    this.restaurant = result.data;
  }
}
</script>

<style scoped>
.title {
  place-items: center;
  display: grid;
}
.update input {
  width: 300px;
  height: 30px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.update button {
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




