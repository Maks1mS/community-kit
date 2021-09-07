## 📖 Подробный обзор

Компонент показывает форму с комментариями сообщества VK.

## ⚙️ Использование

1.  Добавьте компонент на страницу
2.  Укажите ваш `ID приложения VK` и `ID страницы VK`
3.  Посмотрите как он работает в режиме превью

### Приложение VK

Для работы компонента необходимо создать виджет комментария на сайте VK.
Сделать это можно по ссылке [VK Comment](https://vk.com/dev/Comments)

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств              | По умолчанию |                          Пример                          |
| :---------------------------- | :----------: | :------------------------------------------------------: |
| ID приложения VK              |     `-`      | [`ID вашего приложения VK`](https://vk.com/dev/Comments) |
| ID страницы VK                |     `-`      |                  `ID вашей страницы VK`                  |
| Макс. комментариев            |     `5`      |                           `20`                           |
| Автопубликация                | `Не отмечен` |                        `Отмечен`                         |
| Обновлять в реальном времени  |  `Отмечен`   |                       `Не отмечен`                       |
| Ссылка на страницу с виджетом |     `-`      |                `Ссылка на вашу страницу`                 |
| Добавлять граффити            |  `Отмечен`   |                       `Не отмечен`                       |
| Добавлять фотографии          |  `Отмечен`   |                       `Не отмечен`                       |
| Добавлять аудио               |  `Отмечен`   |                       `Не отмечен`                       |
| Добавлять видео               |  `Отмечен`   |                       `Не отмечен`                       |
| Добавлять ссылки              |  `Отмечен`   |                       `Не отмечен`                       |

### В коде (для разработчиков)

| Названия свойств              | Название в коде  |    Тип    | По умолчанию |                          Пример                          |
| :---------------------------- | :--------------: | :-------: | :----------: | :------------------------------------------------------: |
| ID приложения VK              |     `apiId`      | `string`  |     `-`      | [`ID вашего приложения VK`](https://vk.com/dev/Comments) |
| ID страницы VK                |     `pageId`     | `string`  |     `-`      |                  `ID вашей страницы VK`                  |
| Макс. комментариев            |     `limit`      | `number`  |     `5`      |                           `20`                           |
| Автопубликация                |  `autoPublish`   | `boolean` |   `false`    |                          `true`                          |
| Обновлять в реальном времени  |    `realtime`    | `boolean` |    `true`    |                         `false`                          |
| Ссылка на страницу с виджетом |    `pageUrl`     | `string`  |     `-`      |                `Ссылка на вашу страницу`                 |
| Добавлять граффити            | `attachGraffiti` | `boolean` |    `true`    |                         `false`                          |
| Добавлять фотографии          |  `attachPhoto`   | `boolean` |    `true`    |                         `false`                          |
| Добавлять аудио               |  `attachAudio`   | `boolean` |    `true`    |                         `false`                          |
| Добавлять видео               |  `attachVideo`   | `boolean` |    `true`    |                         `false`                          |
| Добавлять ссылки              |   `attachLink`   | `boolean` |    `true`    |                         `false`                          |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/VkComments.js)

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
