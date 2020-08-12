<template lang="pug">
.block-container
  p
    span(
      v-show="!attributes[0].edit"
      @click="toggleEdit(attributes[0])"
      v-html="attributes[0].value || attributes[0].default"
    )
    textarea(
      :ref="attributes[0].field"
      v-model="attributes[0].value"
      @blur="toggleEdit(attributes[0])"
      v-show="attributes[0].edit"
    )

  delete-button(:id="id")
</template>

<script>
import toggleEdit from './toggleEdit.mixin'
import DeleteButton from './DeleteButton'

export default {
  name: 'TextBlock',
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
          field: 'text',
          value: null,
          default: 'Введите сюда свой текст',
          edit: false
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
div.block-container
  padding: 20px
  p span
    cursor: text
</style>
