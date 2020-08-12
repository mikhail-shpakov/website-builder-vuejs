<template lang="pug">
.block-container
  img(
    v-if="attributes[0].fileBase64"
    :src="attributes[0].fileBase64"
    alt="user image"
  )

  b-field(
    :class="{ 'upload-hidden': attributes[0].fileBase64 }"
  )
    b-upload(
      @input="fileHandler($event)"
      accept="image/jpeg, image/jpg, image/png"
      drag-drop
      expanded
    )
      section.section
        .content.has-text-centered
          p
            b-icon(
              icon="image-search-outline"
              size="is-large"
            )
          p Перетащите изображение сюда или нажмите, чтобы выбрать на компьютере.
          p Допустимы форматы
            strong  JPEG/JPG, PNG.
          p.error(v-if="isError") При обработке изображения возникла ошибка, попробуйте выбрать другое изображение.

  delete-button(:id="id")
</template>

<script>
import saveToStore from './saveToStore.mixin'
import DeleteButton from './DeleteButton'

export default {
  name: 'ImgBlock',
  components: {
    DeleteButton
  },
  mixins: [
    saveToStore
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
          fileBase64: null
        }
      ],
      isError: false
    }
  },
  methods: {
    async fileHandler (input) {
      const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })

      const result = await toBase64(input).catch(e => Error(e))

      if (result instanceof Error) {
        this.isError = true
      } else {
        this.isError = false
        this.attributes[0].fileBase64 = result
      }

      this.SAVE_BLOCK_STATE({ id: this.id, attributes: this.attributes })
    }
  }
}
</script>

<style lang="sass" scoped>
div.block-container
  position: relative
  img
    margin: auto
    display: block
  .upload-hidden
    display: none
  &:hover .upload-hidden
    display: flex
    position: absolute
    top: 0
    width: 100%
    height: 100%
    background: rgba(245, 245, 245, 0.7)
    label.upload
      height: 100%

  p.error
    color: $danger
</style>
