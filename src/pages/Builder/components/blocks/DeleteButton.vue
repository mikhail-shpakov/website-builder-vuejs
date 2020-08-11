<template lang="pug">
.delete-container
  b-tooltip(
    label="Удалить блок"
    size="is-small"
    position="is-left"
  )
    b-button(
      type="is-danger"
      icon-right="delete"
      size="medium"
      @click="DELETE_BLOCK(id)"
      outlined
    )
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'DeleteButton',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions('builder', [
      'DELETE_BLOCK'
    ])
  }
}
</script>

<style lang="sass" scoped>
div.delete-container
  display: none
  position: absolute
  right: 10px
  top: 10px
</style>
