## 📖 Подробный обзор

Компонент для встраивания аудиопроигрывателя на сайт.

## ⚙️ Использование

1.  Добавьте компонент на страницу
2.  Укажите `Ссылку на аудио-файл` на панели Props
3.  Посмотрите как он работает в режиме превью

### Использование Source и Track

Компонент Audio может содержать компоненты `Source` и `Track`.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств               | По умолчанию |        Пример        |
| :----------------------------- | :----------: | :------------------: |
| Ссылка на аудио-файл           |     `-`      | `Ссылка на ваш файл` |
| Автоматическое воспроизведение | `Не отмечен` |      `Отмечен`       |
| Показывать элементы управления |  `Отмечен`   |     `Не отмечен`     |
| Отключить звук                 | `Не отмечен` |      `Отмечен`       |
| Зациклить воспроизведение      | `Не отмечен` |      `Отмечен`       |

### В коде (для разработчиков)

| Названия свойств               | Название в коде |    Тип    | По умолчанию |        Пример        |
| :----------------------------- | :-------------: | :-------: | :----------: | :------------------: |
| Ссылка на аудио-файл           |     `title`     | `string`  |     `-`      | `Ссылка на ваш файл` |
| Автоматическое воспроизведение |   `autoPlay`    | `boolean` |   `false`    |        `true`        |
| Показывать элементы управления |   `controls`    | `boolean` |    `true`    |       `false`        |
| Отключить звук                 |     `muted`     | `boolean` |   `false`    |        `true`        |
| Зациклить воспроизведение      |     `loop`      | `boolean` |   `false`    |        `true`        |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/Audio.js)

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
