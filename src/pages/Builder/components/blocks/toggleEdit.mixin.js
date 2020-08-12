import saveToStore from './saveToStore.mixin'

export default {
  mixins: [
    saveToStore
  ],
  methods: {
    toggleEdit (object) {
      object.edit = !object.edit

      if (object.edit) {
        this.$nextTick(() => {
          const getElement = this.$refs[object.field][0] || this.$refs[object.field]
          getElement.focus()
        })
      } else {
        this.SAVE_BLOCK_STATE({ id: this.id, attributes: this.attributes })
      }
    }
  }
}
