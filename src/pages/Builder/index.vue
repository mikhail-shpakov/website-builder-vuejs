<template lang="pug">
.container
  template(v-if="mobileStub")
    .need-desktop
      figure.image.is-4by3
        img(
          src="@/assets/desktop.svg"
          alt="img-start"
        )
      p Редактирование сайта недоступно на мобильных устройствах
      b-button.is-success(
        tag="router-link"
        :to="{ path: '/' }"
      ) Вернуться на главную

  template(v-else)
    blocks
    .page-template(:style="calcStyle")
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
      .start-create(v-if="!blocks.length")
        figure.image.is-4by3
          img(
            src="@/assets/start.svg"
            alt="img-start"
          )
        p Перетяните из левого меню любой из блоков, чтобы начать создание своего сайта
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
      mobileStub: 0
    }
  },
  computed: {
    ...mapFields('builder', [
      'current.blocks',
      'current.options'
    ]),
    calcStyle () {
      return {
        width: this.options.width + 'px',
        height: this.options.height + 'px'
      }
    }
  },
  methods: {
    checkWindowWidth () {
      this.mobileStub = !window.matchMedia('(min-width: 960px)').matches
    }
  },
  created () {
    this.checkWindowWidth()
    // отслеживаем размер экрана, чтобы поставить заглушка на конструктор на мобильных устройствах
    window.addEventListener('resize', this.checkWindowWidth)
  },
  destroyed () {
    window.removeEventListener('resize', this.checkWindowWidth)
  }
}
</script>

<style lang="sass" scoped>
div.container
  .page-template
    min-width: 960px
    position: absolute
    top: 0
    z-index: 5
    left: 50%
    transform: translate(-50%, 0)
    .list-group, &
      width: 100%
      height: 100%
  .start-create
    @extend .page-template
    z-index: -9999
    position: absolute
    top: 100px
    left: 50%
    transform: translate(-50%, 0)
    max-width: 500px
    min-width: auto
    text-align: center
  .need-desktop
    @extend .start-create
    top: 50px
    max-width: 300px
    p
      margin-bottom: 15px

  .dynamic-component
    box-sizing: border-box
    position: relative
    &:hover
      outline: 1px dashed $color-alt
      cursor: move
      ::v-deep div.delete-container
        display: block
</style>
