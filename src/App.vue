<template lang="pug">
#app
  top-bar
  router-view.pages
</template>

<script>
import topBar from './components/topBar/index'

export default {
  components: {
    topBar
  }
}

</script>

<style lang="sass">
#app
  min-width: 320px
  .pages
    max-width: $display-width
    margin: 50px auto
</style>
