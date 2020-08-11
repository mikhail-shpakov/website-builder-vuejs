<template lang="pug">
vue-draggable-resizable(
  :x="-330"
)
  #blocks-container
    p.c-subtitle
      b-icon(icon="drag-horizontal")
      | Положение этого блока можно изменить, перетащив его
    p.c-title
      b-tooltip(
        :label="!isCollapsed.blocks ? 'Свернуть' : 'Развернуть'"
        size="is-small"
        position="is-right"
      )
        b-button(
          type="is-text"
          :icon-right="isCollapsed.blocks ? 'chevron-down' : 'chevron-up'"
          size="medium"
          @click="isCollapsed.blocks = !isCollapsed.blocks"
        ) Блоки
    b-collapse(:open="!isCollapsed.blocks")
      .block-preview(
        v-for="block in listAvailableBlocks"
        :key="block.type"
      )
        figure.image.is-3by2
          img(
            :src="getImg(block.type)"
            :alt="block.type"
          )
        p.block-preview-title {{ block.name }}
    p.c-title
      b-tooltip(
        :label="!isCollapsed.options ? 'Свернуть' : 'Развернуть'"
        size="is-small"
        position="is-right"
      )
        b-button(
          type="is-text"
          :icon-right="isCollapsed.options ? 'chevron-down' : 'chevron-up'"
          size="medium"
          @click="isCollapsed.options = !isCollapsed.options"
        ) Опции
    b-collapse(:open="!isCollapsed.options")
      b-field
        b-checkbox(v-model="grid") Показать сетку
      b-field(label="Ширина сайта")
        b-input(v-model.trim.number="width")
      b-field(label="Высота сайта")
        b-input(v-model.trim.number="height")
    .block-save
      b-button(
      type="is-primary"
      ) Сохранить проект
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'Blocks',
  data () {
    return {
      isCollapsed: {
        blocks: false,
        options: false
      },
      listAvailableBlocks: [
        {
          type: 'header',
          name: 'Заголовок'
        },
        {
          type: 'text',
          name: 'Текст'
        },
        {
          type: 'img',
          name: 'Изображение'
        }
      ]
    }
  },
  computed: {
    ...mapFields('builder', [
      'current.options.grid',
      'current.options.width',
      'current.options.height'
    ])
  },
  methods: {
    getImg (name) {
      return require(`@/assets/blocks-preview/${name}.svg`)
    }
  },
  async mounted () {
  }
}
</script>

<style lang="sass" scoped>
div.draggable
  border: none
  &::v-deep .handle
    background: none
    border: none

div#blocks-container
  position: absolute
  top: 0
  left: 0
  border: 1px solid $color-alt-opacity
  box-shadow: 5px 5px 10px 0 rgba(0,0,0,.1)
  padding: 15px 30px
  border-radius: 6px
  min-width: 310px
  background: white
  max-height: 750px
  overflow-y: scroll
  &::-webkit-scrollbar-track
    display: none
  &::-webkit-scrollbar
    width: 7px
    background-color: whitesmoke
  &::-webkit-scrollbar-thumb
    border-radius: 10px
    background-color: rgba(85, 85, 85, 0.25)

  .block-preview
    margin-bottom: 25px
    p.block-preview-title
      font-weight: 500
      text-align: center
      padding: 5px

  p.c-subtitle
    color: $color-alt
    font-size: 14px
    margin-bottom: 25px
    span.icon
      position: relative
      top: 4px
      margin-right: 5px
  p.c-title
    margin-bottom: 20px
    line-height: 30px
    span.b-tooltip
      line-height: 1.7
      button.button
        text-decoration: none
        font-size: 18px
        font-weight: 500
        span.icon
          position: relative
          top: 4px

  .block-save
    margin: 40px 0 15px

  div.field
    margin: 10px 0
</style>
