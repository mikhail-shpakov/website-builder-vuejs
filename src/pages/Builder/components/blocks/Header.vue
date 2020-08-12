<template lang="pug">
.block-container
  template(v-for="each in attributes")
    p(:class="each.field")
      span(
        v-show="!each.edit"
        @click="toggleEdit(each)"
        v-html="each.value || each.default"
        )
      textarea(
        :ref="each.field"
        v-model="each.value"
        @blur="toggleEdit(each)"
        v-show="each.edit"
      )

  delete-button(:id="id")
</template>

<script>
import toggleEdit from './toggleEdit.mixin'
import DeleteButton from './DeleteButton'

export default {
  name: 'HeaderBlock',
  components: {
    DeleteButton
  },
  mixins: [
    toggleEdit
  ],
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      attributes: [
        {
          field: 'title',
          value: null,
          default: 'Заголовок',
          edit: false
        },
        {
          field: 'subtitle',
          value: null,
          default: 'Подзаголовок',
          edit: false
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
div.block-container
  text-align: center
  padding: 40px 20px 20px
  p
    &.title
      font-size: 20px
      font-weight: 500
    &.subtitle
      font-size: 16px
    span
      cursor: text
</style>
