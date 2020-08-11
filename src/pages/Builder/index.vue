<template lang="pug">
.container
  blocks
  .page-template
    draggable.dragArea.list-group(
      v-model="blocks"
      group="blocks"
    )
      component.dynamic-component(
        v-for="block in blocks"
        :key="block.id"
        :is="block.type + 'Block'"
        :id="block.id"
      )
  grid
</template>

<script>
import Blocks from './components/Blocks'
import Grid from './components/Grid'
import draggable from 'vuedraggable'
import { mapFields } from 'vuex-map-fields'
import headerBlock from './components/blocks/Header'
import imgBlock from './components/blocks/Img'
import textBlock from './components/blocks/Text'

export default {
  name: 'Builder',
  components: {
    Blocks,
    Grid,
    draggable,
    headerBlock,
    imgBlock,
    textBlock
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapFields('builder', [
      'current.blocks',
      'current.options'
    ])
  }
}
</script>

<style lang="sass" scoped>
div.container
  height: 960px // TODO
  .page-template
    position: absolute
    z-index: 5
    .list-group, &
      width: 100%
      height: 100%
  .dynamic-component
    box-sizing: border-box
    position: relative
    &:hover
      outline: 1px dashed $color-alt
      cursor: move
      ::v-deep div.delete-container
        display: block
</style>
