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
        const canvas = document.getElementById('grid')
        const context = canvas.getContext('2d')

        context.fillRect(100, 100, 64, 64)
      }
    }
  },
  methods: {
    drawGrid () {
      const canvas = document.getElementById('grid')
      const context = canvas.getContext('2d')

      context.clearRect(0, 0, canvas.width, canvas.height)

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

      context.strokeStyle = '#BDC3C7'
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
  position: absolute
  border: 1px solid $color-alt
  margin-bottom: 50px
</style>
