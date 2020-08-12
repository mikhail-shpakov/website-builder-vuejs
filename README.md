# Конструктор сайтов на Vue.js
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Build Status](https://travis-ci.com/mikhail-shpakov/fetch-github-profiles-with-vue-rx.svg?branch=master)](https://travis-ci.com/mikhail-shpakov/fetch-github-profiles-with-vue-rx)
[![Maintainability](https://api.codeclimate.com/v1/badges/92255094c568fe9f1e23/maintainability)](https://codeclimate.com/github/mikhail-shpakov/website-builder-vuejs/maintainability)
[![DeepScan grade](https://deepscan.io/api/teams/8555/projects/13367/branches/222664/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=8555&pid=13367&bid=222664)

:ru: by Mikhail Shpakov

Тестовое задание для компании [Timeweb](https://timeweb.com/ru).  
Приложение реализовано с помощью [Vue.js](https://vuejs.org/) 
и представляет собой простейший конструктор сайтов, демонстрируя также концепции
[SPA](https://ru.wikipedia.org/wiki/%D0%9E%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5)
и [PWA](https://web.dev/progressive-web-apps/) приложения.

:tada: [Демо](https://mikhail-shpakov.github.io/website-builder-vuejs/)

:hammer: [Используемые технологии и инструменты](#tools)

:triangular_ruler: [Краткое описание архитектуры](#architecture)

:wrench: [Локальный запуск проекта](#dev)

:rocket: [Деплой на Github Pages](#deploy)

## <a name="tools"></a>Используемые технологии и инструменты

- [Vue](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vuex](https://vuex.vuejs.org/) +
[vuex-map-fields](https://github.com/maoberlehner/vuex-map-fields) +
[vuex-persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate) +
[secure-ls](https://github.com/softvar/secure-ls)
- [Pug](https://pugjs.org/api/getting-started.html)
- [Sass](https://sass-lang.com/)
- [Buefy](https://buefy.org/)
- [Vue.Draggable](https://github.com/SortableJS/Vue.Draggable)
- [VueDraggableResizable 2](https://github.com/mauricius/vue-draggable-resizable)
- [vue-moment](https://github.com/brockpetrie/vue-moment)
- [Vue-cli](https://cli.vuejs.org/)
([Webpack](https://webpack.js.org/),
[Babel](https://babeljs.io/),
[Postcss](https://postcss.org/))
- [Jest](https://jestjs.io/) + [vue-test-utils](https://vue-test-utils.vuejs.org/)
- [Eslint](https://eslint.org/) ([standard style](https://standardjs.com/))
- [Иконки mdi](https://materialdesignicons.com/)
- Графика [Undraw](https://undraw.co/)
- [Github Pages](https://pages.github.com/)
- [Travis CI](https://travis-ci.org/)

## <a name="triangular_ruler"></a>Краткое описание архитектуры

## <a name="dev"></a>Локальный запуск проекта

1. **Загрузка проекта на локальную машину**

    ```
    git clone https://github.com/mikhail-shpakov/website-builder-vuejs.git
    ```

2. **Установка зависимостей**

    ```
    npm ci
    ```

    Использование `npm ci` вместо `npm i` позволит гарантировать корректные версии устанавливаемых `npm` пакетов,
    так как они будут взяты из `package-lock.json`.  

3. **Запуск сервера для разработки**

    В качестве сервера для разработки используется
    [Webpack Dev Server](https://github.com/webpack/webpack-dev-server).

    Для его запуска выполните из корневой директории проекта:

    ```
    npm run serve
   ```

    После этого приложение будет доступно по адресу `localhost:8080`.

    Во время разработки изменения в файлах будут отслеживаться автоматически,
    при этом будет вызываться линтер и сервер будет перезапускаться.

    Также доступны следующие команды:

    ```
    npm run build // сборка приложения Vue для развёртывания на production
    npm run lint // ручной запуск линтера
    ```

## <a name="deploy"></a>Деплой на Github Pages

Для публикации приложения на [Github Pages](https://pages.github.com/)
с помощью [Travis CI](https://travis-ci.org/), требуется:
1. Зарегистрировать аккаунт на [Travis CI](https://travis-ci.org/).
2. Получить персональный токен доступ на Github ([инструкция](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)).
3. Создать в корне проекта файл с описанием опций публикации с названием `.travis.yml`.
Описание опций можно найти [здесь](https://docs.travis-ci.com/user/deployment/pages/).

После этого, при каждом коммите в отслеживаемую ветку
(указывается в `.travis.yml`) при условии успешного прохождения CI
(эта стадия может отсутствовать, как, например, в этом проекте)
проект будет автоматически опубликован на [Github Pages](https://pages.github.com/)
и по умолчанию будет доступен по адресу `http(s)://<user>.github.io/<repository>`.
