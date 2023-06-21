<template>
<!-- Programmatic Navigation-->
  <nav>
    <router-link to="/">Home</router-link> |<!--"/" is the path structure  -->
    <router-link :to = "{name: 'about'}" >About</router-link> |
    <!-- :to,is the binding structure and call it by name "{name: 'Name given to router in index.js'}" -->
    <router-link :to = "{name: 'jobs'}" >Jobs</router-link> 
    <!-- <router-link :to = "{name:'jobDetails'}">JobDetails</router-link> -->
  </nav>

  <button @click= "redirect"> Redirect</button>
  <button @click= "back">Go Back</button>
  <button @click= "forward">Go Forward</button>

  <router-view/>
</template>

<script>
export default {
 methods: {
   redirect(){
     this.$router.push({name:'home'});
   },
   back(){
     this.$router.go(-1);//-1 goes one step back in history
     //$router moves to a given route
   },
   forward(){
      this.$router.go(1);//1 goes one step forward in history
   }
 }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: white;
  background:crimson;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}
 button{
    margin: 0 10px;
    padding: 10px;
    border: none;
    border-radius: 4px;
  }

</style>
