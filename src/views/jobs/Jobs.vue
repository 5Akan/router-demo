<template>
<h1>Jobs</h1>
  <div v-for="job in jobs" :key = "job.id" class="job">
      <router-link :to = "{name:'jobDetails', params:{ id:job.id }}">
         <h2>{{job.title}}</h2>
      </router-link>
      <!-- Using a v-for, we must use a key property unique for each job -->
  </div>
</template>

<script>
export default {
    data(){
        return{
            jobs:[]
        }
    },
    mounted(){
        fetch("http://localhost:3000/jobs")//Fetch is asynchronous and returns a promise
        .then((res)=>res.json())//then() method works when fetch finishes working ,it fires a callback function after fetch is done
        .then(data => this.jobs = data)
        .catch(err => console.log(err.message))
        }
}
</script>

<style>
    .job h2{
        background: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }
    .job h2:hover{
        background: #ddd;
    }
    .job a{
        text-decoration: none;
    }
</style>