<template>
  <div v-for="job in jobs" :key = job.id>
      <h2>{{job.title}}</h2>
  </div>
</template>

<script>
export default {
    data(){
        return{
            jobs:[
                {title:'Web designer',id:'1',details:'lorem'},
                {title:'UX designer',id:'2',details:'lorem'},
                {title:'Vue designer',id:'3',details:'lorem'}
            ]
        }
    }
}
</script>

<style>

</style>