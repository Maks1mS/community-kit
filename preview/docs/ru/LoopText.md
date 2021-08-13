## 📖 Подробный обзор

Зацикленная анимация смены текстовых слайдов для ваших заголовков.

## ⚙️ Использование

Добавьте компонент на страницу и посмотрите в режиме превью.

### Изменение слайдов

Чтобы изменить надписи на свои, выберете компонент и измените значения свойства `Список слайдеров`.
Для добавления или удаления слайдов, воспользуйтесь соответствующими кнопками "+" и "-".‎

Примечание: слайды по умолчанию нельзя удалить, просто замените стандартный текст своим.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств                | По умолчанию |      Пример       |
| :------------------------------ | :----------: | :---------------: |
| Список слайдеров                |     `[]`     | `[first, second]` |
| Интервал смены слайдов          |    `3000`    |      `1500`       |
| Задержка перед началом анимации |     `0`      |      `1000`       |
| Длительность изменения ширины   |    `150`     |       `50`        |
| Анимация появления и скрытия    |  `Отмечен`   |   `Не отмечен`    |
| Скрытие анимации на границе     |  `Отмечен`   |   `Не отмечен`    |
| Запретить перенос текста        |  `Отмечен`   |   `Не отмечен`    |

### В коде (для разработчиков)

| Названия свойств                |   Название в коде    |    Тип    | По умолчанию |      Пример       |
| :------------------------------ | :------------------: | :-------: | :----------: | :---------------: |
| Список слайдеров                |       `slides`       | `string`  |     `[]`     | `[first, second]` |
| Интервал смены слайдов          |    `intervalProp`    | `string`  |    `3000`    |      `1500`       |
| Задержка перед началом анимации |     `delayProp`      | `string`  |     `0`      |      `1000`       |
| Длительность изменения ширины   | `adjustingSpeedProp` | `string`  |    `150`     |       `50`        |
| Анимация появления и скрытия    |        `fade`        | `boolean` |    `true`    |      `false`      |
| Скрытие анимации на границе     |        `mask`        | `boolean` |    `true`    |      `false`      |
| Запретить перенос текста        |       `noWrap`       | `boolean` |    `true`    |      `false`      |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/LoopText.js)

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
