<template>
  <h1>Job Details Page</h1>
  <p>{{job.title}}</p>
  <p>{{job.details}}</p>
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
data(){
  return{
    job:null
  }
},
 mounted(){
        fetch("http://localhost:3000/jobs/" + this.id)//Fetch is asynchronous and returns a promise
        .then((res)=>res.json())//then() method works when fetch finishes working ,it fires a callback function after fetch is done
        .then(data => this.job = data)
        .catch(err => console.log(err.message))
        }
}
</script>

<style>

</style>