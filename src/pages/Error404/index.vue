<template lang="pug" functional>
.hero.is-medium
  .hero-body
    .columns
      .column.img-404
      .column.is-one-third
        p.title-404.has-text-dark 404
        p.subtitle-404.has-text-dark Страница не найдена
        .tip-404 Возможно, она была удалена, или ее адрес изменился
        b-button.is-success(
          tag="router-link"
          :to="{ path: '/' }"
        ) Вернуться на главную
</template>

<style lang="sass" scoped>
@media screen and (min-width: 769px)
  .hero.is-medium .hero-body
    padding-top: 14rem

div
  &.columns
    margin: 0 auto
    max-width: $display-width
    .title-404
      font-size: 4em
      @media (min-width: $display-bp-mobile)
        font-size: 6em
    .subtitle-404
      font-size: 1.3em
      @media (min-width: $display-bp-mobile)
        font-size: 1.5em
        margin: -5px 0 5px
    .tip-404
      margin: 0 auto 15px
      color: $color-alt
    .column
      margin: auto
      &.img-404
        background-size: auto 100%
        background-repeat: no-repeat
        background-position: center
        background-image: url("../../assets/404.svg")
        min-height: 220px
        @media (min-width: $display-bp-mobile)
          order: 1
          min-height: 350px
</style>
