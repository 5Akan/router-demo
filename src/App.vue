<template>
<!-- 404 page and redirects -->
  <nav>
    <router-link to="/">Home</router-link> |<!--"/" is the path structure  -->
    <router-link :to = "{name: 'about'}" >About</router-link> |
    <!-- :to,is the binding structure and call it by name "{name: 'Name given to router in index.js'}" -->
    <router-link :to = "{name: 'jobs'}" >Jobs</router-link> 
    <!-- <router-link :to = "{name:'jobDetails'}">JobDetails</router-link> -->
  </nav>
  <router-view/>
</template>

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

</style>
