<template>
  <div class="goodbye">
    {{ color }}
  </div>
</template>

<script>

export default {
  name: 'GoodbyeWorld',
  props: {
    color: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
