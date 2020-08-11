<template lang="pug">
.container
  grid

  blocks
</template>

<script>
import Blocks from './components/Blocks'
import Grid from './components/Grid'

export default {
  name: 'Builder',
  components: {
    Blocks,
    Grid
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
div.container
  height: 960px
</style>
