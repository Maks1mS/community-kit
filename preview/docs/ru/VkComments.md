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
| Обновлять в реальном времени  | `Не отмечен` |                        `Отмечен`                         |
| Ссылка на страницу с виджетом |     `-`      |                           `-`                            |
| Добавлять граффити            | `Не отмечен` |                        `Отмечен`                         |
| Добавлять фотографии          | `Не отмечен` |                        `Отмечен`                         |
| Добавлять аудио               | `Не отмечен` |                        `Отмечен`                         |
| Добавлять видео               | `Не отмечен` |                        `Отмечен`                         |
| Добавлять ссылки              | `Не отмечен` |                        `Отмечен`                         |

### В коде (для разработчиков)

| Названия свойств              | Название в коде  |    Тип    | По умолчанию |                          Пример                          |
| :---------------------------- | :--------------: | :-------: | :----------: | :------------------------------------------------------: |
| ID приложения VK              |     `apiId`      | `string`  |     `-`      | [`ID вашего приложения VK`](https://vk.com/dev/Comments) |
| ID страницы VK                |     `pageId`     | `string`  |     `-`      |                  `ID вашей страницы VK`                  |
| Макс. комментариев            |     `limit`      | `number`  |     `5`      |                           `20`                           |
| Автопубликация                |  `autoPublish`   | `boolean` |   `false`    |                          `true`                          |
| Обновлять в реальном времени  |    `realtime`    | `boolean` |   `false`    |                          `true`                          |
| Ссылка на страницу с виджетом |    `pageUrl`     | `string`  |     `-`      |                           `-`                            |
| Добавлять граффити            | `attachGraffiti` | `boolean` |   `false`    |                          `true`                          |
| Добавлять фотографии          |  `attachPhoto`   | `boolean` |   `false`    |                          `true`                          |
| Добавлять аудио               |  `attachAudio`   | `boolean` |   `false`    |                          `true`                          |
| Добавлять видео               |  `attachVideo`   | `boolean` |   `false`    |                          `true`                          |
| Добавлять ссылки              |   `attachLink`   | `boolean` |   `false`    |                          `true`                          |

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
