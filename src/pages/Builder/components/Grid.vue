<template lang="pug">
#grid(:style="calcStyle")
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Grid',
  computed: {
    ...mapState('builder', {
      options: state => state.current.options
    }),
    calcStyle () {
      return {
        display: this.options.grid ? 'block' : 'none',
        width: this.options.width + 'px',
        height: this.options.height + 'px'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
#grid
  position: absolute
  left: 50%
  transform: translate(-50%, 0)
  top: 0
  min-width: 100%
  min-height: 100%
  height: 960px
  border: 1px solid $color-alt
  margin-bottom: 50px
  background-color: transparent
  background-image: linear-gradient(0deg, transparent 24%, rgba(0, 0, 0, .15) 25%, rgba(0, 0, 0, .15) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, .15) 75%, rgba(0, 0, 0, .15) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 0, 0, .15) 25%, rgba(0, 0, 0, .15) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, .15) 75%, rgba(0, 0, 0, .15) 76%, transparent 77%, transparent)
  background-size: 50px 50px
</style>
