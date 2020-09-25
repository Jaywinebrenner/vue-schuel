<template>
  <div>
    

    <p>{{ worker.name  }}</p>
    <button @click="toggleDescription = ! toggleDescription">Details</button>
    <p v-if="toggleDescription">{{ worker.description }}</p>
  </div>
</template>

<script>
export default {
  name: "Accordian",
   props: ["worker"],
   data: function() {
     return {
       toggleDescription: false,
     };
   },
}
</script>

<style scoped>

</style>

