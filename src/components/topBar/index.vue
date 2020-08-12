<template lang="pug">
.topbar
  .is-divider
  b-navbar.navbar-custom(fixed-top)
    template(slot="brand")
      b-navbar-item.item-logo(
        href="https://timeweb.com/"
        target="_blank"
        rel="noopener noreferrer"
      )
        img(
          src="@/assets/logo.svg"
          alt="img-logo"
        )

    template(slot="end")
      b-button(
        type="is-text"
        tag="router-link"
        to="Start"
      ) Конструктор
      b-button(
        type="is-text"
        tag="router-link"
        to="About"
      ) О приложении
      b-button(
        tag="a"
        type="is-text"
        href="https://github.com/mikhail-shpakov/website-builder-vuejs"
        target="_blank"
        rel="noopener noreferrer"
        icon-left="github"
        size="medium"
      )
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

<style lang="sass" scoped>
div.topbar
  @media (min-width: $display-bp-desktop)
    .navbar-custom
      width: $display-width
      margin: auto
      padding: 5px 0
      z-index: 9999
  .is-divider
    border-bottom: 1px solid $color-alt-opacity
    box-shadow: 5px 5px 10px 0 rgba(0,0,0,.1)
    width: 100%
    z-index: 0
    position: fixed
    height: 53px
    background: white
    top: 0
    @media (min-width: $display-bp-desktop)
      height: 63px
      z-index: 100
  .navbar-item img
    max-height: 30px
    @media (min-width: $display-bp-desktop)
      max-height: 35px
  a.button
    align-self: center
    margin: 0.5rem 0.75rem
    display: table
    width: auto
    @media (min-width: $display-bp-desktop)
      margin: 0 0 0 0.75rem
      display: inline-flex
    &.is-text
      text-decoration: none
</style>
