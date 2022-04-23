<template>
  <div>
    <HeaderSection />
    <h1>Hello {{name}}, welcome to Homepage!</h1>
    <table border="1" class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in restaurant" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.contact}}</td>
          <td>{{item.address}}</td>
          <td><router-link :to="'/update-restaurant/'+item.id">Update</router-link>| <button v-on:click="deleteRestaurant(item.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HeaderSection from './HeaderSection';
import axios from 'axios';
export default{
  name: "HomePart",
  data(){
    return{
      name: '',
      restaurant: [],
    }
  },
  components:{
    HeaderSection
  },
  methods:{
    async deleteRestaurant(id){
      console.log(id);
      let result = await axios.delete('http://localhost:3000/restaurants'+id);
      if(result.status == 200){
        this.loadData();
      }
    },
    async loadData(){
      let user = localStorage.getItem('user-info');
      this.name = JSON.parse(user).name;
      if(!user){
        this.$router.push('/sign-up');
      }

      let result = await axios.get('http://localhost:3000/restaurants');
      this.restaurant = result.data;
    }
  },
  async mounted(){
    this.loadData();
  }
}
</script>

<style scoped>
 td{
   width: 160px;
   height: 40px;
 }
  
</style>


