import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('builder', {
      blocks: state => state.current.blocks
    })
  },
  methods: {
    ...mapActions('builder', [
      'SAVE_BLOCK_STATE'
    ])
  },
  mounted () {
    const blockDataInStore = this.blocks.find(e => e.id === this.id)

    if (blockDataInStore.attributes) {
      this.attributes = blockDataInStore.attributes.slice()
    }
  }
}
