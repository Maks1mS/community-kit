## 📖 Подробный обзор

Компонент для анимации одного или нескольких элементов во время прокрутки страницы.

## ⚙️ Использование

1.  Добавьте компонент на страницу
2.  Укажите начальное и конечное состояние анимации
3.  Посмотрите как он работает в режиме превью

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств    | По умолчанию |           Пример           |
| :------------------ | :----------: | :------------------------: |
| Функция сглаживания |   `linear`   |           `ease`           |
| Начало              |     `0`      |            `50`            |
| Конец               |    `100`     |            `90`            |
|                     |  Transform   |                            |
| Включить            |    `OFF`     |            `ON`            |
| Начало              |     `-`      |     `rotate(0.5turn)`      |
| Конец               |     `-`      |      `scale(2, 0.5)`       |
|                     |   Opacity    |                            |
| Включить            |    `OFF`     |            `ON`            |
| Начало              |     `-`      |           `0.5`            |
| Конец               |     `-`      |            `1`             |
|                     |    Color     |                            |
| Включить            |    `OFF`     |            `ON`            |
| Начало              |     `-`      |           `#fff`           |
| Конец               |     `-`      |           `#000`           |
|                     |    Filter    |                            |
| Включить            |    `OFF`     |            `ON`            |
| Начало              |     `-`      |        `blur(5px)`         |
| Конец               |     `-`      |     `brightness(0.4)`      |
|                     |  Background  |                            |
| Включить            |   `Enable`   |            `ON`            |
| Начало              |     `-`      |          `green`           |
| Конец               |     `-`      |           `red`            |
|                     | Border Color |                            |
| Включить            |    `OFF`     |            `ON`            |
| Начало              |     `-`      | `rgba(117, 190, 218, 0.0)` |
| Конец               |     `-`      | `hsla(50, 33%, 25%, 0.75)` |
|                     |  Box Shadow  |                            |
| Включить            |    `OFF`     |            `ON`            |
| Начало              |     `-`      |     `10px 5px 5px red`     |
| Конец               |     `-`      |     `60px -16px teal`      |

### В коде (для разработчиков)

| Prop Name           |   Name in the code   |   Type   | Default  |          Example           |
| :------------------ | :------------------: | :------: | :------: | :------------------------: |
| Функция сглаживания |       `easing`       | `string` | `linear` |           `ease`           |
| Начало              |       `start`        | `string` |   `0`    |            `50`            |
| Конец               |        `end`         | `string` |  `100`   |            `90`            |
|                     |      Transform       |          |          |                            |
| Включить            |  `transformEnabled`  |  `enum`  |  `off`   |            `on`            |
| Начало              |   `transformStart`   | `string` |   `-`    |     `rotate(0.5turn)`      |
| Конец               |    `transformEnd`    | `string` |   `-`    |      `scale(2, 0.5)`       |
|                     |       Opacity        |          |          |                            |
| Включить            |   `opacityEnabled`   |  `enum`  |  `off`   |            `on`            |
| Начало              |    `opacityStart`    | `string` |   `-`    |           `0.5`            |
| Конец               |     `opacityEnd`     | `string` |   `-`    |            `1`             |
|                     |        Color         |          |          |                            |
| Включить            |    `colorEnabled`    |  `enum`  |  `off`   |            `on`            |
| Начало              |     `colorStart`     | `string` |   `-`    |           `#fff`           |
| Конец               |      `colorEnd`      | `string` |   `-`    |           `#000`           |
|                     |        Filter        |          |          |                            |
| Включить            |   `filterEnabled`    |  `enum`  |  `off`   |            `on`            |
| Начало              |    `filterStart`     | `string` |   `-`    |        `blur(5px)`         |
| Конец               |     `filterEnd`      | `string` |   `-`    |     `brightness(0.4)`      |
|                     |   Background Color   |          |          |                            |
| Включить            | `backgroundEnabled`  |  `enum`  |  `off`   |            `on`            |
| Начало              |  `backgroundStart`   | `string` |   `-`    |          `green`           |
| Конец               |   `backgroundEnd`    | `string` |   `-`    |           `red`            |
|                     |     Border Color     |          |          |                            |
| Включить            | `borderColorEnabled` |  `enum`  |  `off`   |            `on`            |
| Начало              |  `borderColorStart`  | `string` |   `-`    | `rgba(117, 190, 218, 0.0)` |
| Конец               |   `borderColorEnd`   | `string` |   `-`    | `hsla(50, 33%, 25%, 0.75)` |
|                     |      Box Shadow      |          |          |                            |
| Включить            |  `boxShadowEnabled`  |  `enum`  |  `off`   |            `on`            |
| Начало              |   `boxShadowStart`   | `string` |   `-`    |     `10px 5px 5px red`     |
| Конец               |    `boxShadowEnd`    | `string` |   `-`    |     `60px -16px teal`      |

#### The 'Enable' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| ON                 |       `on`       |
| OFF                |      `off`       |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/ScrollAnimation)

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re developing all the time, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we'd **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/SuF9vCMJGW)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
