<template>

<select name="dropdown" v-model="selectedOption" id="dropdown" @change="optionChanged">
  <option value="null" disabled>Please Select an Option</option>
  <option value="0">Option One</option>
  <option value="1">Option Two</option>
  <option value="2">Option Three</option>
</select>
  
</template>

<script>
export default {
  name: "Dropdown",
  data: function() {
      return {
        selectedOption: null,
        }
    },
  methods: {
    optionChanged: function(value) {
      this.$emit('update:option', this.selectedOption)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>