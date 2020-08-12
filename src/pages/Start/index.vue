<template lang="pug">
.container
  p.c-title Новый сайт
  .c-card
    b-field(label="Название сайта")
      b-input(v-model.trim="siteName")
    b-button(
      @click="CREATE_NEW_SITE(siteName)"
      type="is-success"
      :disabled="!siteName"
    ) Начать проектирование

  p.c-title История
  template(v-if="history.length")
    .c-card(
      v-for="site in history"
      :key="site.id"
    )
      b-icon(
        :icon="listIcons[randomInteger()]"
        size="is-large"
      )
      p.site-title {{ site.siteName }}
      p.site-time Сохранено в {{ site.saveTime | moment("HH:mm, dddd, Do MMMM YYYY") }}
      .buttons
        b-button(
          type="is-success"
          @click="OPEN_HISTORY_PROJECT(site.id)"
        ) Открыть
        b-button(
          type="is-danger"
          @click="DELETE_HISTORY_PROJECT(site.id)"
        ) Удалить
  .history-empty(v-else)
    figure.image.is-4by3
      img(
        src="@/assets/empty.svg"
        alt="img-empty"
      )
    p Сейчас у вас нет сохранённых сайтов
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { mapActions } from 'vuex'

export default {
  name: 'Start',
  data () {
    return {
      siteName: '',
      listIcons: [
        'semantic-web',
        'spider-web',
        'search-web',
        'web',
        'webhook',
        'webpack'
      ]
    }
  },
  computed: {
    ...mapFields('builder', [
      'history'
    ])
  },
  methods: {
    ...mapActions('builder', [
      'CREATE_NEW_SITE',
      'OPEN_HISTORY_PROJECT',
      'DELETE_HISTORY_PROJECT'
    ]),
    randomInteger () {
      const min = 0
      const max = 5

      const rand = min + Math.random() * (max - min)
      return Math.round(rand)
    }
  }
}
</script>

<style lang="sass" scoped>
div.container
  padding: 0 10px
p.c-title
  font-size: 20px
  font-weight: 500
  margin-bottom: 20px

div.c-card
  padding: 30px
  border: 1px solid $color-alt-opacity
  box-shadow: 5px 5px 10px 0 rgba(0,0,0,.1)
  border-radius: 6px
  min-width: 300px
  max-width: 400px
  width: 100%
  margin: 0 0 30px 0
  display: inline-block
  vertical-align: top
  @media (min-width: $display-bp-mobile)
    margin: 0 30px 30px 0
  span.icon
    display: block
    margin: -10px auto 30px
  button.button, .buttons
    margin-top: 10px
  p.site-title
    font-size: 18px
    font-weight: 500
  p.site-time
    color: $color-alt

div.history-empty
  max-width: 450px
  text-align: center
  margin: auto
  p
    margin: 20px 0
</style>
