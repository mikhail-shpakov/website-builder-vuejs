<template lang="pug">
vue-draggable-resizable(
  :drag-handle="'.drag-handle'"
  :y="0"
  :x="-330"
  :enable-native-drag="true"
)
  #blocks-container
    .drag-handle
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
      draggable.dragArea.list-group(
        :list="listAvailableBlocks"
        :group="{ name: 'blocks', pull: 'clone', put: false }"
        @start="addUniqueId()"
      )
        .block-preview(
          v-for="block in listAvailableBlocks"
          :key="block.type"
        )
          p.block-preview-title {{ block.name }}
          figure.image.is-16by9
            img(
              :src="getImg(block.type)"
              :alt="block.type"
            )

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
      b-field(label="Ширина сайта")
        b-input(v-model.trim.number="width")
      p.input-subtitle(:class="{ error: width < 960 }") Минимальная ширина сайта 960px

      .is-divider
      b-field
        b-checkbox(v-model="grid") Показать сетку
      b-field(label="Высота сетки")
        b-input(
          :disabled="!grid"
          v-model.trim.number="height"
        )

      .is-divider
      b-field(label="Название проекта")
        b-input(
          v-model.trim="siteName"
        )

    .block-save
      b-button(
        @click="SAVE_PROJECT()"
        type="is-success"
      ) Сохранить проект
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import draggable from 'vuedraggable'
import { mapActions } from 'vuex'

export default {
  name: 'Blocks',
  components: {
    draggable
  },
  data () {
    return {
      isCollapsed: {
        blocks: false,
        options: false
      },
      listAvailableBlocks: [
        {
          id: null,
          type: 'header',
          name: 'Заголовок'
        },
        {
          id: null,
          type: 'text',
          name: 'Текст'
        },
        {
          id: null,
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
      'current.options.height',
      'current.siteName'
    ])
  },
  methods: {
    ...mapActions('builder', [
      'SAVE_PROJECT'
    ]),
    getImg (name) {
      return require(`@/assets/blocks-preview/${name}.svg`)
    },
    addUniqueId () {
      this.listAvailableBlocks = this.listAvailableBlocks.map(e => {
        e.id = Math.random().toString(36).substring(7)
        return Object.assign({}, e)
      })
    }
  }
}
</script>

<style lang="sass" scoped>
div.draggable
  position: absolute
  top: 0
  border: none
  z-index: 99 !important
  &::v-deep .handle
    background: none
    border: none

div#blocks-container
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

  .is-divider
    border-bottom: 1px solid $color-alt-opacity
    margin: 25px 0

  p.input-subtitle
    color: $color-alt
    font-size: 14px
    &.error
      color: $danger

  .block-preview
    margin-bottom: 25px
    cursor: move
    p.block-preview-title
      font-weight: 500
      padding: 5px

  .drag-handle
    margin: 0 -30px
    cursor: move
  p.c-subtitle
    color: $color-alt
    font-size: 14px
    margin: 0 30px 30px
    span.icon
      position: relative
      top: 4px
      margin-right: 5px
  p.c-title
    margin-bottom: 10px
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
