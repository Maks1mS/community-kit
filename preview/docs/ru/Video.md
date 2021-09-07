## 📖 Подробный обзор

Компонент для встраивания видеопроигрывателя на сайт.

## ⚙️ Использование

1.  Добавьте компонент на страницу
2.  Укажите `Ссылку на видео-файл` на панели Props
3.  Посмотрите как он работает в режиме превью

### Использование Source и Track

Компонент Video может содержать компоненты `Source` и `Track`.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств               | По умолчанию |         Пример          |
| :----------------------------- | :----------: | :---------------------: |
| Ссылка на видео-файл           |     `-`      |  `Ссылка на ваш файл`   |
| Изображение для превью         |     `-`      | `Ссылка на изображение` |
| Автоматическое воспроизведение |  `Отмечен`   |      `Не отмечен`       |
| Показывать элементы управления | `Не отмечен` |        `Отмечен`        |
| Отключить звук                 |  `Отмечен`   |      `Не отмечен`       |
| Зациклить воспроизведение      |  `Отмечен`   |      `Не отмечен`       |
| Воспроизведение при наведении  |  `Отмечен`   |      `Не отмечен`       |

### В коде (для разработчиков)

| Названия свойств               | Название в коде |    Тип    | По умолчанию |         Пример          |
| :----------------------------- | :-------------: | :-------: | :----------: | :---------------------: |
| Ссылка на видео-файл           |      `src`      | `string`  |     `-`      |  `Ссылка на ваш файл`   |
| Изображение для превью         |    `poster`     | `string`  |     `-`      | `Ссылка на изображение` |
| Автоматическое воспроизведение |   `autoPlay`    | `boolean` |    `true`    |         `false`         |
| Показывать элементы управления |   `controls`    | `boolean` |   `false`    |         `true`          |
| Отключить звук                 |     `muted`     | `boolean` |    `true`    |         `false`         |
| Зациклить воспроизведение      |     `loop`      | `boolean` |    `true`    |         `false`         |
| Воспроизведение при наведении  |  `playOnHover`  | `boolean` |    `true`    |         `false`         |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/Video/Video.js)

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
