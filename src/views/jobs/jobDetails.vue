<template>
  <h1>Job Details Page</h1>

  <p>The job id is {{ id }}</p>
  <!-- '$route' contains information about the  current route including route parameters-->
</template>

<script>

export default {
    props:["id"],
//     data(){
//         return {
//     id: this.$route.params.id 
//$route is to get the path from the browser
//while $router is to move whatever to the location
// }
//     }

}
</script>

<style>

</style>