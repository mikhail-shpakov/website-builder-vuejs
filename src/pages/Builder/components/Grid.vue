<template lang="pug">
canvas#grid(
  :style="{ display: options.grid ? 'block' : 'none' }"
  :width="options.width + 'px'"
  :height="options.height + 'px'"
)
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Grid',
  data () {
    return {}
  },
  computed: {
    ...mapState('builder', {
      options: state => state.current.options
    })
  },
  watch: {
    options: {
      deep: true,
      handler () {
      }
    }
  },
  methods: {
    drawGrid () {
      const canvas = document.getElementById('grid')
      const context = canvas.getContext('2d')

      const width = this.options.width
      const height = this.options.height

      for (let x = 0; x < width; x += 20) {
        context.moveTo(x, 0)
        context.lineTo(x, width)
      }

      for (let y = 0; y < height; y += 20) {
        context.moveTo(0, y)
        context.lineTo(height, y)
      }

      context.translate(0.5, 0.5)
      context.strokeStyle = 'rgba(189, 195, 199, 0.4)'
      context.stroke()
    }
  },
  mounted () {
    this.drawGrid()
  }
}
</script>

<style lang="sass" scoped>
#grid
  min-width: 100%
  min-height: 100%
  border: 1px solid $color-alt
  margin-bottom: 50px
</style>
