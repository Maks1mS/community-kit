## 📖 Подробный обзор

Компонент для встраивания видеопроигрывателя сервиса Vimeo.

## ⚙️ Использование

1.  Добавьте компонент на страницу
2.  Укажите `Ссылку или идентификатор видео` на панели Props
3.  Посмотрите как он работает в режиме превью

### Воспроизведение в фоновом режиме

Если активно свойство `Воспроизведение в фоновом режиме`, то видео будет воспроизводиться в фоновом режиме.
В этом случае скрываются все элементы управления, включается автоматическое воспроизведение и видео зацикливается.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств                 | По умолчанию |    Пример    |
| :------------------------------- | :----------: | :----------: |
| Ссылка или идентификатор видео   |     `-`      |   `123456`   |
| Начало воспроизведения (в сек.)  |     `0`      |     `30`     |
| Автоматическое воспроизведение   | `Не отмечен` |  `Отмечен`   |
| Автоматическая пауза             |  `Отмечен`   | `Не отмечен` |
| Показывать элементы управления   |  `Отмечен`   | `Не отмечен` |
| Цвет элементов управления        |  `#00ADEF`   |    `#000`    |
| Зациклить воспроизведение        | `Не отмечен` |  `Отмечен`   |
| Показывать название видео        |  `Отмечен`   | `Не отмечен` |
| Показывать превью видео          |  `Отмечен`   | `Не отмечен` |
| Показывать имя владельца         |  `Отмечен`   | `Не отмечен` |
| Громкость звука (от 0 до 1)      |     `1`      |     `0`      |
| Отключить звук                   | `Не отмечен` |  `Отмечен`   |
| Воспроизведение в фоновом режиме | `Не отмечен` |  `Отмечен`   |
| По ширине родителя               |  `Отмечен`   | `Не отмечен` |

### В коде (для разработчиков)

| Названия свойств                 | Название в коде  |    Тип    | По умолчанию |  Пример  |
| :------------------------------- | :--------------: | :-------: | :----------: | :------: |
| Ссылка или идентификатор видео   |     `video`      | `string`  |     `-`      | `123456` |
| Начало воспроизведения (в сек.)  |     `start`      | `number`  |     `0`      |   `30`   |
| Автоматическое воспроизведение   |    `autoplay`    | `boolean` |   `false`    |  `true`  |
| Автоматическая пауза             |   `autopause`    | `boolean` |    `true`    | `false`  |
| Показывать элементы управления   |    `controls`    | `boolean` |    `true`    | `false`  |
| Цвет элементов управления        |     `color`      | `string`  |  `#00ADEF`   |  `#000`  |
| Зациклить воспроизведение        |      `loop`      | `boolean` |   `false`    |  `true`  |
| Показывать название видео        |   `showTitle`    | `boolean` |    `true`    | `false`  |
| Показывать превью видео          |  `showPortrait`  | `boolean` |    `true`    | `false`  |
| Показывать имя владельца         |   `showByline`   | `boolean` |    `true`    | `false`  |
| Громкость звука (от 0 до 1)      |     `volume`     | `number`  |     `1`      |   `0`    |
| Отключить звук                   |     `muted`      | `boolean` |   `false`    |  `true`  |
| Воспроизведение в фоновом режиме | `playBackground` | `boolean` |   `false`    |  `true`  |
| По ширине родителя               |   `responsive`   | `boolean` |    `true`    | `false`  |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/Vimeo.js)

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
