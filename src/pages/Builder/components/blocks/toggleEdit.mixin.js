export default {
  methods: {
    toggleEdit (object) {
      object.edit = !object.edit

      if (object.edit) {
        this.$nextTick(() => {
          const getElement = this.$refs[object.field][0] || this.$refs[object.field]
          getElement.focus()
        })
      }
    }
  }
}
