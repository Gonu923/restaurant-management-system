<template>
    <div class="nav">
        <router-link to="/">Home </router-link>
        <router-link to="add-restaurant">Add Restaurant </router-link>
        <a v-on:click="logout()">Logout </a>
    </div>
</template>

<script>
export default{
    name: "HeaderSection",
    
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
    body{
        margin: 0;
    }
    .nav{
        background: #333;
        overflow: hidden;
        padding: 14px;

    }
    .nav a{
        color: azure;
        padding-top: 20px;
        float: left;
        padding: 14px 14px;
        font-size: 17px;
        text-decoration: none;
        margin-right: 5px;
    }
    .nav a:hover{
        background: gray;
        color: white;
    }
</style>
