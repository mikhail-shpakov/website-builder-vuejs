<template lang="pug" functional>
.hero.is-medium
  .hero-body
    .about-img
    .has-text-centered
      p.about-paragraph by
        a(
          href="https://shpakov.dev"
          target="_blank"
          rel="noopener noreferrer"
        )
          strong  Mikhail Shpakov
      .about-container
        p.about-paragraph Тестовое задание для компании
          a(
            href="https://timeweb.com/ru"
            target="_blank"
            rel="noopener noreferrer"
          )  Timeweb
          | .
        p.about-paragraph Приложение реализовано с помощью
          a(
            href="https://vuejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          )  Vue.js
          |  и представляет собой простейший конструктор сайтов, демонстрируя также концепции
          a(
            href="https://ru.wikipedia.org/wiki/%D0%9E%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5"
            target="_blank"
            rel="noopener noreferrer"
          )  SPA
          |  и
          a(
            href="https://web.dev/progressive-web-apps/"
            target="_blank"
            rel="noopener noreferrer"
          )  PWA
          | .
        p.about-paragraph Полное описание доступно в
          a(
            href="https://github.com/mikhail-shpakov/website-builder-vuejs"
            target="_blank"
            rel="noopener noreferrer"
          )  репозитории приложения
          | .
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="sass" scoped>
div.hero.is-medium .hero-body
  div.about-img
    background-image: url("../../assets/about.svg")
    background-size: auto 100%
    background-repeat: no-repeat
    background-position: center
    min-height: 200px
    @media (min-width: $display-bp-mobile)
      min-height: 300px
  div.about-container
    max-width: 480px
    margin: auto
  p.about-paragraph
    margin: 10px 0
    a
      color: $color-success
      &:hover
        color: $color-main
      strong
        font-weight: 500
</style>
