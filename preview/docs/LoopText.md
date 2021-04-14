## 📖 Detailed overview

Компонент показывает текст, часть которого выглядит как карусель. Можно использовать как заголовок, для привлечения внимания.

## 🎬 Live Demo

[Live demo link](https://quarkly-ui-components.netlify.app/looptext/)

## ⚙️ Usage

Добавьте компонент на страницу и посмотрите как он работает в режиме превью.

### Свои надписи

Чтобы изменить надписи на свои, выберете компонент и измените значения свойства `Список слайдеров`. Для удаления или добавления, воспользуйтесь соответствующими кнопками «+»‎ или «-».‎

### Скорость смены надписей

Для изменения скорости анимации, задайте новое значение свойству `Интервал смены слайдов`. Значение задается в миллисекундах.

## 🧩 Components and Props

| Props Name                      |   Type   |           Description           | Default |      Example      |
| ------------------------------- | :------: | :-----------------------------: | :-----: | :---------------: |
| Интервал смены слайдов          | `number` | Интервал смены слайдеров (в мс) | `1500`  |      `2000`       |
| Задержка между началом анимации | `number` | Задержка между началом анимации |   `0`   |      `1000`       |
| Скорость смены слайдера         | `number` |                                 |  `150`  |      `1000`       |
| Анимация появления и скрытия    |  `bool`  |  Анимация появления и скрытия   | `true`  |      `false`      |
| Скрыть анимации на границе      |  `bool`  |                                 | `true`  |      `false`      |
| Запретить перенос текста        |  `bool`  |    Запретить перенос текста     | `true`  |      `false`      |
| Список слайдеров                | `union`  |    Список названий надписей     |  `[]`   | `[first, secont]` |

## 🗓 Changelog

- 16/03/2021 (v1.0)
  - Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://feedback.quarkly.io/communities/1-quarkly-forum/categories/7-components/topics)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
