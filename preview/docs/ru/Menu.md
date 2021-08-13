## 📖 Подробный обзор

Простое меню для вашего сайта.

## ⚙️ Использование

Добавьте компонент на страницу и измените значение свойства `Максимальная вложенность` при необходимости.

### Изменение корневой страницы

Cвойство `ID корневой страницы` позволяет указать страницу, для которой будет формироваться меню.
ID текущей страницы можно скопировать из адресной строки.
Например, для URL-адреса `https://quarkly.io/project/12345/page/67890`, ID страницы указан в конце и равен `67890`.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств                      | По умолчанию |  Пример   |
| :------------------------------------ | :----------: | :-------: |
| Максимальная вложенность              |     `1`      |    `5`    |
| ID корневой страницы                  |    `root`    |  `67890`  |
| Выделять родительские активные пункты | `Не отмечен` | `Отмечен` |

### В коде (для разработчиков)

| Названия свойств                      |   Название в коде    |    Тип    | По умолчанию | Пример  |
| :------------------------------------ | :------------------: | :-------: | :----------: | :-----: |
| Максимальная вложенность              |       `depth`        | `string`  |     `1`      |   `5`   |
| ID корневой страницы                  |       `rootId`       | `string`  |    `root`    | `67890` |
| Выделять родительские активные пункты | `exact-active-match` | `boolean` |   `false`    | `true`  |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/Menu.js)

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
